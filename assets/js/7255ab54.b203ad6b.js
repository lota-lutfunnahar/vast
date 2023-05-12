"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>w,frontMatter:()=>d,metadata:()=>v,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={},b="macOS",v={unversionedId:"setup/install/macos",id:"version-VAST v3.1/setup/install/macos",title:"macOS",description:"On macOS, you must build VAST from source. Note that building",source:"@site/versioned_docs/version-VAST v3.1/setup/install/macos.md",sourceDirName:"setup/install",slug:"/setup/install/macos",permalink:"/docs/setup/install/macos",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.1/setup/install/macos.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Linux",permalink:"/docs/setup/install/linux"},next:{title:"Configure",permalink:"/docs/setup/configure"}},y={},O=[{value:"launchd",id:"launchd",level:2}],g={toc:O},h="wrapper";function w(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,m(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"macos"}),"macOS"),(0,n.kt)("p",null,"On macOS, you must ",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/setup/build"}),"build VAST from source"),". Note that building\nrequires C++20 support from the compiler, so the native AppleClang compiler can\nnot be used."),(0,n.kt)("p",null,"We generally recommend the following settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'export PATH="$(brew --prefix llvm)/bin:${PATH}"\nexport CC="$(brew --prefix llvm)/bin/clang"\nexport CXX="$(brew --prefix llvm)/bin/clang++"\nexport LDFLAGS="-Wl,-rpath,$(brew --prefix llvm) ${LDFLAGS}"\nexport CPPFLAGS="-isystem $(brew --prefix llvm)/include ${CPPFLAGS}"\nexport CXXFLAGS="-isystem $(brew --prefix llvm)/include/c++/v1 ${CXXFLAGS}"\n')),(0,n.kt)("h2",u({},{id:"launchd"}),"launchd"),(0,n.kt)("p",null," Installing VAST via CMake on macOS configures a ",(0,n.kt)("a",u({parentName:"p"},{href:"https://www.launchd.info"}),"launchd\nagent")," to\n",(0,n.kt)("inlineCode",{parentName:"p"},"~/Library/LaunchAgents/com.tenzir.vast.plist"),". To run VAST automatically at\nlogin, run this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# NOTE: Use 'unload' rather than 'load' to unload the agent\nlaunchctl load -w ~/Library/LaunchAgents/com.tenzir.vast.plist\n")))}w.isMDXComponent=!0}}]);