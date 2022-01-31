#include "vast/arrow_extension_types.hpp"

#include "vast/detail/narrow.hpp"
#include "vast/die.hpp"

#include <simdjson.h>

namespace vast {

enum_extension_type::enum_extension_type(enumeration_type enum_type)
  : arrow::ExtensionType(arrow::dictionary(arrow::int16(), arrow::utf8())),
    enum_type_(std::move(enum_type)) {
}

bool enum_extension_type::ExtensionEquals(const ExtensionType& other) const {
  if (other.extension_name() == this->extension_name()) {
    return this->enum_type_
           == static_cast<const enum_extension_type&>(other).enum_type_;
  }
  return false;
}

std::string enum_extension_type::ToString() const {
  return fmt::format("{} <{}>", this->extension_name(), this->enum_type_);
}

std::string enum_extension_type::extension_name() const {
  return "vast.enum";
}

std::shared_ptr<arrow::Array>
enum_extension_type::MakeArray(std::shared_ptr<arrow::ArrayData> data) const {
  VAST_ASSERT(data->type->id() == arrow::Type::EXTENSION);
  VAST_ASSERT(ExtensionEquals(static_cast<const ExtensionType&>(*data->type)));
  return std::make_shared<arrow::ExtensionArray>(data);
}

arrow::Result<std::shared_ptr<arrow::DataType>>
enum_extension_type::Deserialize(std::shared_ptr<arrow::DataType> storage_type,
                                 const std::string& serialized) const {
  if (!storage_type->Equals(*storage_type_)) {
    return arrow::Status::Invalid("Invalid storage type for VAST enum "
                                  "dictionary: ",
                                  storage_type->ToString());
  }
  // simdjson requires additional padding on the string
  simdjson::padded_string json{serialized};
  simdjson::dom::parser parser;
  auto doc = parser.parse(json);
  // TODO: use field_view as soon as simdjson::ondemand hits (one less copy)
  std::vector<struct vast::enumeration_type::field> enum_fields{};
  for (auto f : doc.get_object()) {
    std::string_view key = f.key;
    if (!f.value.is<uint64_t>())
      return arrow::Status::SerializationError(f.value, " is not an uint64_t");
    enum_fields.push_back(
      {std::string{key}, detail::narrow_cast<uint32_t>(f.value.get_uint64())});
  }
  return std::make_shared<enum_extension_type>(enumeration_type{enum_fields});
}

std::string enum_extension_type::Serialize() const {
  auto out = std::string{};
  auto inserter = std::back_inserter(out);
  fmt::format_to(inserter, "{{ ");
  bool first = true;
  for (const auto& f : enum_type_.fields()) {
    if (first)
      first = false;
    else
      fmt::format_to(inserter, ", ");
    fmt::format_to(inserter, "\"{}\": {}", f.name, f.key);
  }
  fmt::format_to(inserter, "}}");
  return out;
}

enumeration_type enum_extension_type::get_enum_type() const {
  return this->enum_type_;
}

address_extension_type::address_extension_type()
  : arrow::ExtensionType(arrow::fixed_size_binary(16)) {
}

std::string address_extension_type::extension_name() const {
  return id;
}

bool address_extension_type::ExtensionEquals(const ExtensionType& other) const {
  return other.extension_name() == this->extension_name();
}

std::shared_ptr<arrow::Array>
address_extension_type::MakeArray(std::shared_ptr<arrow::ArrayData> data) const {
  return std::make_shared<arrow::ExtensionArray>(data);
}

arrow::Result<std::shared_ptr<arrow::DataType>>
address_extension_type::Deserialize(std::shared_ptr<DataType> storage_type,
                                    const std::string& serialized) const {
  if (serialized != id)
    return arrow::Status::Invalid("Type identifier did not match");
  if (!storage_type->Equals(this->storage_type_))
    return arrow::Status::Invalid("Storage type did not match "
                                  "fixed_size_binary(16)");
  return std::make_shared<address_extension_type>();
}

std::string address_extension_type::Serialize() const {
  return id;
}

const std::string address_extension_type::id = "vast.address";

const std::shared_ptr<arrow::DataType> address_extension_type::arrow_type
  = arrow::fixed_size_binary(16);

subnet_extension_type::subnet_extension_type()
  : arrow::ExtensionType(arrow_type) {
}

bool subnet_extension_type::ExtensionEquals(const ExtensionType& other) const {
  return other.extension_name() == this->extension_name();
}

std::string subnet_extension_type::extension_name() const {
  return id;
}

std::shared_ptr<arrow::Array>
subnet_extension_type::MakeArray(std::shared_ptr<arrow::ArrayData> data) const {
  return std::make_shared<arrow::ExtensionArray>(data);
}

std::string subnet_extension_type::Serialize() const {
  return id;
}

arrow::Result<std::shared_ptr<arrow::DataType>>
subnet_extension_type::Deserialize(std::shared_ptr<DataType> storage_type,
                                   const std::string& serialized) const {
  if (serialized != id)
    return arrow::Status::Invalid("Type identifier did not match");
  if (!storage_type->Equals(this->storage_type_))
    return arrow::Status::Invalid(
      fmt::format("Storage type did not match {}", arrow_type->ToString()));
  return std::make_shared<subnet_extension_type>();
}

const std::shared_ptr<arrow::DataType> subnet_extension_type::arrow_type
  = arrow::struct_({arrow::field("length", arrow::uint8()),
                    arrow::field("address", make_arrow_address())});

const std::string subnet_extension_type::id = "vast.subnet";

const std::string pattern_extension_type::id = "vast.pattern";

pattern_extension_type::pattern_extension_type()
  : arrow::ExtensionType(arrow_type) {
}

std::string pattern_extension_type::extension_name() const {
  return id;
}

bool pattern_extension_type::ExtensionEquals(const ExtensionType& other) const {
  return other.extension_name() == this->extension_name();
}

std::shared_ptr<arrow::Array>
pattern_extension_type::MakeArray(std::shared_ptr<arrow::ArrayData> data) const {
  return std::make_shared<arrow::ExtensionArray>(data);
}

arrow::Result<std::shared_ptr<arrow::DataType>>
pattern_extension_type::Deserialize(std::shared_ptr<DataType> storage_type,
                                    const std::string& serialized) const {
  if (serialized != id)
    return arrow::Status::Invalid("Type identifier did not match");
  if (!storage_type->Equals(this->storage_type_))
    return arrow::Status::Invalid("Storage type did not match "
                                  "fixed_size_binary(16)");
  return std::make_shared<pattern_extension_type>();
}

std::string pattern_extension_type::Serialize() const {
  return id;
}

const std::shared_ptr<arrow::DataType> pattern_extension_type::arrow_type
  = arrow::utf8();

namespace {

void register_extension_type(const std::shared_ptr<arrow::ExtensionType>& t) {
  if (auto et = arrow::GetExtensionType(t->extension_name()); !et)
    if (!arrow::RegisterExtensionType(t).ok())
      die(fmt::format("unable to register extension type; {}",
                      t->extension_name()));
}

} // namespace

void register_extension_types() {
  register_extension_type(make_arrow_enum(enumeration_type{{}}));
  register_extension_type(make_arrow_address());
  register_extension_type(make_arrow_subnet());
  register_extension_type(make_arrow_pattern());
}

std::shared_ptr<address_extension_type> make_arrow_address() {
  return std::make_shared<address_extension_type>();
}

std::shared_ptr<subnet_extension_type> make_arrow_subnet() {
  return std::make_shared<subnet_extension_type>();
}

std::shared_ptr<pattern_extension_type> make_arrow_pattern() {
  return std::make_shared<pattern_extension_type>();
}

std::shared_ptr<enum_extension_type> make_arrow_enum(enumeration_type t) {
  return std::make_shared<enum_extension_type>(t);
}

} // namespace vast
