"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,m=c["".concat(p,".").concat(u)]||c[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&l(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&l(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={},v="extend",y={unversionedId:"understand/operators/transformations/extend",id:"version-VAST v3.1/understand/operators/transformations/extend",title:"extend",description:"Appends fields to events.",source:"@site/versioned_docs/version-VAST v3.1/understand/operators/transformations/extend.md",sourceDirName:"understand/operators/transformations",slug:"/understand/operators/transformations/extend",permalink:"/docs/understand/operators/transformations/extend",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.1/understand/operators/transformations/extend.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"drop",permalink:"/docs/understand/operators/transformations/drop"},next:{title:"hash",permalink:"/docs/understand/operators/transformations/hash"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field=operand&gt;</code>",id:"fieldoperand",level:3},{value:"Examples",id:"examples",level:3}],k={toc:h},x="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(x,f(c(c({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"extend"}),"extend"),(0,r.kt)("p",null,"Appends fields to events."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"extend <field=operand>...\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," appends a specified list of fields to the input. All existing\nfields remain intact."),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/understand/operators/transformations/put"}),(0,r.kt)("inlineCode",{parentName:"a"},"put"))," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"put")," drops all\nfields not explicitly specified, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," only appends fields."),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," and ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/understand/operators/transformations/replace"}),(0,r.kt)("inlineCode",{parentName:"a"},"replace"))," is that ",(0,r.kt)("inlineCode",{parentName:"p"},"replace"),"\noverwrites existing fields, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"extend")," doesn't touch the input."),(0,r.kt)("h3",c({},{id:"fieldoperand"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<field=operand>")),(0,r.kt)("p",null,"The assignment consists of ",(0,r.kt)("inlineCode",{parentName:"p"},"field")," that describes the new field name and\n",(0,r.kt)("inlineCode",{parentName:"p"},"operand")," that defines the field value."),(0,r.kt)("h3",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Add new fields with fixed values:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),'extend secret="xxx", ints=[1, 2, 3], strs=["a", "b", "c"]\n')),(0,r.kt)("p",null,"Duplicate a column:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"extend source=src_ip\n")))}O.isMDXComponent=!0}}]);