"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56059],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>w});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},M=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(a),M=r,w=p["".concat(m,".").concat(M)]||p[M]||d[M]||o;return a?n.createElement(w,i(i({ref:t},s),{},{components:a})):n.createElement(w,i({ref:t},s))}));function w(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=M;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}M.displayName="MDXCreateElement"},75069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>x,default:()=>k,frontMatter:()=>w,metadata:()=>h,toc:()=>f});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&s(e,a,t[a]);if(c)for(var a of c(t))l.call(t,a)&&s(e,a,t[a]);return e},d=(e,t)=>o(e,i(t)),M=(e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a};const w={},x="Import",h={unversionedId:"use/import/README",id:"use/import/README",title:"Import",description:"Ingesting data to VAST (aka importing) involves spinning up a VAST client",source:"@site/docs/use/import/README.md",sourceDirName:"use/import",slug:"/use/import/",permalink:"/docs/next/use/import/",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/docs/use/import/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Run",permalink:"/docs/next/use/run/"},next:{title:"Export",permalink:"/docs/next/use/export/"}},u={},f=[{value:"Choose an import format",id:"choose-an-import-format",level:2},{value:"Infer a schema automatically",id:"infer-a-schema-automatically",level:2},{value:"Write a schema manually",id:"write-a-schema-manually",level:2},{value:"Map events to schemas",id:"map-events-to-schemas",level:2}],A={toc:f},D="wrapper";function k(e){var t=e,{components:a}=t,r=M(t,["components"]);return(0,n.kt)(D,d(p(p({},A),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"import"}),"Import"),(0,n.kt)("p",null,"Ingesting data to VAST (aka ",(0,n.kt)("em",{parentName:"p"},"importing"),") involves spinning up a VAST client\nthat parses and ships the data to a VAST server. In the following, we assume\nthat you ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/use/run/"}),"set up a server")," listening at ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:5158"),"."),(0,n.kt)("h2",p({},{id:"choose-an-import-format"}),"Choose an import format"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," command to ingest data from standard input or file:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"vast import [options] <format> [options] [expr]\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/formats/"}),"format")," defines the encoding of data.\nText formats include ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/formats/json"}),"JSON"),",\n",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/formats/csv"}),"CSV"),", or tool-specific data encodings like\n",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/formats/zeek"}),"Zeek"),". Examples for binary formats are\n",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/formats/pcap"}),"PCAP")," and\n",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/formats/netflow"}),"NetFlow"),"."),(0,n.kt)("p",null,"For example, to import a file in JSON, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," format:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"vast import json < data.json\n")),(0,n.kt)("h2",p({},{id:"infer-a-schema-automatically"}),"Infer a schema automatically"),(0,n.kt)("admonition",p({},{title:"Auto-inference coming soon",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"Writing a schema will be optional in the future. For example, only when you want\nto tune the data semantics. Take a look at the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/tenzir/public-roadmap/issues/5"}),"corresponding roadmap\nitem")," to better understand\nwhen this capability lands in VAST.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"infer")," command attempts to deduce a schema, given a sample of data. For\nexample, consider this JSON data:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2011-08-14T07:38:53.914038+0200",\n  "src_ip": "147.32.84.165",\n  "src_port": 138,\n  "dest_ip": "147.32.84.255",\n  "dest_port": 138,\n  "proto": "UDP"\n}\n')),(0,n.kt)("p",null,"To infer its schema, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"jq -c < data.json | head -1 | vast infer\n")),(0,n.kt)("p",null,"This prints:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"type json = record {timestamp: time, src_ip: ip, src_port: int64, dest_ip: ip, dest_port: int, proto: string}\n")),(0,n.kt)("admonition",p({},{title:"YAML Modules coming soon",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"We are currently reworking VAST's schema language. The available\n",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/use/introspect/"}),"introspection capabilities")," already show the\nnew schema style. Track the ",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/tenzir/public-roadmap/issues/15"}),"corresponding roadmap\nitem")," to see when this\nrewrite lands.")),(0,n.kt)("p",null,"The idea is that ",(0,n.kt)("inlineCode",{parentName:"p"},"infer")," jump-starts the schema writing process by providing a\nreasonable blueprint. You still need to provide the right name for the type and\nperform adjustments, such as replacing some generic types with more semantic\naliases, e.g., using the ",(0,n.kt)("inlineCode",{parentName:"p"},"timestamp")," alias instead of type ",(0,n.kt)("inlineCode",{parentName:"p"},"time")," to designate\nthe event timestamp."),(0,n.kt)("h2",p({},{id:"write-a-schema-manually"}),"Write a schema manually"),(0,n.kt)("p",null,"If VAST does not ship with a ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/data-model/modules"}),"module")," for your data out of the box,\nor the inference is not good enough for your use case regarding type semantics\nor performance, you can easily write one yourself."),(0,n.kt)("p",null,"A schema is a record type with a name so that VAST can\nrepresent it as a table internally. You would write a schema manually or extend\nan existing schema if your goal is tuning type semantics and performance. For\nexample, if you have a field of type ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," that only holds IP addresses, you\ncan upgrade it to type ",(0,n.kt)("inlineCode",{parentName:"p"},"addr")," and enjoy the benefits of richer query\nexpressions, e.g., top-k prefix search. Or if you onboard a new data source, you\ncan ship a schema along with ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/data-model/taxonomies#concepts"}),"concept")," mappings for a deeper\nintegration."),(0,n.kt)("p",null,"You write a schema (and potentially accompanying types, concepts, and models) in\na ",(0,n.kt)("a",p({parentName:"p"},{href:"/docs/next/understand/data-model/modules"}),"module"),"."),(0,n.kt)("p",null,"Let's write one from scratch, for a tiny dummy data source called ",(0,n.kt)("em",{parentName:"p"},"foo")," that\nproduces CSV events of this shape:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csv"}),"date,target,message\n2022-05-17,10.0.0.1,foo\n2022-05-18,10.0.0.2,bar\n2022-05-18,10.0.0.3,bar\n")),(0,n.kt)("p",null,"The corresponding schema type looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"message:\n  record:\n    - date: time\n    - target: ip\n    - message: msg\n")),(0,n.kt)("p",null,"You can embed this type definition in a dedicated ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," module:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"module: foo\ntypes:\n  message:\n    record:\n      - date: time\n      - target: ip\n      - message: msg\n")),(0,n.kt)("p",null,"Now that you have a new module, you can choose to deploy it at the client or\nthe server. When a VAST server starts, it will send a copy of its local schemas\nto the client. If the client has a schema for the same type, it will override\nthe server version. We recommend deploying the module at the server when all\nclients should see the contained schemas, and at the client when the scope is\nlocal. The diagram below illustrates the initial handshake:"),(0,n.kt)("p",null,(0,n.kt)("figure",p({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.kt)("svg",p({parentName:"figure"},{viewBox:"0 0 724 243",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nOVcXFtX4khcdTAwMTd971/hcl5cdTAwMDem7pd5Q1x1MDAxNFx1MDAwNVx1MDAxNVx1MDAxNVx1MDAxMITvm+VcbiRAJCSQXHUwMDA0uczq/z5cdTAwMDVtS7hcdTAwMDTCRc30pNeyIVVJVSp7n3P2qSr+/nZycuqPe8bpnyenxqihWabuasPT36fnX1xy1zNcdTAwMWRbXHUwMDE1odl3z1x1MDAxObiNWc227/e8P//4Q+v1kvOrklxyp/vjSsMyuobte6ru/9T3k5O/Z39cdTAwMDNtuUbD1+yWZcwumFx1MDAxNc2bg5Dj5dN5x561XHKpxFxmICzIe1xy0ztXXHL6hq6Km5rlXHUwMDE585LpqdOKfV4t3t9VYO+6MbJKVTy+KKN5u03Tsor+2Jr1y3PUs8zLPN91OkbF1P32tO2l82FXuc6g1bZccm/6/OD9rNPTXHUwMDFhpj+e3lx1MDAwN8zP/lx1MDAxOIRgvZH6hlx1MDAwMzWmV2BcdTAwMDKW2k47luNO2/5ccsyOeet1rdFpqS7Y+ntcdTAwMWTf1Wyvp7nqnczrXHLfnlxuXHUwMDA12mpcdTAwMWJmq+1Pu0hAXHUwMDEyXHUwMDA0j/lcdTAwMGLxjNlIM4FcdTAwMDBcdTAwMTOAo/eCaaO9rD57639cdTAwMDVcdTAwMDfD1t9cdTAwMDbjJ1xm5kCAb2e+z7s/rX+xXGagIIhcdTAwMDKv9rJZLueMM3dcXLLR+GpEu+alzL8/4lx1MDAwMuI013WGp+8l33/fdF/qvUzQWcHtPIyqXHUwMDE3r412ylx1MDAxZV8+R7vv26f5XHUwMDAwXGZ6uvZcdTAwMDOckHGGIOJcdTAwMTIyMceSZdpcdTAwMWRVaFx1MDAwZixrfs5pdOZ4/lx1MDAxNujwbkxCkoRcdTAwMTJJ9YJcdTAwMDDGQXRcIlx1MDAxOUNcZotcdTAwMDWueW3gvd7bxjm7Ru3PXCJcdTAwMTLcj0iYLlx1MDAxMlx00UOI9FvD0ImurZJcYuI1JFxunPtJXHUwMDFhzimAXHUwMDE48q8kzVO3Up88P19cdTAwMTVlwy+7L5P7Rrdwtlx1MDAxZdy+MfK/XHUwMDEw27Pm18CaMlx1MDAxOVxua8GUc+BcdTAwMTSzyLDePFx1MDAxZYuwbmuN9sA1dlx1MDAwNrauSGNcdTAwMWPXRZAlXHUwMDE3gT/ORUC0XHUwMDA23WhcdTAwMDXdkFx1MDAwYlxuXHUwMDA0hFxm71x1MDAwMO9cdTAwMDVsrOB4XHUwMDFi1NBcdTAwMGVQm79Rx/aL5mRcdTAwMDZcdTAwMTe2cDajdU1rvPBcImdcdTAwMThUXHUwMDAzlLbMhbGpa56h2pzdhCzUTllma4rS04a6wHBcdTAwMTdcdTAwMDDsmypaeq/QNXU9aLhcdTAwMWKqXHUwMDBimrqnm41ib1x1MDAxZNdsmbZmlVx1MDAxNnu4XHUwMDE3o1A4oZSTl4AzXHUwMDE5nVCjlDbuJyZcIlNcdTAwMTbZi1x1MDAxN4En7pmZi3fAxYBMXCJKIcBcdTAwMTBcdTAwMTDJXGJb4Fx1MDAxNiE0SVx1MDAxMGGYI0ZcdCeCh1FtLY3WOZImbKImWkM1ucq0gC17Y1x1MDAxYYKCQ1x1MDAwMVx1MDAwM5Z2XHUwMDFmP4K2+5Ft/MNcdTAwMDfyXHUwMDBmiaj8S62lXsCdL1DPMpr+XHUwMDA24vlOL4x1XHUwMDBiXHUwMDBmsEyx1GZ2bVE1goaRjGNIOOVcdTAwMTJF5phuXFy9dIaTRLNQztVGXHUwMDE1M9tOXHUwMDE3y/HmXHUwMDE4XHUwMDE3sVx1MDAxNzWQYCxV7CC+VNVcdTAwMWOgPjaqmlx1MDAwM9RSxMhvXHUwMDE3c7A/kzBgYUSCRFx1MDAxOUWKYHRnVTZdu9rKXHUwMDAwVtBzqavMqI+A/lx1MDAxMG9Ro54wVqJGUEQgXHUwMDEx7Cs5g4vS13Mwn+JNnGHWYzpnl/vHXHUwMDE0NUeDdqioXHUwMDEx4aimXHUwMDE4SqDsXHUwMDEyiFxm683jXHUwMDExV1EjUFxmRY1CNlwiXGKCXHUwMDFk4H2YqDk0qIouaoqG+1x1MDAxYVQonyBqttjb5YjrrYdcdTAwMWJcdTAwMTn1w1mtc1x1MDAxNDQ0j0xcdKCUc1x1MDAxMj37tdl7xtJRUFx1MDAwMJOQzVx1MDAwZr5ILoGTXHUwMDAyXHUwMDExqVwiTyGBXHUwMDE0lFx1MDAxY8K1UC+COE+y4LGGdctcdTAwMWRBKyxUpZRcdTAwMTBcdTAwMTbo41x1MDAxNylcdTAwMWWyXHUwMDBmOT1fc/0z09ZNu7XYsbepkmyEmYrpM2u9aXdcdTAwMTZeqjpooErTaVxmplx1MDAwZpJcdTAwMDBJXGIgRJhKSlx1MDAwMWWQS77y9Iatb+/VZqmxW6+idMrSPD/tdLumr0b/3jFtf3mUZ8OZmrK+bWgrok09VLBMeVx1MDAwMXMplOxNb7pcdTAwMThSzD+dzEk0+/L++a/f19aGWCRcdTAwMDVcdTAwMGVcdTAwMWMweHliXHUwMDE129tuXHUwMDE4Spil7nxcdTAwMGL+v7tt5OFTXHUwMDAzXHUwMDE4M6rKUXTjuFmyxNQ4LsZcdTAwMWHkMDlcdTAwMWFu/0SkOIMpc1xmkESHRdH/dlx1MDAwMze3XHUwMDEzXHUwMDA0XHTK4fzvqr35IGtcdTAwMTY0oIKR6Vx1MDAxY1x1MDAxOZeMKbvFSIRO7GG91lioJVx1MDAxYrZw/XGtXHUwMDE3WaiPtl5cdTAwMTCA81JcdTAwMDOR7JFhWWbPWyvrKVx1MDAxNMtn3y1cdTAwMTKSylx1MDAxYVx1MDAwMSbmNbZZpMfzhyet/6I17vnkjkLcvVx1MDAxZlx1MDAxYjzmXHUwMDE2aTlBXHUwMDE2MFx1MDAwNkdPkNEkolxcwEDqYG6cXHUwMDAy6e1cdTAwMWbGSVxyPZRM2ae1xmlOXG5+XyvpLadDXHUwMDBil2lQXHUwMDE3ty5M3Vx1MDAxOD+19j5S6f3WXHUwMDBikn+tlFx1MDAwZbz7+/O6lW7nzNtMTb9Ij8wrvfhwsbvk38VcdTAwMTJuXHUwMDA0fZjkJ1x1MDAxMoZcIl7M4l1cIqJL/vVPXHUwMDFkc8QvZbLwcttHymRtQDtcXEE7xohiXHUwMDE5VCqfhPZcdTAwMGZxzcHEXHUwMDAwSipnKoiK7eT04HSh1oZEXHUwMDAxXFyfI0BcdTAwMGJcdTAwMTWPliPYYruXc1x1MDAwNHDPOU+GQtnHOZ/G9DtMyFjjW4c/o4GD7EtcdTAwMDC5edHr9YvxZlx1MDAxZoNKs3Eo+HI6WSY/KKFM4Cr/1qTcoFxuvLhcdTAwMTC/IFx1MDAwMSNn5lx1MDAxNCNso+Gf+M6Jt3uS7oOmP1c7tVx1MDAxN/EgXHUwMDBmz3SrUFtA9eqjS89cdC2yi+yrc50xh52ydev2vVx1MDAxYi/uxFtaXyDCXHUwMDAzvalcdTAwMDbR6ntKT4hX+UZW+KbklTJ3fCvddO0y/ahXas8pMUQ6uEBcdTAwMDWcrX5cdTAwMTDdlPWl8PPo5inBdaJZ1lx1MDAxYq5cdTAwMTOeqVx1MDAxYv+3vUbb6GreSdN1uiddR1x1MDAxZljGicKT4Z2sZSP+XFw27tznjWTdJMxcdTAwMDKCYGV1XHUwMDEwx1x1MDAwMlxijqKHqTfNinBasJQqP3r1etVNXfUxiDdfl4XZgXw9ojCDXHUwMDFjKdlMw1x1MDAxNix8IHffb71mMjZXZo9cdTAwMGakmMmOXdS6l+6k3Fx1MDAxNU9Hmozd2TDs5aIoXGKPXHJcdTAwMTnB6lx1MDAxZtlhjcHm8Ygp5Fx1MDAxN4PCoFQ9pouCkVx1MDAxNNl0yTSkWFx1MDAwNYW/nIvaW5Kh9Vx1MDAxMeFcdTAwMDdJsi1We9k3oT0lXHUwMDE5XHL3NFx1MDAxMiMhXHUwMDA0XHUwMDAx0T1NXHUwMDA2m5OJ+VLP0EnJspxcdMZnZ91401x1MDAwZcNFT0OBXGKlXHUwMDFkqHMk6L6RoVjl3WpkiIDAXHUwMDE0UFx1MDAxMbL4Yc47v3RzMTJcdTAwMWVy2LNLr/1EpZHNdvSP4lx1MDAxZJKKeJ+nxGbLqmfR1cnP4MpR4HR/hFvz2OtnaVx1MDAxY2LD3Tu9d3BIQ+dcdTAwMTE5xlx1MDAxMsBd1lhU4NPgfHDffXy+eX5OtVxujcbo6jHejEWcXHUwMDFkk7HHjFxyXHUwMDA1oNOZdrQtNjw6eTfFhlx1MDAxOadtlUaV8/v0s3BIZvJ6fn1mXHUwMDFmKzbc1TLsXHUwMDE3XHUwMDFibtgsgZRcdTAwMThCfJf1p5vHI56QXHUwMDBm7DuYQT6QZjimk4pcdTAwMTZcdTAwMWJcIiAlXHUwMDAyVG5NX/z7fNTesSH+1Nhwi9Ve9k34gE1cdTAwMTSYb9BlgDJcdTAwMDRcdTAwMTiNzr37oXTy5dHTIF+XtdqkflGRJVx1MDAxMW/uXHRcZpJLyixwzT7JeoRE3WBr2LduK1x1MDAxMltN1jOpXGae0kLrV+bN6ZevvdJ+x1x1MDAxYdS42c61vU6++vJcdTAwMTDcfXBq8EY669+M01x1MDAxM1vnefGSdlx1MDAxZvgoLtn8XHUwMDAzIMtCNY1AmFBcdTAwMDGiL2rQXHUwMDA3924m41aanaLkOmeJp5eJXHUwMDFlc8CiZcCqoPArXHUwMDAxqySk4JxtXcpgdc1rPDx7yrvEgmVcdTAwMDQqt7fgv1x1MDAwMFdcdTAwMTK6ZlpcdTAwMTlXqVxckepKZMBepFx0XHUwMDEymcrVU67Osk/pYlxuJbKFmFx1MDAwM1x1MDAxNq5cdTAwMDBWfClgkXJrjPCtKd5zZJdqlVbLtl7sM9qoXGZcdJ+MP1x1MDAxNLGb4nza6tH06GySyFczjcvBY6JROS9cdTAwMWYpzv+c1TlcdTAwMTiHJ6OIXHUwMDAwXHUwMDE4I7bLXG7ZjeNcdTAwMTFTJtBcdTAwMTXTLVx1MDAwZVxcXHUwMDFhXHUwMDEwylx1MDAwNbCGXHUwMDBiaPVXZygkXFxcdTAwMTJcdTAwMTI/Lnz00oHAXGbbtk09XHUwMDFi0lBcdTAwMDH5dFRcdLDFzq/s6omSdNrspmjoZmrIXHUwMDE1SoSkNPrindI1XHUwMDE27au87V09XHQnXHUwMDAx7+6fkXdcdTAwMTlvcjJFTk4plpRcdFx1MDAxNUXiRUk+/cWCYCk4aCVpKGtcdTAwMTlOSklcdTAwMTggXHUwMDE4MkpYYLnUfL8oSlwixqDggFx1MDAwMkxlIDn2vthHsql82Cbfx7gmelx1MDAwZm67Slx1MDAxYWXvuj0o1IdcdTAwMGI7PE/brbTfNMaDOjL7t69t2ynn0GtcXCh9XGLSQTjSKYNcZolcdTAwMWR+m8N1cihRMqtu9onwXHUwMDA32+71PLNcdTAwMTZ3pIMkVlx1MDAxMbvkgkCOXHUwMDAy0efbto2FUlx1MDAxOVukY8YwgXLrXCLq2lx1MDAwNemAulZcdTAwMWG/6nfFp1x1MDAxNvdamFxc/1x1MDAxN4C+Ia8q1XtVI7/DsrB+XHKxjFx1MDAwNmlBVF5cdTAwMWbFZcYz6oOYx1tcZixldjBd/L2K2EJcdTAwMWJiIKnE2+dcdOWL0b/tvFafXHUwMDFlXHUwMDFi9o0+XHUwMDFjmLlqp/pfwLZcZtVcdTAwMTKMUkbxLlkgVM9UvdpTLUtcdTAwMTlcdTAwMTl1h12zdlx1MDAxYvdZMuXE4pW2RFx1MDAxMDKFXHUwMDAwXG62hVx1MDAxZFjc5avnfesll6725YOdYImc/Fx1MDAxNVx1MDAwMFx1MDAxOZ5IV1x1MDAwNFfx4y6L39PPXHUwMDBly9w94FahY1xm85Mz7LVcdTAwMDduzFx1MDAxMUlilpfEXHUwMDAyM1x1MDAwMjHdtsSplHFruJfJtPtFevfcgeNBpf74XHUwMDBiXHUwMDAwMnxmR0VNgiv/XHUwMDE03ULWXHUwMDEyXHUwMDE2aPVcdTAwMThwX25alvCLRlx1MDAwZegx3/yHVyZ2XHUwMDBlTTtCqmn15v5cdTAwMTM7qlx1MDAwMVwilbDcNrFz+ThcdTAwMWPIUipbLnBrUKhMcmnbzH9UWjGR58+PvF5wm3fVS59dXZ+pM8daPlx1MDAwMDBCu/yi5Ea0h6ZcdTAwMTVZ+Mb76cpSXHUwMDA2OY+u5zaPR0yRfvy0YijWo6VcdTAwMTWhXHUwMDAyOkFo60qZo0P9mGicv/R/S9Zwi5nenDX89jbip1qvV/TV2J3+3PR/+mpcdTAwMWHDs3U/ujk7ptfPSHs621x1MDAxNzG97Pu37/9cdTAwMDCePXyZIn0=",(0,n.kt)("defs",{parentName:"svg"},(0,n.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,n.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M69 25h130M69 25h130m0 0c23.33 0 35 11.67 35 35m-35-35c23.33 0 35 11.67 35 35m0 0v70m0-70v70m0 0c0 23.33-11.67 35-35 35m35-35c0 23.33-11.67 35-35 35m0 0H69m130 0H69m0 0c-23.33 0-35-11.67-35-35m35 35c-23.33 0-35-11.67-35-35m0 0V60m0 70V60m0 0c0-23.33 11.67-35 35-35M34 60c0-23.33 11.67-35 35-35"})),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m77.82 11.76 116.19-2.45 4.77 4.17.09 23.31-.15.38-7.62 1.8L73.91 40.2l-3.17-4.34-.56-17.55-.38-6.57 7.77-2.42"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M76.5 10c44.29-.03 84.5-.46 115 0m-115 0c25.85 1.12 53.36 1.5 115 0m0 0c5.76.54 7.84 3.64 7.5 7.5m-7.5-7.5c6.99-1.02 5.59 2.14 7.5 7.5m0 0c1.55 4 1.19 8.52 0 15m0-15c.42 4.51.71 9.99 0 15m0 0c-.92 4.34-3.02 5.89-7.5 7.5m7.5-7.5c-.94 4.59-1.04 9.47-7.5 7.5m0 0c-29.23.48-58.87-1.17-115 0m115 0c-31.36.37-62.87.12-115 0m0 0c-3.66 1.08-6.22-3.17-7.5-7.5m7.5 7.5c-4.42.58-6.84-1.64-7.5-7.5m0 0c-.84-6.42.08-10.88 0-15m0 15c.63-4.89-.26-9.69 0-15m0 0c-.26-3.16 2.37-8.57 7.5-7.5M69 17.5c.77-5.48 3.64-7.87 7.5-7.5"}))),(0,n.kt)("text",p({parentName:"svg"},{x:"60",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(74 15)"}),"Client"),(0,n.kt)("text",p({parentName:"svg"},{y:"25",fill:"transparent",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},transform:"translate(343.255 130.425)"}),"A"),(0,n.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M549 25h130m-130 0h130m0 0c23.33 0 35 11.67 35 35m-35-35c23.33 0 35 11.67 35 35m0 0v70m0-70v70m0 0c0 23.33-11.67 35-35 35m35-35c0 23.33-11.67 35-35 35m0 0H549m130 0H549m0 0c-23.33 0-35-11.67-35-35m35 35c-23.33 0-35-11.67-35-35m0 0V60m0 70V60m0 0c0-23.33 11.67-35 35-35m-35 35c0-23.33 11.67-35 35-35"})),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#ced4da",strokeWidth:"0",d:"m557.76 9.85 116.32 1.43 5.48 3.56-.57 20.01-3.59 3.56-3.2 1.58-120.65.06-.97-2.29-.5-18.86.15-7.18 7.22-.23"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M556.5 10c45.85-.57 88.84-.73 115 0m-115 0c42.98-.23 87.57 1.21 115 0m0 0c3.32 1.99 7.24 3.19 7.5 7.5m-7.5-7.5c2.92 1.73 6.86 4.3 7.5 7.5m0 0c-1.36 3.62.67 9.03 0 15m0-15c-.36 5.89-.63 10.93 0 15m0 0c-1.03 6.23-2.73 7.64-7.5 7.5m7.5-7.5c.08 6.24-4.48 7.76-7.5 7.5m0 0c-27.7-.26-54.78-2.46-115 0m115 0c-22.54-1.68-45.6-1.85-115 0m0 0c-6.96 1.1-8.94-3.58-7.5-7.5m7.5 7.5c-5.66-1.3-8-4.46-7.5-7.5m0 0c-.64-4.92-.91-6.98 0-15m0 15c.04-5.61-.47-10.09 0-15m0 0c1.49-4.94 3.86-9.1 7.5-7.5m-7.5 7.5c-.66-6.71 1.36-6.28 7.5-7.5"}))),(0,n.kt)("text",p({parentName:"svg"},{x:"60",y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(554 15)"}),"Server"),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M235.317 69.335c23.03-4.18 91.08-25.25 137.51-25.51 46.44-.26 117.64 19.91 141.12 23.94m-280.01.8c23.43-4.09 94.36-23.82 140.99-23.82 46.64-.01 115.6 19.79 138.83 23.79"})),(0,n.kt)("path",p({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m515.617 67.005-17.68 4.18 3.74-13.52 12.16 9.43"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M514.407 67.065c-5.86 3.71-9.45 4.21-16.28 6.04m15.09-4.98c-2.86.77-5.98 1.26-14.26 3.67m-.6 1.15c2.09-4.6 2.72-9.02 2.37-14.2m-1.17 12.55c.04-3.36.65-5.96 2.51-12.35m.75.52c2.19 2.09 8.12 7.96 12.38 8.31m-13.78-8.9c3.94 2.66 6.09 4.63 12.81 9.89m-.47-.23s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M234.66 125.62c23.18 3.29 92.35 20.08 138.96 19.78 46.6-.3 117.4-18.05 140.68-21.58m-280.75 1.08c22.94 2.86 92.23 18.65 138.92 18.59 46.69-.07 117.76-15.88 141.22-18.97"})),(0,n.kt)("path",p({parentName:"g"},{fillRule:"evenodd",strokeWidth:"0",d:"m235.15 124.11 13.98-3.45-.49 14.67-12.31-11.18"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M235.44 125.14c4.72-.58 7.76-3.16 12.73-2.54m-13.5 2.5c4.22-.46 7.19-1.85 14.29-3.6m1.08.76c-2.25 4.46-1.65 7.97-4.17 11.33m3.36-11.72c-.8 2.29-1.22 5.21-1.98 12.14m-1.24.59c-3.04-1.19-5.09-5.36-12.52-10.44m13.41 10.21c-2.66-1.57-6.16-3.95-12.64-9.43m.4.68s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#000",strokeLineCap:"round",d:"M321.58 11.09c2.2-.93 6.35-.3 9.03.86 2.69 1.16 5.8 3.6 7.08 6.09 1.28 2.49 1.2 5.9.61 8.85-.58 2.94-2.26 6.83-4.12 8.83-1.86 1.99-4.3 3.26-7.04 3.11-2.74-.14-7.38-1.97-9.4-3.98-2.02-2.01-2.48-5.06-2.71-8.07-.23-3.01-.18-7.4 1.32-9.99 1.51-2.58 6.01-4.5 7.71-5.5 1.71-1.01 2.3-.57 2.5-.52m4.82 1.06c2.64.72 5.05 2.51 6.2 4.93 1.15 2.42 1.16 6.75.7 9.6-.45 2.86-1.23 5.46-3.42 7.51-2.18 2.05-7.16 4.55-9.69 4.8-2.54.24-3.79-1.16-5.53-3.32-1.75-2.16-4.53-6.63-4.95-9.63-.42-3 1.32-6.1 2.42-8.36 1.1-2.25 2.07-4.41 4.2-5.16 2.12-.75 6.67.71 8.57.66 1.9-.06 2.88-.94 2.83-.99"})),(0,n.kt)("text",p({parentName:"svg"},{x:"7.629",y:"12",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"12.715",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(319 16)"}),"1"),(0,n.kt)("text",p({parentName:"svg"},{y:"14",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(345.172 14.5)"}),"connect to server"),(0,n.kt)("text",p({parentName:"svg"},{y:"14",fill:"#1864ab",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(350 171)"}),"send all server-side"),(0,n.kt)("text",p({parentName:"svg"},{y:"34",fill:"#1864ab",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(350 171)"}),"schemas from module files "),(0,n.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#1864ab",strokeLineCap:"round",d:"M330.71 171.85c2.49.66 4.71 3.59 6.13 5.93 1.41 2.35 2.49 5.22 2.35 8.14-.15 2.92-1.37 7.38-3.24 9.38-1.87 2.01-5.21 2.49-7.99 2.65-2.78.16-6.5.07-8.68-1.7-2.19-1.78-3.91-5.9-4.41-8.96-.5-3.07.22-6.93 1.4-9.43 1.17-2.49 2.98-4.68 5.67-5.54 2.69-.86 8.52.09 10.47.38 1.96.29 1.31 1.34 1.24 1.37m-.47-1.42c2.44.89 3.43 2.33 4.4 5.01.97 2.68 2.15 7.98 1.42 11.07s-3.63 6.05-5.78 7.46c-2.14 1.41-4.38 1.45-7.08.99-2.71-.46-7.12-1.72-9.17-3.75-2.05-2.03-3.03-5.79-3.14-8.46-.11-2.67.94-5.11 2.48-7.56 1.53-2.46 4.19-6.28 6.74-7.17 2.54-.89 6.87 1.65 8.53 1.83 1.66.18 1.54-1 1.43-.76"})),(0,n.kt)("text",p({parentName:"svg"},{x:"7.5",y:"12",fill:"#1864ab",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"12.715",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(319 176)"}),"2"),(0,n.kt)("text",p({parentName:"svg"},{y:"14",fill:"#0b7285",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(44 193)"}),"client-side schemas override"),(0,n.kt)("text",p({parentName:"svg"},{y:"34",fill:"#0b7285",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"16",style:{whiteSpace:"pre"},transform:"translate(44 193)"}),"server-side schemas"),(0,n.kt)("path",p({parentName:"svg"},{fill:"none",stroke:"#0b7285",strokeLineCap:"round",d:"M29.26 193.92c2.32 1.18 4.24 4.68 5.27 7.52 1.02 2.85 1.59 6.66.87 9.55-.72 2.88-2.94 6.36-5.19 7.77-2.26 1.4-5.67 1.24-8.32.64-2.66-.59-5.58-2.32-7.61-4.22-2.03-1.89-4.31-4.32-4.56-7.17-.25-2.86 1.51-7.54 3.06-9.96 1.55-2.43 3.25-4.1 6.21-4.58 2.96-.48 9.41 1.02 11.55 1.72 2.14.69 1.58 2.27 1.3 2.44m-11.67-3.69c2.47-.79 5.89-1.73 8.19-.49 2.3 1.25 4.39 5.25 5.62 7.95 1.22 2.69 2.61 5.45 1.72 8.23-.9 2.77-4.74 6.56-7.09 8.42-2.36 1.86-4.67 3.1-7.03 2.75-2.36-.35-5.29-2.74-7.14-4.85-1.85-2.11-3.91-4.77-3.97-7.83-.07-3.05 1.93-7.94 3.59-10.52 1.66-2.57 5.54-4.28 6.35-4.95.82-.67-1.35.45-1.45.94"})),(0,n.kt)("text",p({parentName:"svg"},{x:"7.5",y:"12",fill:"#0b7285",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"12.715",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(15 198)"}),"3"),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m566.42 83.56 117.51-.32-.02 62.33-119.99-1.16"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M566.15 83.76c23.63.27 45.86 1 118.56.64m-119.33.1c36.77.22 73.83.83 118.02.63m1.05-1.39c-.44 26.65-1.28 47.93.44 59.87m-.74-59.2c.04 15.12.5 30.8-1.61 61m-.19.88c-24.87-.42-54.56 1.25-117.05-1.89m119.12 1.12c-36.24.47-72.32.77-120.82-1.09m-.32-1.15c1.88-15.13 2.99-33.73.54-58.65m.56 60.53c-.08-22.77.16-44.88 1.05-61.05"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m553.06 75.43 118.68-.02 2.33 59.01-120.16.99"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M553.26 75.55c26.45-3.48 53.81-.32 119.64-.2m-118.9-.5c24.15-1.78 48.56-.99 119.63 1.14m-1.39-.88c2.78 21.19.13 45.36-.13 58.99m.8-58.71c.36 21.49.73 40.7 1 58.91m.88 2.01c-33.84-3.04-64.73-1.19-120.89-1.39m120.12 0c-24.74.26-49.36.28-120.09-.09m-1.15.5c2.02-13.53.39-30.29 1.35-58.77m.53 58.64c-.47-21.74.1-43.23-1.05-59.24"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m544.93 63.24 118.98 2.33-.99 58.84-118.01-1.16"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M545.05 63.57c28.52 1.46 62.7 1.56 118.8-.57m-119.5 1.84c36.15 1.2 73.83.88 120.14.83m-.88.79c-.56 15.98 1.56 34.43-1.01 59.55m1.29-61.79c.85 23.81-.96 48.05-1.09 60.52m2.01.27c-46.72 2.43-89.23.15-120.39-1.82m119 2.5c-39.54.91-78.22-.65-119.09-1.25m.5.68c1.47-17.8-.65-32.82 1.23-58.79m-1.36 58.75c.31-21.34.8-44.78.76-60.8"}))),(0,n.kt)("text",p({parentName:"svg"},{x:"54.5",y:"17",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(549.5 83.5)"}),"Schemas"),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m351.005 130.515 60.82 2.21 1.15 28.54-61.98-.06"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M349.295 130.705c14.11-2.53 32.05-.89 66.08-1.83m-64.86 2.69c19.69-2.02 37.81-.96 63.18-1.8m-.11 2.58c.29 6.96-.4 17.61.41 29.79m-1.2-32.02c-.03 13.17 1.37 25.49.54 33.63m.78-2.16c-22.29 1.13-40.59 1.97-65.13 2.75m64.46-.63c-17.99-.43-38.59-1.11-64.56-.06m2.85-2.47c-2.92-5.23-1.1-17.23-1.92-28.48m.33 29.96c-1.22-9.58-.44-18.53.18-32.38"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m344.138 123.458 66.2 1.15-3.72 34.27-64.06-.59"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M344.328 124.048c18.67 3.1 40.91 3.1 62.16 1.51m-61.3.49c15.97-2.15 34.39-1.21 62.19-.77m2.59-.04c-2.73 11.65-1.45 25.07-2.48 33.87m.25-34.7c1.12 11 1.4 19.77 1.36 33.47m-2.16-1.44c-14.2 2.54-29.28.56-61.25 1.22m63.37.92c-15.51-1.56-30.9-2-64.05-1.16m-2.47-.55c3.8-9.42.76-21.63 3.78-31.42m-2.3 31.36c.39-8.85 1.23-17.86-.12-30.8"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m337.08 121.97 65.14-3.73 2.01 32.21-64.58 1.11"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M337.67 118.02c28.12 1.65 53.28.11 65.51 1.41m-63.51-.02c23.77.54 50.15-.92 63.23 1.41m-.04-1.64c-.72 7.81.35 13 1.6 33.04m-2.44-31.74c1.09 9.98.25 19.65 1.21 31.27m-1.44.8c-10.85.38-26.09.57-62.78-1.68m64.92 1.29c-24.11-.24-47.27 1.17-65.15.59m-.56 1.4c1.5-11.97.52-17.81.85-34.18m-.91 32.15c.66-7.06 1.29-16.15 1.47-32.24"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m83.44 83.18 120.28 2.02 1.61 59.52-120.41.5"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M84.1 84.25c28.76.59 56.16 2.47 120.14-.98M85.01 84.44c29.57-.57 59.25.81 118.03.14m1.97 1.47c.07 24.05-1.5 47.92-.35 57.75m-.7-59c-.11 11.39-.12 23.28.37 61.02m.36.89c-24.89-3.57-49.72-2.44-120.08-.27m119.24-1.11c-33 .19-63.55-.23-119.04-.37m-1.2-1.07c1.64-16.64.67-37.17-.42-57.12m.35 57.92c1.96-14.15 1.36-29.71.08-60.08"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#228be6",strokeWidth:"0",d:"m72.68 75.22 121.02 1.61-.48 58.59-118.5.23"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M73.75 75.3c34.45-.41 71.22.68 118.02-1.36M73.94 75.66c45.71-.35 92.9-1.73 119.14.32m1.47.24c-.16 20.05-.17 43.18-2.25 56.79m1-57.35c-.27 14.89-.42 29.97 1.02 58.35m.89 1.27c-47.09-.15-89.56.54-119.27-.9m117.89-.03c-26.24 1.86-52.72 1.37-119.37.73m-1.07.79c1.58-20.16-.47-40.54 2.88-61.95m-2.08 61.76c.53-15.36-.26-31.06-.08-61.21"}))),(0,n.kt)("g",p({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",p({parentName:"g"},{fill:"#15aabf",strokeWidth:"0",d:"m64.72 65.2 120.61-.48-1.41 60.5-118.77.87"})),(0,n.kt)("path",p({parentName:"g"},{fill:"none",stroke:"#000",d:"M64.8 63.81c24.81 2.33 51.35-.09 117.64 2.89M65.16 64.34c40.74 2.05 79.84.9 119.32 1.26m.24.62c-1.12 14.74.39 27.09-3.21 57.75m2.65-59.82c.26 21.63.45 45.23-1.65 61.51m1.27-2.44c-35.79 2.14-70.04 4.24-119.9.16m118.97 1.76c-38.13-.04-78.19.21-118.27.06m.79.54c-.71-22.74-1.91-40.35-1.95-61.82m1.76 61.38c-.03-19.63-.98-38.38-1.21-61.21"}))),(0,n.kt)("text",p({parentName:"svg"},{x:"54.5",y:"17",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(69.5 83.5)"}),"Schemas")))),(0,n.kt)("p",null,"Regardless of where you deploy the module, the procedure is the same at client\nand server: place the module in an existing module directory, such as\n",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/vast/modules"),", or tell VAST in your ",(0,n.kt)("inlineCode",{parentName:"p"},"vast.yaml")," configuration file where\nto look for additional modules via the ",(0,n.kt)("inlineCode",{parentName:"p"},"module-dirs")," key:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-yaml"}),"vast:\n  module-dirs:\n    - path/to/modules\n")),(0,n.kt)("p",null,"At the server, restart VAST and you're ready to go. Or just spin up a new client\nand ingest the CSV with richer typing:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"vast import csv < foo.csv\n")),(0,n.kt)("h2",p({},{id:"map-events-to-schemas"}),"Map events to schemas"),(0,n.kt)("p",null,"For some input formats, such as JSON and CSV, VAST requires an existing schema\nto find the corresponding type definition and use higher-level types."),(0,n.kt)("p",null,"There exist two ways to tell VAST how to map events to schemas:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Field Matching"),": by default, VAST checks every new record whether there\nexists a corresponding schema where the record fields match. If found, VAST\nautomatically assigns the matching schema."),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--type=PREFIX"),' option makes it possible to restrict the set of candidate\nschemas to type names with a given prefix, in case there exist multiple\nschemas with identical field names. "Prefix" here means up to a dot delimiter\nor a full type name, e.g., ',(0,n.kt)("inlineCode",{parentName:"p"},"suricata")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.dns")," are valid prefixes,\nbut neither ",(0,n.kt)("inlineCode",{parentName:"p"},"suricat")," nor ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.d"),"."),(0,n.kt)("admonition",p({parentName:"li"},{title:"Performance Boost",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"In case the prefix specified by ",(0,n.kt)("inlineCode",{parentName:"p"},"--type")," yields ",(0,n.kt)("em",{parentName:"p"},"exactly one")," possible\ncandidate schema, VAST can operate substantially faster. The reason is that\nVAST disambiguates multiple schemas by comparing their normalized\nrepresentation, which works by computing hash of the list of sorted field\nnames and comparing it to the hash of the candidate types."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Selector Specification"),": some events have a dedicated field to indicate\nthe type name of a particular event. For example, Suricata EVE JSON records\nhave an ",(0,n.kt)("inlineCode",{parentName:"p"},"event_type")," field that contains ",(0,n.kt)("inlineCode",{parentName:"p"},"flow"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dns"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"smb"),", etc., to\nsignal what object structure to expect."),(0,n.kt)("p",{parentName:"li"},"To designate a selector field, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--selector=FIELD:PREFIX")," option to\nspecify a colon-separated field-name-to-schema-prefix mapping, e.g.,\n",(0,n.kt)("inlineCode",{parentName:"p"},"vast import json --selector=event_type:suricata")," reads the value from the\nfield ",(0,n.kt)("inlineCode",{parentName:"p"},"event_type")," and prefixes it with ",(0,n.kt)("inlineCode",{parentName:"p"},"suricata.")," to look for a\ncorresponding schema."))))}k.isMDXComponent=!0}}]);