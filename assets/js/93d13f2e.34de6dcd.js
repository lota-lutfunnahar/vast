"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>x,frontMatter:()=>m,metadata:()=>k,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,s(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={},h="where",k={unversionedId:"understand/operators/transformations/where",id:"understand/operators/transformations/where",title:"where",description:"Filters events according to an expression.",source:"@site/docs/understand/operators/transformations/where.md",sourceDirName:"understand/operators/transformations",slug:"/understand/operators/transformations/where",permalink:"/docs/next/understand/operators/transformations/where",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/operators/transformations/where.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"unique",permalink:"/docs/next/understand/operators/transformations/unique"},next:{title:"Sinks",permalink:"/docs/next/understand/operators/sinks/"}},y={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;expression&gt;</code>",id:"expression",level:3},{value:"Examples",id:"examples",level:2}],b={toc:v},w="wrapper";function x(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(w,u(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"where"}),"where"),(0,r.kt)("p",null,"Filters events according to an ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/expressions"}),"expression"),"."),(0,r.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"where <expression>\n")),(0,r.kt)("h2",d({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," operator only keeps events that match the provided\n",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/expressions"}),"expression")," and discards all other events."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," to extract the subset of interest of the data. VAST's expression\nlanguage offers various ways to describe the desired data. In particular,\nexpressions work ",(0,r.kt)("em",{parentName:"p"},"across schemas")," and thus make it easy to concisely articulate\nconstraints."),(0,r.kt)("h3",d({},{id:"expression"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<expression>")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/next/understand/expressions"}),"expression")," to evaluate for each event."),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Select all events that contain a field with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.3.4"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"where 1.2.3.4\n")),(0,r.kt)("p",null,"This expression internally completes to ",(0,r.kt)("inlineCode",{parentName:"p"},":ip == 1.2.3.4"),". The type extractor\n",(0,r.kt)("inlineCode",{parentName:"p"},":ip")," describes all fields of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ip"),". Use field extractors to only consider a\nsingle field:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"where src_ip == 1.2.3.4\n")),(0,r.kt)("p",null,"As a slight variation of the above: use a nested field name and a temporal\nconstraint of the field with name ",(0,r.kt)("inlineCode",{parentName:"p"},"ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"where id.orig_h == 1.2.3.4 && ts > 1 hour ago\n")),(0,r.kt)("p",null,"Subnets are first-class values:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"where 10.10.5.0/25\n")),(0,r.kt)("p",null,"This expression unfolds to ",(0,r.kt)("inlineCode",{parentName:"p"},":ip in 10.10.5.0/25 || :subnet == 10.10.5.0/25"),'. It\nmeans "select all events that contain a field of type ',(0,r.kt)("inlineCode",{parentName:"p"},"ip")," in the subnet\n",(0,r.kt)("inlineCode",{parentName:"p"},"10.10.5.0/25"),", or a field of type ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet")," the exactly matches ",(0,r.kt)("inlineCode",{parentName:"p"},"10.10.5.0/25"),'".'),(0,r.kt)("p",null,"Expressions consist of predicates that can be connected with AND, OR, and NOT:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"where 10.10.5.0/25 && (orig_bytes > 1 Mi || duration > 30 min)\n")))}x.isMDXComponent=!0}}]);