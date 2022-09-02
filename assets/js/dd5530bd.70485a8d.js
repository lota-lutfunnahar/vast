"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7025],{52991:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(67294),i=n(34334),r=n(53438),s=n(39960),c=n(13919),a=n(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return o.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:r,description:s}=e;return o.createElement(m,{href:t},o.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:r},n," ",r),s&&o.createElement("p",{className:(0,i.Z)("text--truncate",d),title:s},s))}function h(e){let{item:t}=e;const n=(0,r.Wl)(t);return n?o.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:n}=e;const i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.xz)(null!=(t=n.docId)?t:void 0);return o.createElement(p,{href:n.href,icon:i,title:n.label,description:null==s?void 0:s.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(f,{item:t});case"category":return o.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{className:t}=e;const n=(0,r.jA)();return o.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return o.createElement(b,e);const s=(0,r.MN)(t);return o.createElement("section",{className:(0,i.Z)("row",n)},s.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(v,{item:e})))))}},97059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(83117),i=(n(67294),n(3905)),r=(n(61839),n(52991));const s={},c="Contributing",a={unversionedId:"develop-vast/contributing/README",id:"develop-vast/contributing/README",title:"Contributing",description:"This section explains how to contribute to the VAST project. As an open-source",source:"@site/docs/develop-vast/contributing/README.md",sourceDirName:"develop-vast/contributing",slug:"/develop-vast/contributing/",permalink:"/docs/develop-vast/contributing/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/develop-vast/contributing/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Develop VAST",permalink:"/docs/develop-vast/"},next:{title:"Code of Conduct",permalink:"/docs/develop-vast/contributing/code-of-conduct"}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"This section explains how to contribute to the VAST project. As an open-source\nproject with the aim to build a community, we encourage contributions of any\nkind: new code, documentation enhancements, feature requests, suggestions for\nimprovements, or simply just feedback. We strive to make our development\nas transparent as possible. If you have any questions about the process, please\ndo not hesitate to reach out to us in ",(0,i.kt)("a",{parentName:"p",href:"http://slack.tenzir.com"},"Community Slack"),"\nor by opening a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/discussions"},"GitHub Discussion"),"."),(0,i.kt)(r.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);