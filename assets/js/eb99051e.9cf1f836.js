"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||h[d]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>m,toc:()=>g});var n=r(3905),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},h=(e,t)=>s(e,o(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_position:3},b="Use",m={unversionedId:"use/integrate/threatbus/use",id:"version-v3.0.0/use/integrate/threatbus/use",title:"Use",description:"This section covers a brief walk-through of how to get started with Threat Bus.",source:"@site/versioned_docs/version-v3.0.0/use/integrate/threatbus/use.md",sourceDirName:"use/integrate/threatbus",slug:"/use/integrate/threatbus/use",permalink:"/docs/use/integrate/threatbus/use",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-v3.0.0/use/integrate/threatbus/use.md",tags:[],version:"v3.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Deploy",permalink:"/docs/use/integrate/threatbus/deploy"},next:{title:"Design Goals",permalink:"/docs/use/integrate/threatbus/understand/design-goals"}},k={},g=[{value:"Start Up",id:"start-up",level:2},{value:"Start Zeek as Threat Bus App",id:"start-zeek-as-threat-bus-app",level:2},{value:"Request an IoC Snapshot with Zeek",id:"request-an-ioc-snapshot-with-zeek",level:3},{value:"Use the Docker Container",id:"use-the-docker-container",level:2}],y={toc:g},v="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(v,h(c(c({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"use"}),"Use"),(0,n.kt)("p",null,"This section covers a brief walk-through of how to get started with Threat Bus.\nFirst, ",(0,n.kt)("a",c({parentName:"p"},{href:"install"}),"install Threat Bus")," and all plugins you need. Use the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/config.yaml.example"}),"default\nconfiguration\nfile")," to\nget started or ",(0,n.kt)("a",c({parentName:"p"},{href:"configure"}),"create a custom one"),"."),(0,n.kt)("h2",c({},{id:"start-up"}),"Start Up"),(0,n.kt)("p",null,"Display the help text:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"threatbus --help\n")),(0,n.kt)("p",null,"Start Threat Bus (it automatically looks for ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yaml")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," in\nthe same directory):"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"threatbus\n")),(0,n.kt)("p",null,"Pass a configuration file to Threat Bus via ",(0,n.kt)("inlineCode",{parentName:"p"},"-c <path/to/file>"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"threatbus -c path/to/config.yaml\n")),(0,n.kt)("h2",c({},{id:"start-zeek-as-threat-bus-app"}),"Start Zeek as Threat Bus App"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"understand/plugins/apps/zeek"}),"Apps")," need to register at the bus. Zeek can be\nscripted, and the relevant functionality for Zeek to subscribe to Threat Bus is\nimplemented in ",(0,n.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/tree/master/apps/zeek"}),"this Zeek\nscript"),". To connect\nZeek with Threat Bus, download and load the Zeek script as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"curl -L -o threatbus.zeek https://raw.githubusercontent.com/tenzir/threatbus/master/apps/zeek/threatbus.zeek\nzeek -i <INTERFACE> -C threatbus.zeek\n")),(0,n.kt)("h3",c({},{id:"request-an-ioc-snapshot-with-zeek"}),"Request an IoC Snapshot with Zeek"),(0,n.kt)("p",null,"Threat Bus allows apps to ",(0,n.kt)("a",c({parentName:"p"},{href:"understand/snapshotting"}),"request snapshots")," of historic\nsecurity content. The Zeek script implements this request functionality for\nindicators. Invoke it like this."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'zeek -i <INTERFACE> -C threatbus.zeek -- "Tenzir::snapshot_intel=30 days"\n')),(0,n.kt)("h2",c({},{id:"use-the-docker-container"}),"Use the Docker Container"),(0,n.kt)("p",null,"Threat Bus can be used in a containerized setup. The pre-built\n",(0,n.kt)("a",c({parentName:"p"},{href:"https://hub.docker.com/r/tenzir/threatbus"}),"docker image")," comes with all\nrequired dependencies and all existing plugins pre-installed."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker run tenzir/threatbus:latest --help\n")))}O.isMDXComponent=!0}}]);