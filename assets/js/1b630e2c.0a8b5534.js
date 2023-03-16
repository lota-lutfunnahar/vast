"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>b,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>a(e,s(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={description:"Open source network security monitor"},g="Zeek",k={unversionedId:"understand/formats/zeek",id:"understand/formats/zeek",title:"Zeek",description:"Open source network security monitor",source:"@site/docs/understand/formats/zeek.md",sourceDirName:"understand/formats",slug:"/understand/formats/zeek",permalink:"/docs/next/understand/formats/zeek",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/understand/formats/zeek.md",tags:[],version:"current",frontMatter:{description:"Open source network security monitor"},sidebar:"docsSidebar",previous:{title:"Suricata",permalink:"/docs/next/understand/formats/suricata"},next:{title:"Connectors",permalink:"/docs/next/understand/connectors/"}},h={},y=[{value:"Parser",id:"parser",level:2},{value:"Printer",id:"printer",level:2}],_={toc:y},v="wrapper";function b(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,r.kt)(v,m(d(d({},_),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"zeek"}),"Zeek"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",d({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," network security monitor comes with its own format\nfor representing logs. Zeek's tab-separated value (TSV) representation includes\nadditional header fields with field names, type annotations, and additional\nmetadata."),(0,r.kt)("p",null,"Zeek can also render its logs as JSON. There are two ways to do that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"One log type per file, similar to TSV, but where each file consists of\nhomogeneous NDJSON records. To enable this log style, add\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.zeek.org/en/master/frameworks/logging.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"LogAscii::use_json=T")),"\nto your Zeek command line invocation or script configuration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A single file stream of heterogeneous records when using the\n",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/corelight/json-streaming-logs"}),"json-streaming-logs"),"\npackage. This mode adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"_path")," field to disambiguate the log type."))),(0,r.kt)("h2",d({},{id:"parser"}),"Parser"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import zeek")," command consumes TSV logs, whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"import zeek-json")," consumes\nJSON logs."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For stock Zeek JSON logs with one log type per file, use the existing ",(0,r.kt)("inlineCode",{parentName:"li"},"import\njson")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--type")," option to specify the Zeek log type."),(0,r.kt)("li",{parentName:"ol"},"For JSON streaming logs, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"import zeek-json")," command, which will\nautomatically look at the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"_path")," to demultiplex the log stream.")),(0,r.kt)("p",null,"Here's an example of a typical Zeek ",(0,r.kt)("inlineCode",{parentName:"p"},"conn.log")," in TSV form:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"#separator \\x09\n#set_separator  ,\n#empty_field  (empty)\n#unset_field  -\n#path conn\n#open 2014-05-23-18-02-04\n#fields ts  uid id.orig_h id.orig_p id.resp_h id.resp_p proto service duration  \u2026orig_bytes resp_bytes  conn_state  local_orig  missed_bytes  history orig_pkts \u2026orig_ip_bytes  resp_pkts resp_ip_bytes tunnel_parents\n#types  time  string  addr  port  addr  port  enum  string  interval  count coun\u2026t  string  bool  count string  count count count count table[string]\n1258531221.486539 Pii6cUUq1v4 192.168.1.102 68  192.168.1.1 67  udp - 0.163820  \u2026301  300 SF  - 0 Dd  1 329 1 328 (empty)\n1258531680.237254 nkCxlvNN8pi 192.168.1.103 137 192.168.1.255 137 udp dns 3.7801\u202625 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531693.816224 9VdICMMnxQ7 192.168.1.102 137 192.168.1.255 137 udp dns 3.7486\u202647 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531635.800933 bEgBnkI31Vf 192.168.1.103 138 192.168.1.255 138 udp - 46.72538\u20260  560 0 S0  - 0 D 3 644 0 0 (empty)\n1258531693.825212 Ol4qkvXOksc 192.168.1.102 138 192.168.1.255 138 udp - 2.248589\u2026  348  0 S0  - 0 D 2 404 0 0 (empty)\n1258531803.872834 kmnBNBtl96d 192.168.1.104 137 192.168.1.255 137 udp dns 3.7488\u202693 350 0 S0  - 0 D 7 546 0 0 (empty)\n1258531747.077012 CFIX6YVTFp2 192.168.1.104 138 192.168.1.255 138 udp - 59.05289\u20268  549 0 S0  - 0 D 3 633 0 0 (empty)\n1258531924.321413 KlF6tbPUSQ1 192.168.1.103 68  192.168.1.1 67  udp - 0.044779  \u2026303  300 SF  - 0 Dd  1 331 1 328 (empty)\n1258531939.613071 tP3DM6npTdj 192.168.1.102 138 192.168.1.255 138 udp - - - - S0\u2026  -  0 D 1 229 0 0 (empty)\n1258532046.693816 Jb4jIDToo77 192.168.1.104 68  192.168.1.1 67  udp - 0.002103  \u2026311  300 SF  - 0 Dd  1 339 1 328 (empty)\n1258532143.457078 xvWLhxgUmj5 192.168.1.102 1170  192.168.1.1 53  udp dns 0.0685\u202611 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532203.657268 feNcvrZfDbf 192.168.1.104 1174  192.168.1.1 53  udp dns 0.1709\u202662 36  215 SF  - 0 Dd  1 64  1 243 (empty)\n1258532331.365294 aLsTcZJHAwa 192.168.1.1 5353  224.0.0.251 5353  udp dns 0.1003\u202681 273 0 S0  - 0 D 2 329 0 0 (empty)\n")),(0,r.kt)("p",null,"You can import this log as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast import zeek < conn.log\n")),(0,r.kt)("admonition",d({},{title:"type mapping",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import zeek")," command maps the types ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"real"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"addr")," from the\nZeek TSV ",(0,r.kt)("inlineCode",{parentName:"p"},"#types")," header line to VAST's basic types ",(0,r.kt)("inlineCode",{parentName:"p"},"uint64"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"double"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"ip"),".")),(0,r.kt)("p",null,"When Zeek ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.zeek.org/en/stable/frameworks/logging.html#rotation"}),"rotates logs"),", it produces compressed batches of\n",(0,r.kt)("inlineCode",{parentName:"p"},"*.log.gz")," regularly. If log freshness is not a priority, you could trigger an\nad-hoc ingestion for every compressed batch of Zeek logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"gunzip -c *.gz | vast import zeek\n")),(0,r.kt)("h2",d({},{id:"printer"}),"Printer"),(0,r.kt)("p",null,"Zeek's TSV model represents effectively a transposed record, with nested record\nfields being dot-separated. This makes it feasible to re-export a subset of data\nfrom VAST as Zeek logs. Only a subset because there exist some restrictions,\nsuch as records within lists."),(0,r.kt)("p",null,"For example, assume this Suricata EVE JSON log is in VAST:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-json"}),'{"timestamp":"2011-08-14T07:38:53.914038+0200","flow_id":929669869939483,"event_type":"flow","src_ip":"147.32.84.165","src_port":138,"dest_ip":"147.32.84.255","dest_port":138,"proto":"UDP","app_proto":"failed","flow":{"pkts_toserver":2,"pkts_toclient":0,"bytes_toserver":486,"bytes_toclient":0,"start":"2011-08-12T14:53:47.928539+0200","end":"2011-08-12T14:53:47.928552+0200","age":0,"state":"new","reason":"timeout","alerted":false}}\n{"timestamp":"2011-08-12T15:00:36.378914+0200","flow_id":269421754201300,"pcap_cnt":22569,"event_type":"http","src_ip":"147.32.84.165","src_port":1027,"dest_ip":"74.125.232.202","dest_port":80,"proto":"TCP","tx_id":0,"http":{"hostname":"cr-tools.clients.google.com","url":"/service/check2?appid=%7B430FD4D0-B729-4F61-AA34-91526481799D%7D&appversion=1.3.21.65&applang=&machine=0&version=1.3.21.65&osversion=5.1&servicepack=Service%20Pack%202","http_user_agent":"Google Update/1.3.21.65;winhttp","http_method":"GET","protocol":"HTTP/1.1","length":0}}\n')),(0,r.kt)("p",null,"You can export it as Zeek log as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"vast export zeek '#type == /.*(flow|http)/'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),"#separator  \n#set_separator  ,\n#empty_field    (empty)\n#unset_field    -\n#path   suricata.flow\n#open   2022-12-16-20-24-23\n#fields timestamp   flow_id pcap_cnt    vlan    in_iface    src_ip  src_port    dest_ip dest_port   proto   event_type  community_id    flow.pkts_toserver  flow.pkts_toclient  flow.bytes_toserver flow.bytes_toclient flow.start  flow.end    flow.age    flow.state  flow.reason flow.alerted    app_proto\n#types  time    count   count   vector[count]   string  addr    port    addr    port    string  string  string  count   count   count   countime    time    count   string  string  bool    string\n1313300333.914038   929669869939483 -   -   -   147.32.84.165   138 147.32.84.255   138 UDP flow    -   2   486 0   1313153627.928539   1313153627.928552   0   new timeout F   failed\n#separator  \n#set_separator  ,\n#empty_field    (empty)\n#unset_field    -\n#path   suricata.http\n#open   2022-12-16-20-24-23\n#fields timestamp   flow_id pcap_cnt    vlan    in_iface    src_ip  src_port    dest_ip dest_port   proto   event_type  community_id    http.hostname   http.url    http.http_port  http.http_user_agent    http.http_content_type  http.http_method    http.http_refer http.protocol   http.status http.redirect   http.length tx_id\n#types  time    count   count   vector[count]   string  addr    port    addr    port    string  string  string  string  string  port    string  string  string  string  string  count   string  count   count\n1313154036.378914   269421754201300 22569   -   -   147.32.84.165   1027    74.125.232.202  80  TCP http    -   cr-tools.clients.google.com /service/check2?appid=%7B430FD4D0-B729-4F61-AA34-91526481799D%7D&appversion=1.3.21.65&applang=&machine=0&version=1.3.21.65&osversion=5.1&servicepack=Service%20Pack%202 -   Google Update/1.3.21.65;winhttp -   GET -   HTTP/1.1    -   0\n#close  2022-12-16-20-24-23\n")),(0,r.kt)("p",null,"The Zeek TSV format cannot display data from multiple schemas. VAST prints a\nheader for following lines whenever it encounters a schema change."))}b.isMDXComponent=!0}}]);