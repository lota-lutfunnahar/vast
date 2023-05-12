"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,d=c["".concat(p,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>y,frontMatter:()=>d,metadata:()=>b,toc:()=>k});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&u(e,n,t[n]);return e},h=(e,t)=>i(e,s(t)),m=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&l.call(e,a)&&(n[a]=e[a]);return n};const d={},g="ZeroMQ App Plugin",b={unversionedId:"use/integrate/threatbus/understand/plugins/apps/zmq",id:"use/integrate/threatbus/understand/plugins/apps/zmq",title:"ZeroMQ App Plugin",description:"The ZeroMQ app plugin enables any application that can communicate via",source:"@site/docs/use/integrate/threatbus/understand/plugins/apps/zmq.md",sourceDirName:"use/integrate/threatbus/understand/plugins/apps",slug:"/use/integrate/threatbus/understand/plugins/apps/zmq",permalink:"/docs/next/use/integrate/threatbus/understand/plugins/apps/zmq",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/use/integrate/threatbus/understand/plugins/apps/zmq.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Zeek Plugin",permalink:"/docs/next/use/integrate/threatbus/understand/plugins/apps/zeek"},next:{title:"In-Memory Backbone Plugin",permalink:"/docs/next/use/integrate/threatbus/understand/plugins/backbones/in-mem"}},f={},k=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Communication Flow",id:"communication-flow",level:2},{value:"Management Protocol",id:"management-protocol",level:2},{value:"Subscription",id:"subscription",level:3},{value:"Unsubscription",id:"unsubscription",level:3},{value:"Heartbeats",id:"heartbeats",level:3},{value:"Pub/Sub via ZeroMQ",id:"pubsub-via-zeromq",level:3},{value:"Application Example: VAST - Threat Bus Connector",id:"application-example-vast---threat-bus-connector",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage",level:3},{value:"STIX-2 Conversion",id:"stix-2-conversion",level:3},{value:"Features",id:"features",level:3},{value:"Live Matching",id:"live-matching",level:4},{value:"Retro Matching",id:"retro-matching",level:4},{value:"Sighting Context Transformation",id:"sighting-context-transformation",level:4},{value:"Custom Sinks for Sightings",id:"custom-sinks-for-sightings",level:4}],v={toc:k},N="wrapper";function y(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(N,h(c(c({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"zeromq-app-plugin"}),"ZeroMQ App Plugin"),(0,a.kt)("p",null,"The ZeroMQ app plugin enables any application that can communicate via\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://zeromq.org/"}),"ZeroMQ")," to subscribe to Threat Bus."),(0,a.kt)("p",null,"The plugin defines a simple ",(0,a.kt)("a",c({parentName:"p"},{href:"#management-protocol"}),"protocol")," for managing\n(un)subscriptions from apps. In the following, we describe how to install and\nconfigure the plugin, and how the management protocol enables building new\napplications."),(0,a.kt)("admonition",c({},{type:"info"}),(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Example Application","\u2014","VAST - Threat Bus Connector"),(0,a.kt)("p",{parentName:"admonition"},"An example application that implements the management protocol is\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/tree/master/apps/vast"}),"vast-threatbus"),".\nWe use this wrapper because ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/vast"}),"VAST")," cannot\ncommunicate with Threat Bus natively. This Python application generates VAST\nqueries for indicators and reports the results back as sightings. It is\n",(0,a.kt)("a",c({parentName:"p"},{href:"#application-example-vast---threat-bus-connector"}),"documented")," below.")),(0,a.kt)("h2",c({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"We recommend to use a virtual environment for the installation. Set it up\nas follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"python -m venv --system-site-packages venv\nsource venv/bin/activate\n")),(0,a.kt)("p",null,"The plugin itself is published as ",(0,a.kt)("a",c({parentName:"p"},{href:"https://pypi.org/project/threatbus-zmq/"}),"PyPI\npackage"),". All required dependencies\nwill be installed automatically when installing the plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pip install threatbus-zmq\n")),(0,a.kt)("h2",c({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"The plugin starts three listening ZeroMQ endpoints. The endpoint characteristics\nfor listening can be configured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),'...\nplugins:\n  apps:\n    zmq:\n      host: "127.0.0.1"\n      manage: 13370 # the port used for management messages\n      pub: 13371 # the port used to publish messages to connected apps\n      sub: 13372 # the port used to receive messages from connected apps\n...\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"manage")," endpoint handles (un)subscriptions, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," endpoint\npublishes new messages to all subscribers, and subscribers use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sub"),"\nendpoint to report back sightings. Check out the\n",(0,a.kt)("a",c({parentName:"p"},{href:"#communication-flow"}),"Communication Flow")," section\nfor details about these endpoints."),(0,a.kt)("h2",c({},{id:"communication-flow"}),"Communication Flow"),(0,a.kt)("p",null,"The ZeroMQ app plugin provides three endpoints for subscribers. Applications\ninitially only require the ",(0,a.kt)("inlineCode",{parentName:"p"},"manage")," endpoint. The plugin sends the details about\nthe pub/sub ports to new subscribers during the subscription handshake."),(0,a.kt)("p",null,"Threat Bus (or rather, the ZeroMQ app plugin) creates a ",(0,a.kt)("strong",{parentName:"p"},"unique queue and topic\nfor each new subscriber"),". Upon successful registration, Threat Bus sends the\ntopic name to the subscriber. Subscribers then bind to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pub")," endpoint using\nthat topic. See the ",(0,a.kt)("a",c({parentName:"p"},{href:"#management-protocol"}),"management protocol")," section for\ndetails."),(0,a.kt)("p",null,"Unique topics make snapshotting possible. Without unique topics, every\nsubscriber would potentially see the requested snapshot data of other\nsubscribers."),(0,a.kt)("h2",c({},{id:"management-protocol"}),"Management Protocol"),(0,a.kt)("p",null,"Subscriptions and unsubscriptions are referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"management")," messages,\nwhich are JSON formatted and exchanged via the ",(0,a.kt)("inlineCode",{parentName:"p"},"manage")," ZMQ endpoint that the\nplugin exposes."),(0,a.kt)("p",null,"The manage endpoint uses the\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/client_server.html"}),"ZeroMQ Request/Reply"),"\npattern for message exchange. That means, all messages get an immediate response\nfrom the server. With each JSON reply, the zmq plugin sends a ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," field\nthat indicates the success of the requested operation."),(0,a.kt)("h3",c({},{id:"subscription"}),"Subscription"),(0,a.kt)("p",null,"To subscribe to Threat Bus via the zmq plugin, an app needs to send a JSON\nstruct as follows to the ",(0,a.kt)("inlineCode",{parentName:"p"},"manage")," endpoint of the plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "action": "subscribe",\n  "topic": <TOPIC>,       # either \'stix2/sighting\' or \'stix2/indicator\'\n  "snapshot": <SNAPSHOT>  # number of days for a snapshot, 0 for no snapshot\n}\n')),(0,a.kt)("p",null,"In response, the app will either receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," response."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Error response:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "status": "error"\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Success response:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "topic": <P2P_TOPIC>,\n  "pub_port": "13371",\n  "sub_port": "13372",\n  "status": "success",\n}\n')),(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pub_port")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sub_port")," of the reply provide the port that an app should\nconnect with to participate in the pub/sub message exchange. A connecting app\ncan access these ports following the\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/pubsub.html"}),"ZeroMQ Pub/Sub"),"\npattern. The plugin will publish messages on the ",(0,a.kt)("inlineCode",{parentName:"p"},"pub_port")," and accept\nmessages on the ",(0,a.kt)("inlineCode",{parentName:"p"},"sub_port"),"."),(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"topic")," field of the response contains a unique topic for the client. That\ntopic ",(0,a.kt)("strong",{parentName:"p"},"must")," be used to receive messages. The unique topic is a 32\ncharacters wide random string and guarantees that other subscribers won't\naccidentally see traffic that should only be visible to the new client. See\nbelow for more details on ",(0,a.kt)("a",c({parentName:"p"},{href:"#pubsub-via-zeromq"}),"pub/sub via ZeroMQ"),"."))),(0,a.kt)("h3",c({},{id:"unsubscription"}),"Unsubscription"),(0,a.kt)("p",null,"To unsubscribe, a connected app has to send a JSON struct to the ",(0,a.kt)("inlineCode",{parentName:"p"},"manage"),"\nendpoint of the plugin, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "action": "unsubscribe",\n  "topic": <P2P_TOPIC>       # the 32-characters random topic that the app received during subscription handshake\n}\n')),(0,a.kt)("p",null,"In response, the app will either receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," response."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Error response:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "status": "error"\n}\n'))),(0,a.kt)("li",{parentName:"ul"},"Success response:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "status": "success"\n}\n')))),(0,a.kt)("h3",c({},{id:"heartbeats"}),"Heartbeats"),(0,a.kt)("p",null,"The plugin supports synchronous heartbeats from subscribed apps. Heartbeats allow\nThreat Bus and the connected apps to mutually ensure that their communication\npartners are still alive."),(0,a.kt)("p",null,"Subscribed apps can send heartbeat messages with the following JSON format to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"manage")," endpoint of this plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "action": "heartbeat",\n  "topic": <P2P_TOPIC>       # the 32-characters random topic that the app got during subscription handshake\n}\n')),(0,a.kt)("p",null,"As stated in the beginning of this section, the ",(0,a.kt)("inlineCode",{parentName:"p"},"manage")," endpoint implements the\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://learning-0mq-with-pyzmq.readthedocs.io/en/latest/pyzmq/patterns/client_server.html"}),"ZeroMQ Request/Reply"),"\npattern. Threat Bus answers immediately to each heartbeat request with either a\n",(0,a.kt)("inlineCode",{parentName:"p"},"success")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," response."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Error response:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "status": "error"\n}\n'))),(0,a.kt)("li",{parentName:"ul"},"Success response:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",c({parentName:"pre"},{}),'{\n  "status": "success"\n}\n')))),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," response indicates that either Threat Bus has internal errors or that\nit lost track of the app's subscription. Note: This only happens when Threat Bus\nis restarted. Apps can then use that information to re-subscribe."),(0,a.kt)("p",null,"If Threat Bus does not answer a heartbeat message, it is either down or not\nreachable (e.g., due to network issues). Plugins can use that information to try\nagain later."),(0,a.kt)("h3",c({},{id:"pubsub-via-zeromq"}),"Pub/Sub via ZeroMQ"),(0,a.kt)("p",null,"Once an app has subscribed to a certain Threat Bus topic using the ",(0,a.kt)("inlineCode",{parentName:"p"},"manage"),"\nendpoint of the zmq plugin, it gets a unique, random ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p_topic")," (see\nabove). The ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p_topic")," differs from the subscribed Threat Bus topic in that the\nzmq plugin uses only the ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p_topic")," to publish messages to subscribers.\nMessages are either STIX-2 Indicators and Sightings, or are of the types\nspecified in\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/threatbus/data.py"}),(0,a.kt)("inlineCode",{parentName:"a"},"threatbus.data")),",\ni.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"SnapshotRequest"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SnapshotEnvelope"),"."),(0,a.kt)("p",null,"ZeroMQ uses ",(0,a.kt)("a",c({parentName:"p"},{href:"https://zeromq.org/socket-api/#topics"}),"prefix matching")," for pub/sub\nconnections. The zmq plugin leverages this feature to indicate the type of\neach sent message to the subscriber. Hence, an app can simply match the topic\nsuffix to determine the message type."),(0,a.kt)("p",null,"For example, all STIX-2 Indicators will always be sent on the topic\n",(0,a.kt)("inlineCode",{parentName:"p"},'p2p_topic + "indicator"'),", all messages of the type\n",(0,a.kt)("inlineCode",{parentName:"p"},"threatbus.data.SnapshotRequest")," on the topic ",(0,a.kt)("inlineCode",{parentName:"p"},'p2p_topic + "snapshotrequest"'),",\nand so forth."),(0,a.kt)("h2",c({},{id:"application-example-vast---threat-bus-connector"}),"Application Example: VAST - Threat Bus Connector"),(0,a.kt)("p",null,"Threat Bus is a publish-subscribe broker for security content. It expects that\napplications register themselves at the bus. Since VAST cannot do so on its own,\nVAST Threat Bus implements that functionality in the meantime."),(0,a.kt)("p",null,"VAST Threat Bus provides a thin layer around\n",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/use/integrate/python"}),"PyVAST"),", VAST's Python CLI bindings. It\nfacilitates message exchange between Threat Bus and a VAST instance,\ntransporting and converting STIX-2 Indicators and Sightings."),(0,a.kt)("h3",c({},{id:"installation-1"}),"Installation"),(0,a.kt)("p",null,"You can either run the app directly by cloning the repository and invoking the\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/apps/vast"}),"Python file")," or you\ncan install it via ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),". We recommend to install the app in a virtual\nenvironment."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"python -m venv --system-site-packages venv\nsource venv/bin/activate\npython3 -m pip install vast-threatbus\n")),(0,a.kt)("h3",c({},{id:"usage"}),"Usage"),(0,a.kt)("p",null,"You can configure the app via a YAML configuration file. See the\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/threatbus/blob/master/apps/vast/config.yaml.example"}),(0,a.kt)("inlineCode",{parentName:"a"},"config.yaml.example")),"\nfor an example config file that uses ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/DCSO/fever"}),"fever\nalertify")," to transform sighting contexts before\nthey get printed to ",(0,a.kt)("inlineCode",{parentName:"p"},"STDOUT"),". See the ",(0,a.kt)("a",c({parentName:"p"},{href:"#features"}),"Features")," section for details."),(0,a.kt)("p",null,"Start the application with a config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"./vast_threatbus.py -c config.yaml\n")),(0,a.kt)("h3",c({},{id:"stix-2-conversion"}),"STIX-2 Conversion"),(0,a.kt)("p",null,"Threat Bus uses the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.oasis-open.org/cti/stix/v2.1/stix-v2.1.html"}),"STIX-2 (version\n2.1)")," standard as data\nformat to transport\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.oasis-open.org/cti/stix/v2.1/cs02/stix-v2.1-cs02.html#_muftrcpnf89v"}),"Indicators"),"\nand\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.oasis-open.org/cti/stix/v2.1/cs02/stix-v2.1-cs02.html#_a795guqsap3r"}),"Sightings"),".\nThe Threat Bus ZeroMQ app plugin simply exposes Indicators and Sightings in\nSTIX-2 format to subscribing apps, like VAST Threat Bus. Because VAST comes with\nits own query language and its own internal IoC format for ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/use/detect/match-threat-intel"}),"live\nmatching"),", VAST Threat Bus must\nconvert between the STIX-2 format and VAST formats."),(0,a.kt)("p",null,"The conversion currently only regards ",(0,a.kt)("em",{parentName:"p"},"point indicators"),". A point indicator\nconsists of a single value and type, like a hostname or IP address.  VAST\nThreat Bus converts STIX-2 Indicators both to valid VAST queries for retro\nmatching and/or to a JSON representation used by VAST for live matching."),(0,a.kt)("p",null,"Similarly, VAST Threat Bus converts both query results and matching results to\nvalid STIX-2 Sightings before sending them back to the ZeroMQ app plugin."),(0,a.kt)("h3",c({},{id:"features"}),"Features"),(0,a.kt)("p",null,"This section explains the most important features of VAST Threat Bus."),(0,a.kt)("h4",c({},{id:"live-matching"}),"Live Matching"),(0,a.kt)("p",null,"VAST's live matching works as a continuous query. VAST THreat Bus subscribes to\nthose continuous query results and reports all new IoC matches from VAST to\nThreat Bus as ",(0,a.kt)("inlineCode",{parentName:"p"},"Sightings"),". You can enable live matching in the config file by\nsetting ",(0,a.kt)("inlineCode",{parentName:"p"},"live_match: true"),"."),(0,a.kt)("h4",c({},{id:"retro-matching"}),"Retro Matching"),(0,a.kt)("p",null,"VAST Threat Bus supports retro matching. You can enable it in the config file\nby setting ",(0,a.kt)("inlineCode",{parentName:"p"},"retro_match: true"),". This instructs the application to translate IoCs\nfrom Threat Bus to normal VAST queries instead of feeding the IoCs to a live\nmatcher."),(0,a.kt)("p",null,"Each result from an IoC query is treated as ",(0,a.kt)("inlineCode",{parentName:"p"},"Sighting")," of that IoC and reported\nback to Threat Bus. You can limit the maximum amount of results returned from\nVAST by setting the config option ",(0,a.kt)("inlineCode",{parentName:"p"},"retro_match_max_events")," to a positive integer."),(0,a.kt)("h4",c({},{id:"sighting-context-transformation"}),"Sighting Context Transformation"),(0,a.kt)("p",null,"You can configure VAST Threat Bus to invoke another program for parsing\nSighting ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," data via the config option ",(0,a.kt)("inlineCode",{parentName:"p"},"transform_context"),"."),(0,a.kt)("p",null,"If set, the app translates the ",(0,a.kt)("inlineCode",{parentName:"p"},"x_threatbus_sighting_context")," field of a STIX-2\nSighting via the specified utility. For example, configure the app to pass the\ncontext object to ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/DCSO/fever"}),"DCSO/fever")," ",(0,a.kt)("inlineCode",{parentName:"p"},"alertify"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"...\ntransform_context: fever alertify --alert-prefix 'MY PREFIX' --extra-key my-ioc --ioc %ioc\n...\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"x_threatbus_sighting_context")," field can contain arbitrary data. For\nexample, retro matches from VAST contain the full query result in the context\nfield (like a Suricata EVE entry or a Zeek conn.log entry)."),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd")," string passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"transform_context")," is treated as\ntemplate string. The placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"%ioc")," is replaced with the contents of the\nactually matched IoC."),(0,a.kt)("h4",c({},{id:"custom-sinks-for-sightings"}),"Custom Sinks for Sightings"),(0,a.kt)("p",null,"VAST Threat Bus offers to send Sighting context to a configurable ",(0,a.kt)("inlineCode",{parentName:"p"},"sink"),"\n",(0,a.kt)("em",{parentName:"p"},"instead")," of reporting them back to Threat Bus. This can be configured via the\n",(0,a.kt)("inlineCode",{parentName:"p"},"sink")," configuration parameter. The special placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"STDOUT")," can be used to\nprint the Sighting context to ",(0,a.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,a.kt)("p",null,"A custom sink is useful to forward ",(0,a.kt)("inlineCode",{parentName:"p"},"Sightings")," to another process, like\n",(0,a.kt)("inlineCode",{parentName:"p"},"syslog"),", or forward STDOUT via a UNIX pipe. Note that it may be desirable to\ndisable logging in that case."),(0,a.kt)("p",null,"Note that only the ",(0,a.kt)("inlineCode",{parentName:"p"},"x_threatbus_sighting_context")," field of a STIX-2 Sighting is\nprinted, and not the object structure of the Sighting itself."))}y.isMDXComponent=!0}}]);