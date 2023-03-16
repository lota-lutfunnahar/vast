"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>w,frontMatter:()=>h,metadata:()=>v,toc:()=>f});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const h={},y="Python",v={unversionedId:"use/integrate/python",id:"use/integrate/python",title:"Python",description:"VAST ships with Python bindings to enable interaction with VAST with primitives",source:"@site/docs/use/integrate/python.md",sourceDirName:"use/integrate",slug:"/use/integrate/python",permalink:"/docs/next/use/integrate/python",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/use/integrate/python.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"REST API",permalink:"/docs/next/use/integrate/rest-api/"},next:{title:"Threat Bus",permalink:"/docs/next/use/integrate/threatbus/"}},k={},f=[{value:"Install the PyPI package",id:"install-the-pypi-package",level:2},{value:"Use PyVAST",id:"use-pyvast",level:2},{value:"Quickstart",id:"quickstart",level:3},{value:"Overview",id:"overview",level:3},{value:"class VAST",id:"class-vast",level:3},{value:"export",id:"export",level:4},{value:"count",id:"count",level:4},{value:"status",id:"status",level:4},{value:"class TableSlice",id:"class-tableslice",level:3},{value:"class VastRow",id:"class-vastrow",level:3}],g={toc:f},b="wrapper";function w(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(b,d(u(u({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",u({},{id:"python"}),"Python"),(0,a.kt)("p",null,"VAST ships with Python bindings to enable interaction with VAST with primitives\nthat integrate well with the Python ecosystem. We distribute the bindings as\nPyPI package called ",(0,a.kt)("a",u({parentName:"p"},{href:"https://pypi.org/project/pyvast/"}),"pyvast"),"."),(0,a.kt)("admonition",u({},{title:"Experimental",type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"PyVAST is considered experimental and subject to change without notice.")),(0,a.kt)("h2",u({},{id:"install-the-pypi-package"}),"Install the PyPI package"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," to install PyVAST:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pip install pyvast\n")),(0,a.kt)("h2",u({},{id:"use-pyvast"}),"Use PyVAST"),(0,a.kt)("h3",u({},{id:"quickstart"}),"Quickstart"),(0,a.kt)("p",null,"The following snippet illustrates a small script to query VAST."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),'#!/usr/bin/env python3\n\nimport asyncio\nfrom pyvast import VAST, to_json_rows\n\nasync def example():\n    vast = VAST()\n\n    generator = vast.export("192.168.1.103", limit=10)\n    async for row in to_json_rows(generator):\n        print(row)\n\nasyncio.run(example())\n')),(0,a.kt)("h3",u({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"PyVAST is meant to expose all the VAST features that are relevant in a Python\nenvironment. For now though, it is still in active development and only the\nfollowing interfaces are exposed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"export")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status"))),(0,a.kt)("p",null,"Many options that exist on the CLI are not mapped to PyVAST. The idea here is to\navoid overwhelming the API with options that are actually not needed when\ninteracting with VAST from Python."),(0,a.kt)("h3",u({},{id:"class-vast"}),"class VAST"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    class VAST(\n        endpoint: Optional[str]\n    )\n")),(0,a.kt)("p",null,"Create a connection to a VAST node that is listening at the specified endpoint.\nIf no enpdoint is given the ",(0,a.kt)("inlineCode",{parentName:"p"},"VAST_ENDPOINT")," environment variable is used, if\nthat is also not present the ",(0,a.kt)("inlineCode",{parentName:"p"},"vast.endpoint")," value from a local ",(0,a.kt)("inlineCode",{parentName:"p"},"vast.yaml"),"\nconfiguration file is used. In case that value is also not present the default\nconnection endpoint of ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:5158")," is used."),(0,a.kt)("h4",u({},{id:"export"}),"export"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine export(\n        expression: str,\n        mode: ExportMode = ExportMode.HISTORICAL,\n        limit: int = 100\n    ) -> AsyncIterable[TableSlice]\n")),(0,a.kt)("p",null,"Evaluate an expression in a VAST node and receive the resulting events in an\nasynchronous stream of ",(0,a.kt)("inlineCode",{parentName:"p"},"TableSlices"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," argument can be set to one of ",(0,a.kt)("inlineCode",{parentName:"p"},"HISTORICAL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTINUOUS"),", or\n",(0,a.kt)("inlineCode",{parentName:"p"},"UNIFIED"),". A historical export evaluates the expression against data\nthat is stored in the VAST database, the resulting output stream ends\nwhen all eligible data has been evaluated. A ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTINUOUS")," one looks at data\nas it flows into the node, it will continue to run until the event limit is\nreached, it gets discarded, or the node terminates."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," argument sets an upper bound on the number of events that should\nbe produced. The special value ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," indicates that the number of results is\nunbounded."),(0,a.kt)("h4",u({},{id:"count"}),"count"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine count(\n        expression: str\n    ) -> int\n")),(0,a.kt)("p",null,"Evaluate the sum of all events in the database that match the given expression."),(0,a.kt)("h4",u({},{id:"status"}),"status"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine status() -> dict\n")),(0,a.kt)("p",null,"Retrieve the current status from VAST."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),">>> st = await vast.status()\n>>> pprint.pprint(st[\"system\"])\n{'current-memory-usage': 729628672,\n 'database-path': '/var/lib/vast',\n 'in-memory-table-slices': 0,\n 'peak-memory-usage': 729628672,\n 'swap-space-usage': 0}\n")),(0,a.kt)("h3",u({},{id:"class-tableslice"}),"class TableSlice"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine collect_pyarrow(\n        stream: AsyncIterable[TableSlice],\n    ) -> dict[str, list[pyarrow.Table]]\n")),(0,a.kt)("p",null,"Collect a stream of ",(0,a.kt)("inlineCode",{parentName:"p"},"TableSlice")," and return a dictionary of ",(0,a.kt)("a",u({parentName:"p"},{href:"https://arrow.apache.org/docs/python/index.html"}),"Arrow\ntables")," indexed by schema name."),(0,a.kt)("h3",u({},{id:"class-vastrow"}),"class VastRow"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"VastRow"),' is a Python native representation of an "event" from VAST. It\nconsists of a ',(0,a.kt)("inlineCode",{parentName:"p"},"name")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," dictionary."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-py"}),"    coroutine to_json_rows(\n        stream: AsyncIterable[TableSlice],\n    ) -> AsyncIterable[VastRow]\n")),(0,a.kt)("p",null,"Convert a stream of ",(0,a.kt)("inlineCode",{parentName:"p"},"TableSlice"),"s to a stream of ",(0,a.kt)("inlineCode",{parentName:"p"},"VastRow"),"s."))}w.isMDXComponent=!0}}]);