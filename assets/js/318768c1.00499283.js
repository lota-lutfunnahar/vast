"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),c=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={},g="summarize",k={unversionedId:"understand/operators/transformations/summarize",id:"version-VAST v3.1/understand/operators/transformations/summarize",title:"summarize",description:"Groups events and applies aggregate functions on each group.",source:"@site/versioned_docs/version-VAST v3.1/understand/operators/transformations/summarize.md",sourceDirName:"understand/operators/transformations",slug:"/understand/operators/transformations/summarize",permalink:"/docs/understand/operators/transformations/summarize",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/main/web/versioned_docs/version-VAST v3.1/understand/operators/transformations/summarize.md",tags:[],version:"VAST v3.1",frontMatter:{},sidebar:"docsSidebar",previous:{title:"sort",permalink:"/docs/understand/operators/transformations/sort"},next:{title:"tail",permalink:"/docs/understand/operators/transformations/tail"}},h={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>[field=]aggregation</code>",id:"fieldaggregation",level:3},{value:"<code>by &lt;extractor&gt;</code>",id:"by-extractor",level:3},{value:"<code>resolution &lt;duration&gt;</code>",id:"resolution-duration",level:3},{value:"Examples",id:"examples",level:2}],y={toc:v},b="wrapper";function N(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(b,d(m(m({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"summarize"}),"summarize"),(0,r.kt)("p",null,"Groups events and applies aggregate functions on each group."),(0,r.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"summarize <[field=]aggregation>... by <extractor>... [resolution <duration>]\n")),(0,r.kt)("h2",m({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"summarize")," operator groups events according to a grouping expression and\napplies an aggregation function over each group. The operator consumes the\nentire input before producing an output."),(0,r.kt)("p",null,"Fields that neither occur in an aggregation function nor in the ",(0,r.kt)("inlineCode",{parentName:"p"},"by")," list\nare dropped from the output."),(0,r.kt)("h3",m({},{id:"fieldaggregation"}),(0,r.kt)("inlineCode",{parentName:"h3"},"[field=]aggregation")),(0,r.kt)("p",null,"Aggregation functions compute a single value of one or more columns in a given\ngroup. Syntactically, ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregation")," has the form ",(0,r.kt)("inlineCode",{parentName:"p"},"f(xs...)")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," is the\naggregation function and ",(0,r.kt)("inlineCode",{parentName:"p"},"xs")," a comma-separated list arguments."),(0,r.kt)("p",null,"By default, the name for the new field ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregation")," is its string\nrepresentation, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"min(timestamp)"),". You can specify a different name by\nprepending a field assignment, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"min_ts=min(timestamp)"),"."),(0,r.kt)("p",null,"The following aggregation functions are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sum"),": Computes the sum of all grouped values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min"),": Computes the minimum of all grouped values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max"),": Computes the maximum of all grouped values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"any"),": Computes the disjunction (OR) of all grouped values. Requires the\nvalues to be booleans."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all"),": Computes the conjunction (AND) of all grouped values. Requires the\nvalues to be booleans."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distinct"),": Creates a sorted list of all unique grouped values that are not\nnull."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sample"),": Takes the first of all grouped values that is not null."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count"),": Counts all grouped values that are not null."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count_distinct"),": Counts all distinct grouped values that are not null.")),(0,r.kt)("h3",m({},{id:"by-extractor"}),(0,r.kt)("inlineCode",{parentName:"h3"},"by <extractor>")),(0,r.kt)("p",null,"The extractors specified after the ",(0,r.kt)("inlineCode",{parentName:"p"},"by")," clause partitions the input into groups."),(0,r.kt)("h3",m({},{id:"resolution-duration"}),(0,r.kt)("inlineCode",{parentName:"h3"},"resolution <duration>")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resolution")," option specifies an optional duration value that specifies the\ntolerance when comparing time values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"group-by")," section. For example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"01:48")," is rounded down to ",(0,r.kt)("inlineCode",{parentName:"p"},"01:00")," when a 1-hour ",(0,r.kt)("inlineCode",{parentName:"p"},"resolution")," is used."),(0,r.kt)("p",null,"NB: we introduced the ",(0,r.kt)("inlineCode",{parentName:"p"},"resolution")," option as a stop-gap measure to compensate for\nthe lack of a rounding function. The ability to apply functions in the grouping\nexpression will replace this option in the future."),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Group the input by ",(0,r.kt)("inlineCode",{parentName:"p"},"src_ip")," and aggregate all unique ",(0,r.kt)("inlineCode",{parentName:"p"},"dest_port")," values into a\nlist:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"summarize distinct(dest_port) by src_ip\n")),(0,r.kt)("p",null,"Same as above, but produce a count of the unique number of values instead of a\nlist:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"summarize count_distinct(dest_port) by src_ip\n")),(0,r.kt)("p",null,"Compute minimum, maximum of the ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," field per ",(0,r.kt)("inlineCode",{parentName:"p"},"src_ip")," group:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"summarize min(timestamp), max(timestamp) by src_ip\n")),(0,r.kt)("p",null,"Create a boolean flag ",(0,r.kt)("inlineCode",{parentName:"p"},"originator")," that is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if any value in the group is\n",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"summarize originator=any(is_orig) by src_ip\n")),(0,r.kt)("p",null,"Create 1-hour groups and produce a summary of network traffic between host\npairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"summarize sum(bytes_in), sum(bytes_out) by src_ip, dest_ip resolution 1 hour\n")))}N.isMDXComponent=!0}}]);