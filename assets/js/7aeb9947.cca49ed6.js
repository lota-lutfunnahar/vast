"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>O,frontMatter:()=>h,metadata:()=>y,toc:()=>v});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>i(e,s(t)),m=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const h={sidebar_position:0},b="Install",y={unversionedId:"use/integrate/threatbus/install",id:"version-v3.0.0/use/integrate/threatbus/install",title:"Install",description:"Threat Bus is written in Python and ships as a PyPI",source:"@site/versioned_docs/version-v3.0.0/use/integrate/threatbus/install.md",sourceDirName:"use/integrate/threatbus",slug:"/use/integrate/threatbus/install",permalink:"/docs/use/integrate/threatbus/install",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-v3.0.0/use/integrate/threatbus/install.md",tags:[],version:"v3.0.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Threat Bus",permalink:"/docs/use/integrate/threatbus/"},next:{title:"Configure",permalink:"/docs/use/integrate/threatbus/configure"}},f={},v=[{value:"Setup a Virtual Environment",id:"setup-a-virtual-environment",level:2},{value:"Install Threat Bus and Plugins",id:"install-threat-bus-and-plugins",level:2}],g={toc:v},k="wrapper";function O(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(k,d(c(c({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"install"}),"Install"),(0,a.kt)("p",null,"Threat Bus is written in Python and ships as a ",(0,a.kt)("a",c({parentName:"p"},{href:"https://pypi.org/"}),"PyPI"),"\npackage. Plugins are packaged individually and also available via PyPI. This\nseparation keeps the Threat Bus host clean from unnecessary dependencies.\nEverything can be installed via ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),", independent of the underlying OS."),(0,a.kt)("h2",c({},{id:"setup-a-virtual-environment"}),"Setup a Virtual Environment"),(0,a.kt)("p",null,"It may be desirable to install Threat Bus and its plugins in a\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.python.org/3/tutorial/venv.html"}),"virtual environment"),". Set it up\nas follows."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"python -m venv --system-site-packages venv\nsource venv/bin/activate\n")),(0,a.kt)("admonition",c({},{title:"Python Version Requirements",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Threat Bus requires at least Python 3.7, earlier versions are not supported.")),(0,a.kt)("admonition",c({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"Some plugins might require libraries that cannot be installed via ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),", i.e.,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus-zeek")," plugin requires Broker as a dependency, which can only\ninstalled system-wide together with the Broker library itself."),(0,a.kt)("p",{parentName:"admonition"},"Hence we recommend passing the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--system-site-packages")," when setting up the\nPython ",(0,a.kt)("inlineCode",{parentName:"p"},"venv"),". That allows threatbus to access libraries installed in system\nscope.")),(0,a.kt)("h2",c({},{id:"install-threat-bus-and-plugins"}),"Install Threat Bus and Plugins"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",c({parentName:"p"},{href:"https://pypi.org/project/pip/"}),"pip")," to install Threat Bus and some plugins."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# core functionality & runtime:\npip install threatbus\n\n# general naming convention:\npip install threatbus-<plugin-name>\n\n# application plugins:\npip install threatbus-misp\npip install threatbus-zeek\npip install threatbus-vast\npip install threatbus-cif3\npip install threatbus-zmq\n\n# backbone plugins:\npip install threatbus-inmem\npip install threatbus-rabbitmq\n")),(0,a.kt)("admonition",c({},{title:"Local User Installation",type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"You can install Python packages locally for your current user by specifying\n",(0,a.kt)("inlineCode",{parentName:"p"},"pip install --user <package>"))),(0,a.kt)("p",null,"Once installed, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus")," as a stand-alone application via the\nCLI. Print the help text as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"threatbus --help\n")))}O.isMDXComponent=!0}}]);