"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=s,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const i={sidebar_position:1},r="Subscriptions and Message Passing",o={unversionedId:"use-vast/integrate/threatbus/understand/subscription-message-passing",id:"use-vast/integrate/threatbus/understand/subscription-message-passing",title:"Subscriptions and Message Passing",description:"This section explains how Threat Bus manages subscriptions and describes the",source:"@site/docs/use-vast/integrate/threatbus/understand/subscription-message-passing.md",sourceDirName:"use-vast/integrate/threatbus/understand",slug:"/use-vast/integrate/threatbus/understand/subscription-message-passing",permalink:"/docs/use-vast/integrate/threatbus/understand/subscription-message-passing",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use-vast/integrate/threatbus/understand/subscription-message-passing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Design Goals",permalink:"/docs/use-vast/integrate/threatbus/understand/design-goals"},next:{title:"Snapshotting",permalink:"/docs/use-vast/integrate/threatbus/understand/snapshotting"}},p={},l=[{value:"Separation of Concerns",id:"separation-of-concerns",level:2},{value:"Subscription Flow",id:"subscription-flow",level:2},{value:"Subscriptions",id:"subscriptions",level:3},{value:"Unsubscriptions",id:"unsubscriptions",level:3},{value:"Message Passing",id:"message-passing",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"subscriptions-and-message-passing"},"Subscriptions and Message Passing"),(0,s.kt)("p",null,"This section explains how Threat Bus manages subscriptions and describes the\nmessage passing flow between subscribers. The document addresses developers who\nare interested in contributing to Threat Bus or otherwise want to learn about\nthe runtime internals."),(0,s.kt)("h2",{id:"separation-of-concerns"},"Separation of Concerns"),(0,s.kt)("p",null,"Threat Bus and all plugins are implemented with python\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html"},"threads")," and thread-safe,\nsynchronized ",(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/queue.html"},"queues"),". The main\nloop of Threat Bus must never be blocked. All plugins should implement the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tenzir/threatbus/blob/master/threatbus/stoppable_worker.py"},"StoppableWorker"),"\nbase class to model busy work. Implementing that class also facilitates a\ngraceful shutdown."),(0,s.kt)("p",null,"As plugins run in their own threads and are not aware of each other, Threat Bus\nuses queues to enable communication between them. On start-up, Threat Bus\ncreates one ",(0,s.kt)("strong",{parentName:"p"},"global queue for incoming messages"),". Let's call it ",(0,s.kt)("inlineCode",{parentName:"p"},"inq"),". Threat\nBus passes a reference to this queue to all installed plugins ","\u2014"," backbone\nand application plugins alike. Per convention, only application plugins write to\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"inq"),", while backbone plugins consume messages from it."),(0,s.kt)("h2",{id:"subscription-flow"},"Subscription Flow"),(0,s.kt)("p",null,"Threat Bus provides two callbacks to all application plugins for subscribing and\nunsubscribing apps. You can find their implementation in the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tenzir/threatbus/blob/master/threatbus/threatbus.py"},(0,s.kt)("inlineCode",{parentName:"a"},"threatbus.py")),"\nentry point of the Threat Bus application. The signature of the callbacks looks\nas follows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"subscribe(topic: str, q: JoinableQueue, time_delta: timedelta = None)\nunsubscribe(topic: str, q: JoinableQueue)\n")),(0,s.kt)("p",null,"Applications (e.g., a Zeek instance) un/subscribe from/to Threat Bus via an\napplication plugin (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"threatbus-zeek")," offers a ",(0,s.kt)("inlineCode",{parentName:"p"},"broker")," endpoint for Zeek\ninstances to connect with). All communication between application and app plugin\nuses an ",(0,s.kt)("strong",{parentName:"p"},"app-specific")," message format. In our example, Zeek sends ",(0,s.kt)("inlineCode",{parentName:"p"},"broker"),"\nmessages."),(0,s.kt)("p",null,"The application plugin transforms received messages from the app-specific\nmessage format and invokes the corresponding callback for un/subscribing."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This message format mapping is the same for all kinds of messages exchanged\nbetween apps and app plugins, be it un/subscriptions or security content.")),(0,s.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,s.kt)("p",null,"Subscribing requires passing a topic and an optional integer for requesting a\n",(0,s.kt)("a",{parentName:"p",href:"snapshotting"},"snapshot")," of historic indicators. Application plugins create a\nnew ",(0,s.kt)("strong",{parentName:"p"},"queue for every subscription")," they receive from an app. Let's call that\nqueue ",(0,s.kt)("inlineCode",{parentName:"p"},"outq_1"),"."),(0,s.kt)("p",null,"Backbones provision incoming messages from the global ",(0,s.kt)("inlineCode",{parentName:"p"},"inq")," to all subscribers\n(all the many ",(0,s.kt)("inlineCode",{parentName:"p"},"outq_n"),"s). But how do backbones become aware of new queues?"),(0,s.kt)("p",null,"This is done via the ",(0,s.kt)("inlineCode",{parentName:"p"},"subscribe")," callback. Application plugins pass the\nsubscribed topic along with the newly created ",(0,s.kt)("inlineCode",{parentName:"p"},"outq_x")," to Threat Bus. Threat Bus\nthen instructs all registered backbones to provision messages for the\nrequested topic to the new queue (",(0,s.kt)("inlineCode",{parentName:"p"},"outq_1")," in our example)."),(0,s.kt)("p",null,"Once subscribed, application plugins read from the ",(0,s.kt)("inlineCode",{parentName:"p"},"outq"),"s they created. The\nplugins are responsible to forward all messages that appear in any given ",(0,s.kt)("inlineCode",{parentName:"p"},"outq"),"\nto the subscribed app. How that is done, for example over the wire, is\nimplementation specific logic and handled by the plugin (e.g., via ",(0,s.kt)("inlineCode",{parentName:"p"},"broker")," to a\nZeek instance or via ZeroMQ to VAST)."),(0,s.kt)("h3",{id:"unsubscriptions"},"Unsubscriptions"),(0,s.kt)("p",null,"Unsubscription works just as subscription, via a callback to Threat Bus. A\nsubscribed app, e.g., a Zeek instance, unsubscribes at the responsible app\nplugin using the app-specific format (",(0,s.kt)("inlineCode",{parentName:"p"},"broker")," in this case). The plugin parses\nthe request, extracts the topic the app wishes to unsubscribe from, and forwards\nthat topic along with the corresponding ",(0,s.kt)("inlineCode",{parentName:"p"},"outq_x")," of the subscriber to Threat Bus\nvia the ",(0,s.kt)("inlineCode",{parentName:"p"},"unsubscribe()")," callback shown above. Threat Bus then instructs all\nbackbones to forget about the said ",(0,s.kt)("inlineCode",{parentName:"p"},"outq_x"),"."),(0,s.kt)("h2",{id:"message-passing"},"Message Passing"),(0,s.kt)("p",null,"This section outlines how messages flow through Threat Bus on the example of two\nalready subscribed applications -- the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/OpenCTI-Platform/connectors/tree/master/threatbus"},"OpenCTI connector"),"\nand ",(0,s.kt)("a",{parentName:"p",href:"https://zeek.org/"},"Zeek"),"."),(0,s.kt)("p",null,"In our example, Threat Bus is equipped with three plugins:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"threatbus-zeek")," for communicating with Zeek instances via ",(0,s.kt)("inlineCode",{parentName:"li"},"broker"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"threatbus-zmq")," for communicating via ZeroMQ (i.e., with the\n",(0,s.kt)("inlineCode",{parentName:"li"},"opencti-connector"),")."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"threatbus-inmem")," for having a simple, in-memory backbone.")),(0,s.kt)("p",null,"A Zeek instance has already subscribed to Threat Bus via the ",(0,s.kt)("inlineCode",{parentName:"p"},"threatbus-zeek"),"\nplugin's ",(0,s.kt)("inlineCode",{parentName:"p"},"broker")," endpoint. It is subscribed to the topic ",(0,s.kt)("inlineCode",{parentName:"p"},"stix2/indicator")," and\nan appropriate ",(0,s.kt)("inlineCode",{parentName:"p"},"outq")," is already created (see the ",(0,s.kt)("a",{parentName:"p",href:"#subscription-flow"},"Subscription\nFlow")," above)."),(0,s.kt)("p",null,"Let's assume the ",(0,s.kt)("inlineCode",{parentName:"p"},"opencti-connector")," sends a STIX-2 indicator to Threat Bus via\nZeroMQ. The message arrives at the ",(0,s.kt)("inlineCode",{parentName:"p"},"threatbus-zmq")," plugin. Format conversion\nis not required, because the message is already in STIX-2 format. The plugin now\nputs this message in the global ",(0,s.kt)("inlineCode",{parentName:"p"},"inq"),"."),(0,s.kt)("p",null,"In another thread, the ",(0,s.kt)("inlineCode",{parentName:"p"},"threatbus-inmem")," plugin continuously reads from the\n",(0,s.kt)("inlineCode",{parentName:"p"},"inq"),". It is also aware of the subscription from the Zeek instance for the topic\n",(0,s.kt)("inlineCode",{parentName:"p"},"stix2/indicator"),". Because the incoming message is of exactly that type, the\nbackbone clones the message from the ",(0,s.kt)("inlineCode",{parentName:"p"},"inq")," and puts it into the ",(0,s.kt)("inlineCode",{parentName:"p"},"outq"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"threatbus-zeek")," plugin (again in another thread) continuously monitors all\n",(0,s.kt)("inlineCode",{parentName:"p"},"outq"),"s of its subscribed Zeek instances. Once the new message arrives in the\n",(0,s.kt)("inlineCode",{parentName:"p"},"outq")," ",(0,s.kt)("inlineCode",{parentName:"p"},"threatbus-zeek")," maps the STIX-2 indicator to a ",(0,s.kt)("inlineCode",{parentName:"p"},"broker")," compatible\nformat before sending it out to the appropriate Zeek instance."),(0,s.kt)("p",null,"Finally, the Zeek instance receives the message and can ingest it into its intel\nframework. Should Zeek generate a sighting now, the message would similarly flow\nall the way back into OpenCTI, just reversing the flow."))}c.isMDXComponent=!0}}]);