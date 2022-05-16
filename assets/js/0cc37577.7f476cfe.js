(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[207],{7676:function(t,e,n){"use strict";n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var o=n(7462),s=n(3366),a=(n(7294),n(3905)),i=n(3456),c=["components"],r={},l="Setup VAST",u={unversionedId:"setup-vast/README",id:"setup-vast/README",title:"Setup VAST",description:"This section covers the different stages of the setup process that ultimately",source:"@site/docs/setup-vast/README.md",sourceDirName:"setup-vast",slug:"/setup-vast/",permalink:"/vast/docs/setup-vast/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/setup-vast/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Quick Start Guide",permalink:"/vast/docs/get-started/quick-start-guide"},next:{title:"Download",permalink:"/vast/docs/setup-vast/download"}},d={},p=[],f={toc:p};function v(t){var e=t.components,n=(0,s.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-vast"},"Setup VAST"),(0,a.kt)("p",null,"This section covers the different stages of the setup process that ultimately\nyield a running VAST instance. You have several options to enter the setup\npipeline, based on what intermediate artifact you would like to begin with."),(0,a.kt)("p",null,"\ud83d\udc47 Click on any blue actions to get started."),(0,a.kt)(i.Mermaid,{config:{},chart:'flowchart LR\n  classDef action fill:#00a4f1,stroke:none,color:#eee\n  classDef artifact fill:#bdcfdb,stroke:none,color:#222\n  %% Actions\n  download(Download):::action\n  build(Build):::action\n  install(Install):::action\n  deploy(Deploy):::action\n  configure(Configure):::action\n  tune(Tune):::action\n  %% Artifacts\n  source([Source Code]):::artifact\n  binary([Binary]):::artifact\n  deployable([Package/Image]):::artifact\n  instance([Instance]):::artifact\n  %% Edges\n  download --\x3e source\n  download --\x3e binary\n  download --\x3e deployable\n  source --\x3e build\n  build --\x3e binary\n  binary --\x3e install\n  install --\x3e deployable\n  deployable --\x3e deploy\n  deploy --\x3e instance\n  instance <--\x3e configure\n  instance <--\x3e tune\n  %% Links\n  click download "/vast/docs/setup-vast/download/" "Download VAST"\n  click build "/vast/docs/setup-vast/build/" "Build VAST"\n  click install "/vast/docs/setup-vast/install/" "Install VAST"\n  click deploy "/vast/docs/setup-vast/deploy/" "Deploy VAST"\n  click configure "/vast/docs/setup-vast/configure/" "Configure VAST"\n  click tune "/vast/docs/setup-vast/tune/" "Tune VAST"',mdxType:"Mermaid"}))}v.isMDXComponent=!0},1748:function(t,e,n){var o={"./locale":9234,"./locale.js":9234};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id=1748}}]);