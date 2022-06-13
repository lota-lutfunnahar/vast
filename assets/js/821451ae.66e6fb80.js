"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2309],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=i,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50701:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={sidebar_position:2},c="Vision",l={unversionedId:"about-vast/vision",id:"about-vast/vision",title:"Vision",description:"At Tenzir, our vision is that VAST becomes the foundation of a data-first",source:"@site/docs/about-vast/vision.md",sourceDirName:"about-vast",slug:"/about-vast/vision",permalink:"/docs/about-vast/vision",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/about-vast/vision.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Target Audience",permalink:"/docs/about-vast/target-audience"},next:{title:"Use Cases",permalink:"/docs/about-vast/use-cases"}},d={},h=[{value:"The SOC Architecture Maze",id:"the-soc-architecture-maze",level:2},{value:"Security Data Fabric",id:"security-data-fabric",level:2}],u={toc:h};function p(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vision"},"Vision"),(0,o.kt)("p",null,"At Tenzir, our vision is that VAST becomes the foundation of a data-first\nsecurity operations architecture. Our goal is to break up security silos by\ndecomposing monolith systems into modular building blocks that can be flexibly\nrecomposed with a best-of-breed mindset. We commit to open, standardized\ninterfaces at the core that prevent vendor lock-in, both for security content\n(e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://oasis-open.github.io/cti-documentation/stix/intro.html"},"STIX"),", ",(0,o.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/cacao/security-playbooks/v1.1/security-playbooks-v1.1.html"},"CACAO"),") and structured event data (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://arrow.apache.org"},"Apache\nArrow"),")."),(0,o.kt)("p",null,"Our conviction is that this requires a fundamentally different approach to\nsecurity operations center (SOC) architecture. Conceptually, we need to shift\naway from point-to-point product integrations built on top of narrow custom APIs\nto an open ",(0,o.kt)("em",{parentName:"p"},"security data fabric")," as central driver of use cases. This fabric\nabstracts away the complexity of the infrastructure and provides connectivity\nfrom cloud to distal on-premise locations, but it also features modular\nfunctions that can easily be composed into use cases in the detection and\nresponse realm. Authorized parties join this fabric to announce their\ncapabilities. Based on a common ontological understanding, operators merely have\nto connect applications to the fabric to yield an autonomously acting system."),(0,o.kt)("p",null,"The diagram below illustrates the core idea of this architectural shift that\nmoves away from point-to-point integrations:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Security Data Fabric",src:a(99142).Z+"#gh-light-mode-only",width:"5120",height:"1240"}),"\n",(0,o.kt)("img",{alt:"Security Data Fabric",src:a(13813).Z+"#gh-dark-mode-only",width:"5120",height:"1240"})),(0,o.kt)("p",null,"The communication principle of the fabric is publish-subscribe, wrapping\nrequest-response-style communication where appropriate. An example scenario\nlooks as follows: a network sensor publishes structured events to the fabric. A\ndetector subscribes to this data stream to publish alerts back to the fabric. A\ntriaging engine consumes to the alerts, inventory, and vulnerability information\nto create prioritized incidents in a case management tool."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Beyond Message Bus")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We are arguing for more than just a generic message bus here. Large\norganizations have enough engineering bandwidth to ",(0,o.kt)("a",{parentName:"p",href:"https://www.intel.com.au/content/www/au/en/it-management/intel-it-best-practices/modern-scalable-cyber-intelligence-platform-kafka.html"},"build their own custom\nversion"),". In addition to commoditizing this architecture, our goal is\nto implant security domain knowledge and analytical data processing power into\nthe very fabric, such that security application developers do not have\nto deal with data wrangling and can purely focus on providing value with domain\nlogic."))),(0,o.kt)("p",null,"How do we get there? To answer this question, we first have to understand where\nwe are today."),(0,o.kt)("h2",{id:"the-soc-architecture-maze"},"The SOC Architecture Maze"),(0,o.kt)("p",null,"Today's SOC architecture is product-centric: SIEM harbors all data, SOAR\nexecutes workflows and calls APIs, TIP manages security content, EDR raises\nalerts from the endpoint, NDR from the network, and CDR from the cloud\u2014all\nserved with metadata where possible. When combined, voil\xe0 XDR:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Traditional SOC Architecture",src:a(78043).Z+"#gh-light-mode-only",width:"1773",height:"1160"}),"\n",(0,o.kt)("img",{alt:"Traditional SOC Architecture",src:a(71406).Z+"#gh-dark-mode-only",width:"1773",height:"1160"})),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"General Issues")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There are several general issues with this approach:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Data Silos"),': many security products (especially SaaS) sit in the\npath of the data and capture activity telemetry in their own backend from\nwhere they drive analytics. However, you can often only see the distilled\nreports without having full access to their own data. Pre-canned analytics\nallow for some processing in a vendor-specific toolchain, and an "open" API\nmay allow for selective, low-bandwidth access. But since egress is expensive,\nvendors are incentivised to shield this data from you. A classical silo.'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Vendor Lock-in"),": after stitching together dozens of different tools,\nyou are finally in business, assuming that the strategic alliances programs\nbetween the vendors exactly implement your use cases. If not? Then you are at\nthe mercy of your vendors. But even when you've settled with the existing\nintegrations, SOC technology constantly evolves. You will want to integrate\nthe next best-in-class solution, and hopefully it plays nicely with the\nexisting ones. So how to avoid this gambling? There is always the big-vendor\nmonolith security stack: the integrated solution for all your needs. Some\ncan live with a fully externally dictated roadmap and cost ratchet, others\nswitch from the frying pan to the fire."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Compliance"),": public cloud solutions may support choice of geographic\nregion for data storage, to meet coarse data residency requirements. This is\na good start. For on-prem products there appears full control, but is it\nreally enough for achieving compliance? How to guarantee that minimum/maximum\nretention spans are properly enforced? Is data anonymized, pseudonymized, and\nencrypted at the needed level of granularity? If the vendor doesn't provide\nsufficient controls, a roadblock lies ahead.")),(0,o.kt)("p",{parentName:"div"},"Aside from these general issues, there are also more specific ones with the\nabove architecture. This concerns ",(0,o.kt)("a",{parentName:"p",href:"/docs/about-vast/target-audience"},"advanced security\nteams")," that strive for full control over the\ntheir detections. These teams operate with a data-first mindset and bring their\nown tools for analytics. The SIEM functionality rarely suffices to perform the\ndesired analysis, and needs to be ETL'ed into a dedicated analytics workbench,\ne.g., Spark or Hadoop. This happens typically with recurring over-night jobs,\non demand when something is missing, or fully upstream of the SIEM by putting an\nanalytics-capable system in the path of the data. But since SIEM has all the\nparsers to onboard data sources, this now requires re-implementing data\nacquisition partially. Few SOCs have the required data engineering inhouse to\nscale this, which leads to buying a ",(0,o.kt)("em",{parentName:"p"},"second")," SIEM-ish system capable of the\nanalytics."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/about-vast/use-cases#siem-offloading"},"SIEM Offloading")," is valid use case,\nbut it's duct tape from an architectural perspective."))),(0,o.kt)("h2",{id:"security-data-fabric"},"Security Data Fabric"),(0,o.kt)("p",null,"We envision an alternative architecture to overcome these issues: a ",(0,o.kt)("strong",{parentName:"p"},"security\ndata fabric")," with analytical processing capabilities in the center of the SOC."),(0,o.kt)("p",null,"The diagram below outlines the abstraction of the fabric:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modern SOC Architecture",src:a(33234).Z+"#gh-light-mode-only",width:"1655",height:"1560"}),"\n",(0,o.kt)("img",{alt:"Modern SOC Architecture",src:a(4433).Z+"#gh-dark-mode-only",width:"1655",height:"1560"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Key Benefits")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Standardized data access"),": unified access to security content, event logs,\nand other high-volume telemetry (e.g., network traffic) streamlines workflows\nacross the board. Triaging accuracy and hunting efficiency increases because\ncontextualization becomes easier. End-to-end detection engineering becomes\nfaster because feature extraction, model validation, and generation of\nsecurity-content uses a single data interface. Response becomes more targeted\nand possible to automate when more data for decision support is present."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Improved collaboration"),": given the drastic talent shortage, productivity\nin the SOC is key. In particular, this means efficient collaboration between\nthe ",(0,o.kt)("a",{parentName:"li",href:"/docs/about-vast/target-audience"},"central roles"),". When SOC Analyst,\nDetection Engineer, and Data Scientist can work with the same interface,\ntheir throughput improves across the board, reducing friction raises all\ncentral MTT* metrics, e.g.,\nmean-time-to-{triage,detect,investigate,respond}."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sustainable architecture"),": when the fabric drives the use cases,\nonboarding new security tools becomes a matter of telling the fabric how to\nexpose itself. The byproduct of this indirection is ",(0,o.kt)("em",{parentName:"li"},"linear")," incremental\ndeployability, meaning, you only have to onboard a tool once to the fabric,\nand then all others can interact with it. This also makes for easier\nbenchmarking of security tools under evaluation by feeding both the same data\nfeed. It also simplifies switching from a legacy tool to a new one, as the\nnew one can run ramp up in parallel before turning off the old one. Now we're\nback to best-of-breed with full control.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Security Data Lake")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Related is the concept of a ",(0,o.kt)("strong",{parentName:"p"},"security data lake"),". The difference is that the\nfabric goes beyond analytic processing of security data and enables use cases\nacross tools by providing a standardized communication medium. The fabric may\nleverage one or more lakes, but the primary focus is on providing unified access\nto federated security services."))))}p.isMDXComponent=!0},4433:function(e,t,a){t.Z=a.p+"assets/images/modern-approach.dark-2b3c30dbdf900d9890e7bc773d3bb44b.png"},33234:function(e,t,a){t.Z=a.p+"assets/images/modern-approach.light-d3164ba1e74a804bb9c39c338ae80c9d.png"},13813:function(e,t,a){t.Z=a.p+"assets/images/security-data-fabric.dark-f77c7528f3a3fe6235596f5706ae7473.png"},99142:function(e,t,a){t.Z=a.p+"assets/images/security-data-fabric.light-599e88822769250c68c949125e976130.png"},71406:function(e,t,a){t.Z=a.p+"assets/images/traditional.dark-7bd412a66bc25b9d2dbefcebc65c5b05.png"},78043:function(e,t,a){t.Z=a.p+"assets/images/traditional.light-b70efb9c260d4b0b09b7b2420c59a0ef.png"}}]);