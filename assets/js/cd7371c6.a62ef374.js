"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92488],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>v});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&c(e,t,n[t]);if(s)for(var t of s(n))u.call(n,t)&&c(e,t,n[t]);return e},b=(e,n)=>o(e,i(n)),m=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const d={},f="In-Memory Backbone Plugin",g={unversionedId:"use/integrate/threatbus/understand/plugins/backbones/in-mem",id:"version-VAST v3.0/use/integrate/threatbus/understand/plugins/backbones/in-mem",title:"In-Memory Backbone Plugin",description:"The Threat Bus In-Mem plugin provides an in-memory backbone for data",source:"@site/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/plugins/backbones/in-mem.md",sourceDirName:"use/integrate/threatbus/understand/plugins/backbones",slug:"/use/integrate/threatbus/understand/plugins/backbones/in-mem",permalink:"/docs/VAST v3.0/use/integrate/threatbus/understand/plugins/backbones/in-mem",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.0/use/integrate/threatbus/understand/plugins/backbones/in-mem.md",tags:[],version:"VAST v3.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"ZeroMQ App Plugin",permalink:"/docs/VAST v3.0/use/integrate/threatbus/understand/plugins/apps/zmq"},next:{title:"RabbitMQ Backbone Plugin",permalink:"/docs/VAST v3.0/use/integrate/threatbus/understand/plugins/backbones/rabbitmq"}},y={},v=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}],h={toc:v},k="wrapper";function O(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(k,b(p(p({},h),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"in-memory-backbone-plugin"}),"In-Memory Backbone Plugin"),(0,r.kt)("p",null,"The Threat Bus In-Mem plugin provides an in-memory backbone for data\nprovisioning. It is very simplistic and can be installed without any\ndependencies."),(0,r.kt)("p",null,"The plugin only implements the minimal ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/threatbus/backbonespecs.py"}),"backbone\nspecs"),"\nfor Threat Bus backbone plugins."),(0,r.kt)("h2",p({},{id:"installation"}),"Installation"),(0,r.kt)("p",null,"Install the In-Mem backbone plugin via ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"pip install threatbus-inmem\n")),(0,r.kt)("h2",p({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"The plugin does not require any configuration. Add an empty placeholder to the\nThreat Bus ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"...\nplugins:\n  backbones:\n    inmem:\n...\n")))}O.isMDXComponent=!0}}]);