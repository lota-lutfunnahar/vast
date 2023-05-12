"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),o=r(86010),i=r(22093),c=r(11128),a=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",s.cardContainer)},t)}function p({href:e,icon:t,title:r,description:i}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function d({item:e}){var t;const r=(0,i.Wl)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const o=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==c?void 0:c.description})}function m({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&O(e,r,t[r]);if(y)for(var r of y(t))g.call(t,r)&&O(e,r,t[r]);return e};function w({className:e}){const t=(0,i.jA)();return n.createElement(E,{items:t.items,className:e})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,h({},e));const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},81048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>E,frontMatter:()=>v,metadata:()=>b,toc:()=>O});var n=r(3905),o=r(79215),i=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>c(e,a(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const v={},y="Guides",b={unversionedId:"develop/guides/README",id:"version-VAST v3.0/develop/guides/README",title:"Guides",description:"This section includes walkthrough instructions for frequent procedures. The",source:"@site/versioned_docs/version-VAST v3.0/develop/guides/README.md",sourceDirName:"develop/guides",slug:"/develop/guides/",permalink:"/docs/VAST v3.0/develop/guides/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/develop/guides/README.md",tags:[],version:"VAST v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Develop",permalink:"/docs/VAST v3.0/develop/"},next:{title:"Write a Plugin",permalink:"/docs/VAST v3.0/develop/guides/write-a-plugin"}},g={},O=[],h={toc:O},w="wrapper";function E(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(w,f(d(d({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"guides"}),"Guides"),(0,n.kt)("p",null,"This section includes walkthrough instructions for frequent procedures. The\nfollowing guides are available:"),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);