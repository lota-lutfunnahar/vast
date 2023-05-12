"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>x,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>o(e,s(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const f={},y="pass",v={unversionedId:"understand/language/operators/pass",id:"version-VAST v3.0/understand/language/operators/pass",title:"pass",description:"Does nothing with the input. (This operator primarily for testing and",source:"@site/versioned_docs/version-VAST v3.0/understand/language/operators/pass.md",sourceDirName:"understand/language/operators",slug:"/understand/language/operators/pass",permalink:"/docs/VAST v3.0/understand/language/operators/pass",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/understand/language/operators/pass.md",tags:[],version:"VAST v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"head",permalink:"/docs/VAST v3.0/understand/language/operators/head"},next:{title:"pseudonymize",permalink:"/docs/VAST v3.0/understand/language/operators/pseudonymize"}},g={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Example",id:"example",level:2},{value:"YAML Syntax Example",id:"yaml-syntax-example",level:2}],O={toc:b},h="wrapper";function x(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(h,d(u(u({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"pass"}),"pass"),(0,n.kt)("p",null,"Does nothing with the input. (This operator primarily for testing and\ndebugging.)"),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"pass\n")),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"pass\n")),(0,n.kt)("h2",u({},{id:"yaml-syntax-example"}),"YAML Syntax Example"),(0,n.kt)("admonition",u({},{title:"Deprecated",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"The YAML syntax is deprecated since VAST v3.0, and will be removed in a future\nrelease. Please use the pipeline syntax instead.")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"pass:\n")))}x.isMDXComponent=!0}}]);