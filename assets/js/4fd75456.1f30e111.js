"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4745],{62470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(83117),o=(n(67294),n(3905));const r={title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:new Date("2022-03-25T00:00:00.000Z"),tags:["release","compaction","query"]},i=void 0,l={permalink:"/blog/vast-v1.1.1",source:"@site/blog/vast-v1.1.1/index.md",title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",date:"2022-03-25T00:00:00.000Z",formattedDate:"March 25, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"compaction",permalink:"/blog/tags/compaction"},{label:"query",permalink:"/blog/tags/query"}],readingTime:.635,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"VAST v1.1.1",description:"VAST v1.1.1 - Compaction & Query Language Frontends",authors:"dominiklohmann",date:"2022-03-25T00:00:00.000Z",tags:["release","compaction","query"]},prevItem:{title:"VAST v1.1.2",permalink:"/blog/vast-v1.1.2"},nextItem:{title:"VAST v1.1",permalink:"/blog/vast-v1.1"}},s={authorsImageUrls:[void 0]},m=[],c={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dear community, we are excited to announce ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v1.1.1"},"VAST\nv1.1.1"),"."),(0,o.kt)("p",null,"This release contains some important bug fixes on top of everything included in\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/releases/tag/v1.1.0"},"VAST v1.1")," release."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The disk monitor now correctly continues deleting until below the low water\nmark after a partition failed to delete."),(0,o.kt)("li",{parentName:"ul"},"We fixed a rarely occurring race condition that caused query workers to become\nstuck after delivering all results until the corresponding client process\nterminated."),(0,o.kt)("li",{parentName:"ul"},"Queries that timed out or were externally terminated while in the query\nbacklog that had more unhandled candidate than taste partitions no longer\npermanently get stuck. This critical bug caused VAST to idle permanently on\nthe export path once all workers were stuck.")),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/norg"},"@norg")," for reporting the issues."))}u.isMDXComponent=!0}}]);