"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2182],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:0},l="Download",c={unversionedId:"setup-vast/download",id:"setup-vast/download",title:"Download",description:"You can obtain various artifacts of VAST along the CD pipeline.",source:"@site/docs/setup-vast/download.md",sourceDirName:"setup-vast",slug:"/setup-vast/download",permalink:"/docs/setup-vast/download",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup-vast/download.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Setup VAST",permalink:"/docs/setup-vast/"},next:{title:"Build",permalink:"/docs/setup-vast/build"}},u={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Git",id:"git",level:3},{value:"Archive",id:"archive",level:3},{value:"Packages",id:"packages",level:2},{value:"Nix",id:"nix",level:3},{value:"Images",id:"images",level:2},{value:"Docker",id:"docker",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"download"},"Download"),(0,o.kt)("p",null,"You can obtain various artifacts of VAST along the CD pipeline."),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,"Get the source code by cloning our Git repository or downloading an archive."),(0,o.kt)("h3",{id:"git"},"Git"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," to clone our repository hosted on GitHub:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/tenzir/vast\n")),(0,o.kt)("p",null,"You can check out the ",(0,o.kt)("inlineCode",{parentName:"p"},"stable")," branch to get the latest released version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd vast\ngit checkout stable\n")),(0,o.kt)("h3",{id:"archive"},"Archive"),(0,o.kt)("p",null,"Download a zip Archive of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/latest"},"latest release")," or the current\ndevelopment version:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{class:"button button--md button--primary margin-right--md",href:"https://github.com/tenzir/vast/archive/refs/heads/stable.zip"},"Source Code (Release)"),(0,o.kt)("a",{class:"button button--md button--info margin-left--md",href:"https://github.com/tenzir/vast/archive/refs/heads/master.zip"},"Source Code (Development)")),(0,o.kt)("h2",{id:"packages"},"Packages"),(0,o.kt)("p",null,"We offer pre-built versions of VAST containing a statically linked binary, for\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/latest/download/vast-linux-static.tar.gz"},"latest release")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-static-latest.tar.gz"},"current development\nversion"),"."),(0,o.kt)("div",{align:"center",class:"padding-bottom--md"},(0,o.kt)("a",{class:"button button--md button--primary margin-right--md",href:"https://github.com/tenzir/vast/releases/latest/download/vast-linux-static.tar.gz"},"Static Build (Release)"),(0,o.kt)("a",{class:"button button--md button--info margin-left--md",href:"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-static-latest.tar.gz"},"Static Build (Development)")),(0,o.kt)("p",null,"We also offer prebuilt statically linked binaries for every git commit to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-${version}-linux-static.tar.gz\n")),(0,o.kt)("p",null,"To determine the version, check out the desired commit locally and run this\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"version=\"$(git describe --abbrev=10 --long --dirty --match='v[0-9]*')\"\n")),(0,o.kt)("h3",{id:"nix"},"Nix"),(0,o.kt)("p",null,"Our repository contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"flake.nix")," that provides a VAST as an app, you can\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},'vast = "github:tenzir/vast/stable"')," as an input in your own flake or just\ntry it out with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nix run github:tenzir/vast/stable\n")),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"Our CI builds Docker images for the latest release and the current development\nversion."),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"You can download pre-built Docker images from\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/tenzir/vast"},"Docker Hub"),"."),(0,o.kt)("p",null,"Read our ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup-vast/deploy/docker"},"Docker instructions")," for more details\non using Docker."))}m.isMDXComponent=!0}}]);