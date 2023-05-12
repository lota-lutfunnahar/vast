"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>h,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={description:"Columnar format for analytics workloads"},h="Arrow",y={unversionedId:"understand/formats/arrow",id:"version-VAST v3.1/understand/formats/arrow",title:"Arrow",description:"Columnar format for analytics workloads",source:"@site/versioned_docs/version-VAST v3.1/understand/formats/arrow.md",sourceDirName:"understand/formats",slug:"/understand/formats/arrow",permalink:"/docs/understand/formats/arrow",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.1/understand/formats/arrow.md",tags:[],version:"VAST v3.1",frontMatter:{description:"Columnar format for analytics workloads"},sidebar:"docsSidebar",previous:{title:"Formats",permalink:"/docs/understand/formats/"},next:{title:"ASCII",permalink:"/docs/understand/formats/ascii"}},w={},b=[{value:"Parser",id:"parser",level:2},{value:"Output",id:"output",level:2}],g={toc:b},v="wrapper";function k(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(v,m(d(d({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"arrow"}),"Arrow"),(0,n.kt)("p",null,"VAST supports reading and writing data in the binary ",(0,n.kt)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/format/Columnar.html#serialization-and-interprocess-communication-ipc"}),(0,n.kt)("inlineCode",{parentName:"a"},"Arrow IPC")),"\ncolumnar format, suitable for efficient handling of large data sets. For\nexample, VAST's ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/use/integrate/python"}),"Python bindings")," use this format\nfor high-bandwidth data exchange."),(0,n.kt)("admonition",d({},{title:"Extension Types",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"VAST translates its own types into Arrow ",(0,n.kt)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/format/Columnar.html#extension-types"}),"extension\ntypes"),"\nto properly describe domain-specific concepts like IP addresses or subnets.\nVAST's ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/use/integrate/python"}),"Python bindings")," come with the required tooling, so you can\nwork with native types instead of relying on generic string or number\nrepresentations.")),(0,n.kt)("h2",d({},{id:"parser"}),"Parser"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"import arrow")," command imports ",(0,n.kt)("a",d({parentName:"p"},{href:"https://arrow.apache.org/docs/format/Columnar.html#serialization-and-interprocess-communication-ipc"}),(0,n.kt)("inlineCode",{parentName:"a"},"Arrow IPC"))," data. This allows\nfor efficiently transferring data between VAST nodes:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"VAST_SOURCE_HOST=localhost:5158\nVAST_DESTINATION_HOST=localhost:42001\n\n# Transfer all Zeek events from the VAST node at VAST_SOURCE_HOST to the VAST\n# node at VAST_DESTINATION_HOST.\nvast --endpoint=${VAST_SOURCE_HOST} export arrow '#type == /zeek.*/' \\\n  | vast --endpoint=${VAST_DESTINATION_HOST} import arrow\n")),(0,n.kt)("admonition",d({},{title:"Limited Compatibility",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Technically, this format carries the schema alongside the data: ",(0,n.kt)("inlineCode",{parentName:"p"},"import arrow"),"\nis self-contained and does not require an additional schema. However, the Arrow\nimport is currently limited to Arrow data that was exported by VAST via the\n",(0,n.kt)("inlineCode",{parentName:"p"},"export arrow")," command. We plan to remove this restriction in the future,\nallowing the following Python code to work:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-python",metastring:"title=generate.py",title:"generate.py"}),"import pyarrow as pa\nimport sys\n\ndata = [\n    pa.array([1, 2, 3, 4]),\n    pa.array(['foo', 'bar', 'baz', None]),\n    pa.array([True, None, False, True])\n]\n\nbatch = pa.record_batch(data, names=['a', 'b', 'c'])\n\nsink = pa.output_stream(sys.stdout.buffer)\nwith pa.ipc.new_stream(sink, batch.schema) as writer:\n   for i in range(5):\n      writer.write_batch(batch)\n")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"python generate.py | vast import arrow\n"))),(0,n.kt)("h2",d({},{id:"output"}),"Output"),(0,n.kt)("p",null,"Since Arrow IPC is self-contained and includes the full schema, you can use it\nto transfer data between VAST nodes, even if the target node is not aware of the\nunderlying schema."),(0,n.kt)("p",null,"To export a query result as an Arrow IPC stream, use ",(0,n.kt)("inlineCode",{parentName:"p"},"export arrow"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast export arrow '1.2.3.4 || #type == \"suricata.alert\"'\n")),(0,n.kt)("p",null,"Note that this generates binary output. Make sure you pipe the output to a tool\nthat reads an Arrow IPC stream on stdin."),(0,n.kt)("p",null,"VAST's ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/use/integrate/python"}),"Python bindings")," use this method to retrieve data from a\nVAST server."))}k.isMDXComponent=!0}}]);