"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9616],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="Write Documentation",c={unversionedId:"develop-vast/write-documentation",id:"develop-vast/write-documentation",title:"Write Documentation",description:"The VAST documentation resides inside [our main GitHub",source:"@site/docs/develop-vast/write-documentation.md",sourceDirName:"develop-vast",slug:"/develop-vast/write-documentation",permalink:"/docs/develop-vast/write-documentation",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/develop-vast/write-documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Write a Plugin",permalink:"/docs/develop-vast/write-a-plugin"}},d={},p=[{value:"Build and view locally",id:"build-and-view-locally",level:2},{value:"Write content",id:"write-content",level:2},{value:"Edit diagrams",id:"edit-diagrams",level:2},{value:"Cater to dark mode",id:"cater-to-dark-mode",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"write-documentation"},"Write Documentation"),(0,o.kt)("p",null,"The VAST documentation resides inside ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast"},"our main GitHub\nrepository")," in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/web/docs"},(0,o.kt)("inlineCode",{parentName:"a"},"/web/docs")),".\nWe use ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," as website framework."),(0,o.kt)("h2",{id:"build-and-view-locally"},"Build and view locally"),(0,o.kt)("p",null,"To view the entire site (including the documentation) locally,\nchange to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/web/"},(0,o.kt)("inlineCode",{parentName:"a"},"/web")),"\ndirectory and invoke ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},(0,o.kt)("inlineCode",{parentName:"a"},"yarn")),", or to be on the safe side,\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install --frozen-lockfile")," to avoid pollution from global dependencies.\nThen build and serve the site via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,o.kt)("p",null,"Browse to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," to view the site. Docusaurus should spawn\nyour default browser automatically upon invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),"."),(0,o.kt)("h2",{id:"write-content"},"Write content"),(0,o.kt)("p",null,"Docusaurus uses an ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"enhanced flavor of\nMarkdown")," that allows for\nembedding richer content elements, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"Callouts/admonitions"),"\nfor block notes, infos, and warnings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/react"},"React JSX components")," via\n",(0,o.kt)("a",{parentName:"li",href:"https://mdxjs.com/"},"MDX"),", specifically via the built-in UI component library\n",(0,o.kt)("a",{parentName:"li",href:"https://infima.dev/"},"Infima")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/math-equations"},"Math equations"),"\nvia ",(0,o.kt)("a",{parentName:"li",href:"https://katex.org/"},"KaTeX"))),(0,o.kt)("p",null,"We encourage making judicious use of these extras for an optimal reading\nexperience."),(0,o.kt)("h2",{id:"edit-diagrams"},"Edit diagrams"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://excalidraw.com"},"Excalidraw")," as primary tool to create sketches\nof architectural diagrams. It is open source and has a neat collaboration\nfeature: the ability to ",(0,o.kt)("em",{parentName:"p"},"embed the source code")," of the sketch into the exported\nPNG or SVG images."),(0,o.kt)("p",null,"This means the editing workflow looks as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("a",{parentName:"li",href:"https://excalidraw.com"},"https://excalidraw.com")," and click ",(0,o.kt)("em",{parentName:"li"},"Upload")," in the top left"),(0,o.kt)("li",{parentName:"ol"},"Select the PNG or SVG you would like to edit"),(0,o.kt)("li",{parentName:"ol"},"Make your edits in Excalidraw"),(0,o.kt)("li",{parentName:"ol"},"Re-export the drawing in size ",(0,o.kt)("strong",{parentName:"li"},"2x")," and ",(0,o.kt)("strong",{parentName:"li"},'check the box "Embed scene"'))),(0,o.kt)("p",null,'The last part is crucial: If you don\'t check "Embed scene" it will no longer be\nable to recover the original diagram source.'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Transparent Background")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If possible, ",(0,o.kt)("em",{parentName:"p"},"uncheck"),' the box "Background" to generate a transparent\nbackground, as it makes images fit in more seamlessly.'))),(0,o.kt)("h2",{id:"cater-to-dark-mode"},"Cater to dark mode"),(0,o.kt)("p",null,"Our setup makes it easy to render different images whether light or dark mode is\ntoggled. We use the same CSS that GitHub supports, i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"#gh-dark-mode-only"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"#gh-light-mode-only"),"."),(0,o.kt)("p",null,"Here's an example to include one image that exists in two variants:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"![Image Description](/path/to/dark.png#gh-dark-mode-only)\n![Image Description](/path/to/light.png#gh-light-mode-only)\n")))}m.isMDXComponent=!0}}]);