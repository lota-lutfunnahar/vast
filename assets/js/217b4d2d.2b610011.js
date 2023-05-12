"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,y=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(y,p(p({ref:t},s),{},{components:r})):n.createElement(y,p({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>m,default:()=>w,frontMatter:()=>y,metadata:()=>b,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>a(e,p(t)),d=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const y={},m="Deploy",b={unversionedId:"setup/deploy/README",id:"setup/deploy/README",title:"Deploy",description:"Deployment to us means taking a packaged artifact, like an image, and spinning",source:"@site/docs/setup/deploy/README.md",sourceDirName:"setup/deploy",slug:"/setup/deploy/",permalink:"/docs/next/setup/deploy/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/setup/deploy/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configure",permalink:"/docs/next/setup/configure"},next:{title:"Docker",permalink:"/docs/next/setup/deploy/docker"}},O={},g=[],k={toc:g},v="wrapper";function w(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(v,f(u(u({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"deploy"}),"Deploy"),(0,n.kt)("p",null,"Deployment to us means taking a packaged artifact, like an image, and spinning\nit up in a runtime."),(0,n.kt)("p",null,"We currently support the following runtimes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",u({parentName:"li"},{href:"deploy/docker"}),"Docker")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",u({parentName:"li"},{href:"deploy/docker-compose"}),"Docker Compose")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",u({parentName:"li"},{href:"deploy/aws"}),"AWS")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",u({parentName:"li"},{href:"deploy/ansible"}),"Ansible"))))}w.isMDXComponent=!0}}]);