"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[512],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(a),c=n,m=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"Parquet & Feather: Data Engineering Woes",authors:"dispanser",date:new Date("2023-01-10T00:00:00.000Z"),tags:["arrow","parquet","feather"]},i=void 0,s={permalink:"/blog/parquet-and-feather-data-engineering-woes",source:"@site/blog/parquet-and-feather-data-engineering-woes/index.md",title:"Parquet & Feather: Data Engineering Woes",description:"Apache Arrow and [Apache",date:"2023-01-10T00:00:00.000Z",formattedDate:"January 10, 2023",tags:[{label:"arrow",permalink:"/blog/tags/arrow"},{label:"parquet",permalink:"/blog/tags/parquet"},{label:"feather",permalink:"/blog/tags/feather"}],readingTime:7.115,hasTruncateMarker:!0,authors:[{name:"Thomas Peiselt",title:"Data Engineer",url:"https://github.com/dispanser",email:"thomas@tenzir.com",imageURL:"https://github.com/dispanser.png",key:"dispanser"}],frontMatter:{title:"Parquet & Feather: Data Engineering Woes",authors:"dispanser",date:"2023-01-10T00:00:00.000Z",tags:["arrow","parquet","feather"]},prevItem:{title:"The New REST API",permalink:"/blog/the-new-rest-api"},nextItem:{title:"VAST v2.4.1",permalink:"/blog/vast-v2.4.1"}},p={authorsImageUrls:[void 0]},l=[{value:"Row Groups",id:"row-groups",level:2},{value:"Arrow \u2192 Parquet \u2192 Arrow Roundtrip Schema Mismatch",id:"arrow--parquet--arrow-roundtrip-schema-mismatch",level:2},{value:"VAST Enumerations",id:"vast-enumerations",level:3},{value:"Extension Types inside Maps",id:"extension-types-inside-maps",level:3},{value:"Apache Spark Support",id:"apache-spark-support",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/"},"Apache Arrow")," and ",(0,n.kt)("a",{parentName:"p",href:"https://parquet.apache.org"},"Apache\nParquet")," have become the de-facto columnar formats\nfor in-memory and on-disk representations when it comes to structured data.\nBoth are strong together, as they provide data interoperability and foster a\ndiverse ecosystem of data tools. But how well do they actually work together\nfrom an engineering perspective?"),(0,n.kt)("p",null,"In our previous posts, we introduced the formats and did a quantitative\ncomparison of Parquet and Feather-on the write path. In this post, we look at\nthe developer experience."),(0,n.kt)("admonition",{title:"Parquet & Feather: 3/3",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This blog post is the last part of a 3-piece series on Parquet and Feather."),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/blog/parquet-and-feather-enabling-open-investigations/"},"Enabling Open Investigations")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/blog/parquet-and-feather-writing-security-telemetry/"},"Writing Security Telemetry")),(0,n.kt)("li",{parentName:"ol"},"This blog post"))),(0,n.kt)("p",null,"While our Feather implementation proved to be straight-forward, the Parquet\nstore implementation turned out to be more difficult. Recall that VAST has its\nown ",(0,n.kt)("a",{parentName:"p",href:"https://vast.io/docs/understand-vast/data-model/type-system"},"type system"),"\nrelying on ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/format/Columnar.html#extension-types"},"Arrow extension\ntypes")," to\nexpress domain-specific concepts like IP addresses, subnets, or enumerations. We\nhit a few places where the Arrow C++ implementation does not support all VAST\ntypes directly. It's trickier than we thought, as we see next."),(0,n.kt)("h2",{id:"row-groups"},"Row Groups"),(0,n.kt)("p",null,"In Apache Parquet, a ",(0,n.kt)("a",{parentName:"p",href:"https://parquet.apache.org/docs/concepts/"},"row group")," is a\nsubset of a Parquet file that's itself written in a columnar fashion. Smaller\nrow groups allow for higher granularity in reading parts of an individual file,\nat the expense of a potentially increased file size due to less optimal\nencoding. In VAST, we send around ",(0,n.kt)("a",{parentName:"p",href:"https://vast.io/docs/setup-vast/tune"},"batches of\ndata")," that are considerably smaller than\nwhat a recommended Parquet file size would look like. A typical Parquet file\nsize recommendation is 1GB, which translates to 5\u201310GB of data in memory when\nreading the entire file. To produce files sized in this order of magnitude, we\nplanned to use individual row groups, each of which aligned with the size of our\nArrow record batches that comprise 2",(0,n.kt)("sup",null,"16")," events occupying a few MBs."),(0,n.kt)("p",null,"However, attempting to read a Parquet file that was split into multiple row\ngroups doesn't work for some of our schemas, yielding:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NotImplemented: Nested data conversions not implemented for chunked array outputs\n")),(0,n.kt)("p",null,"This appears to be related to\n",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/ARROW-5030"},"ARROW-5030"),". Our current\nworkaround is to write a single row group, and split up the resulting Arrow\nrecord batches into the desired size after reading. However, this increases\nlatency to first result, an important metric for some interactive use cases we\nenvision for VAST."),(0,n.kt)("h2",{id:"arrow--parquet--arrow-roundtrip-schema-mismatch"},"Arrow \u2192 Parquet \u2192 Arrow Roundtrip Schema Mismatch"),(0,n.kt)("p",null,"Parquet is a separate project which precedes Arrow, and has its own data types,\nwhich don't exactly align with what Arrow provides. While it's possible to\ninstruct Arrow to also serialize ",(0,n.kt)("a",{parentName:"p",href:"https://arrow.apache.org/docs/cpp/api/formats.html#_CPPv4N7parquet21ArrowWriterProperties7BuilderE"},"its own\nschema"),"\ninto the Parquet file metadata, this doesn't seem to play well in concert with\nextension types. As a result, a record batch written to and then read from a\nParquet file no longer adheres to the same schema!"),(0,n.kt)("p",null,"This bit us in the following scenarios."),(0,n.kt)("h3",{id:"vast-enumerations"},"VAST Enumerations"),(0,n.kt)("p",null,"VAST comes with an enumeration type that represents a fixed mapping of strings\nto numeric values, where the mapping is part of the type metadata. We represent\nenums as extension types wrapping an Arrow dictionary of strings backed by\nunsigned 8-bit integers. On read, Arrow turns these 8-bit index values into\n32-bit values, which is not compatible with our extension type definition, so\nthe extension type wrapping is lost. The diagram below illustrates this issue."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Arrow Schema Conversion #width500",src:a(94208).Z+"#gh-light-mode-only",width:"1200",height:"1332"}),"\n",(0,n.kt)("img",{alt:"Arrow Schema Conversion #width500",src:a(88661).Z+"#gh-dark-mode-only",width:"1200",height:"1332"})),(0,n.kt)("h3",{id:"extension-types-inside-maps"},"Extension Types inside Maps"),(0,n.kt)("p",null,"Both our address type and subnet type extensions are lost if they occur in\nnested records. For example, a map from a VAST address to a VAST enumeration of\nthe following Arrow type is not preserved:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"map<extension<vast.address>, extension<vast.enumeration>>\n")),(0,n.kt)("p",null,"After reading it from a Parquet file, the resulting Arrow type is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"map<fixed_size_binary[16], string>.\n")),(0,n.kt)("p",null,"The key, an address type, has been replaced by its physical representation,\nwhich is 16 bytes (allowing room for an IPv6 address). Interestingly, the\nenumeration is replaced by a string instead of a dictionary as observed in the\nprevious paragraph. So the same type behaves differently depending on where in\nthe schema it occurs."),(0,n.kt)("p",null,"We created an issue in the Apache JIRA to track this:\n",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/ARROW-17839"},"ARROW-17839"),"."),(0,n.kt)("p",null,"To fix these 3 issues, we're post-processing the data after reading it from\nParquet. The workaround is a multi-step process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Side-load the Arrow schema from the Parquet metadata. This yields the actual\nschema, because it's in no way related to Parquet other than using its\nmetadata capabilities to store it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Load the actual Arrow table. This table has its own schema, which is not the\nsame schema as the one derived from the Parquet metadata directly.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Finally, recursively walk the two schema trees with the associated data\ncolumns, and whenever there's a mismatch between the two, fix the data arrays\nby casting or transforming it, yielding a table that is aligned with the\nexpected schema."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the first case (",(0,n.kt)("inlineCode",{parentName:"p"},"dictionary")," vs ",(0,n.kt)("inlineCode",{parentName:"p"},"vast.enumeration"),") we cast the ",(0,n.kt)("inlineCode",{parentName:"p"},"int32"),"\nArrow array of values into a ",(0,n.kt)("inlineCode",{parentName:"p"},"uint8")," Arrow array, and manually create the\nwrapping extension type and extension array. This is relatively cheap, as\ncasting is cheap and the wrapping is done at the array level, not the value\nlevel.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the second case (physical ",(0,n.kt)("inlineCode",{parentName:"p"},"binary[16]")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"vast.address"),") we\njust wrap it in the appropriate extension type. Again, this is a cheap\noperation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The most expensive fix-up we perform is when the underlying type has been\nchanged from an enumeration to a string: we have to create the entire array\nfrom scratch after building a lookup table that translates the string values\ninto their corresponding numerical representation."))))),(0,n.kt)("h2",{id:"apache-spark-support"},"Apache Spark Support"),(0,n.kt)("p",null,"So now VAST writes its data into a standardized, open format\u2014we integrate\nseamlessly with the entire big data ecosystem, for free, right? I can read my\nVAST database with Apache Spark and analyze security telemetry data on a\n200-node cluster?"),(0,n.kt)("p",null,"Nope. It\u2019s not ",(0,n.kt)("em",{parentName:"p"},"that")," standardized. Yet. Not every tool or library supports\nevery data type. In fact, as discussed above, writing a Parquet file and reading\nit back ",(0,n.kt)("em",{parentName:"p"},"even with the same tool")," doesn't always produce the data you started\nwith."),(0,n.kt)("p",null,"We attempting to load a Parquet file with a single row, and a single field of\ntype VAST's ",(0,n.kt)("inlineCode",{parentName:"p"},"count")," (a 64-bit unsigned integer) into Apache Spark v3.2, we are\ngreeted with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"org.apache.spark.sql.AnalysisException: Illegal Parquet type: INT64 (TIMESTAMP(NANOS,false))\n  at org.apache.spark.sql.errors.QueryCompilationErrors$.illegalParquetTypeError(QueryCompilationErrors.scala:1284)\n")),(0,n.kt)("p",null,"Apache Spark v3.2 refuses to read the ",(0,n.kt)("inlineCode",{parentName:"p"},"import_time")," field (a metadata column\nadded by VAST itself). It turns out that Spark v3.2 has a\n",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/SPARK-40819"},"regression"),". Let's try with\nversion v3.1 instead, which shouldn\u2019t have this problem:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"org.apache.spark.sql.AnalysisException: Parquet type not supported: INT64 (UINT_64)\n")),(0,n.kt)("p",null,"We got past the timestamp issue, but it still doesn't work: Spark only supports\nsigned integer types, and refuses to load our Parquet file with an unsigned 64\nbit integer value. The ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/SPARK-10113"},"related Spark JIRA\nissue"),' is marked as resolved,\nbut unfortunately the resolution is "a better error message." However, ',(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/64383029"},"this\nstack overflow post")," has the solution: if\nwe define an explicit schema, Spark happily converts our column into a signed\ntype."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val schema = StructType(\n  Array(\n    StructField("event",\n      StructType(\n        Array(\n          StructField("c", LongType))))))\n')),(0,n.kt)("p",null,"Finally, it works!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"scala> spark.read.schema(schema).parquet(<file>).show()\n+-----+\n|event|\n+-----+\n| {13}|\n+-----+\n")),(0,n.kt)("p",null,"We were able to read VAST data in Spark, but it's not an easy and out-of-the-box\nexperience we were hoping for. It turns out that different tools don't always\nsupport all the data types, and additional effort is required to integrate with\nthe big players in the Parquet ecosystem."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"We love Apache Arrow\u2014it's a cornerstone of our system, and we'd be in much\nworse shape without it. We use it everywhere from the storage layer (using\nFeather and Parquet) to the data plane (where we are passing around Arrow record\nbatches)."),(0,n.kt)("p",null,"However, as VAST uses a few less common Arrow features we sometimes stumble over\nsome of the rougher edges. We're looking forward to fixing some of these things\nupstream, but sometimes you just need a quick solution to help our users."),(0,n.kt)("p",null,"The real reason why we wrote this blog post is to show how quickly the data\nengineering can escalate. This is the long tail that nobody wants to talk about\nwhen telling you to build your own security data lake. And it quickly adds up!\nIt's also heavy-duty data wrangling, and not ideally something you want your\nsecurity team working on when they would be more useful hunting threats. Even\nmore reasons to use a purpose-built security data technology like VAST."))}u.isMDXComponent=!0},88661:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/arrow-schema-conversion.dark-c0ed8d2412b93e864af619f6726a1bc1.png"},94208:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/arrow-schema-conversion.light-ffc55d24bbaf58d72fbdc0f7eb08d2b4.png"}}]);