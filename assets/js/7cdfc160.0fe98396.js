"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[776],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(f,r(r({ref:n},m),{},{components:t})):a.createElement(f,r({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7274:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_position:4},s="Configure",p={unversionedId:"setup-vast/configure",id:"setup-vast/configure",title:"Configure",description:"VAST offers several mechanisms to adjust configuration options on startup.",source:"@site/docs/setup-vast/configure.md",sourceDirName:"setup-vast",slug:"/setup-vast/configure",permalink:"/vast/docs/setup-vast/configure",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/docs/docs/setup-vast/configure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Docker",permalink:"/vast/docs/setup-vast/deploy/docker"},next:{title:"Tune",permalink:"/vast/docs/setup-vast/tune"}},m={},c=[{value:"Command Line",id:"command-line",level:2},{value:"Getting help",id:"getting-help",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Keys",id:"keys",level:3},{value:"Values",id:"values",level:3},{value:"Configuration files",id:"configuration-files",level:2},{value:"Plugin Configuration Files",id:"plugin-configuration-files",level:3},{value:"Bare Mode",id:"bare-mode",level:3}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure"},"Configure"),(0,o.kt)("p",null,"VAST offers several mechanisms to adjust configuration options on startup."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Command-line arguments"),(0,o.kt)("li",{parentName:"ol"},"Environment variables"),(0,o.kt)("li",{parentName:"ol"},"Configuration files"),(0,o.kt)("li",{parentName:"ol"},"Compile-time defaults")),(0,o.kt)("p",null,"These mechanisms are sorted by precedence, i.e., command-line arguments override\nenvironment variables, which override configuration file settings."),(0,o.kt)("p",null,"Compile-time defaults can only be changed by ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup-vast/build"},"rebuilding VAST from\nsource"),"."),(0,o.kt)("h2",{id:"command-line"},"Command Line"),(0,o.kt)("p",null,"VAST has a hierarchical command structure of this form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast [opts] cmd1 [opts1] cmd2 [opts2] ...\n")),(0,o.kt)("p",null,"Both long ",(0,o.kt)("inlineCode",{parentName:"p"},"--long=X")," and short ",(0,o.kt)("inlineCode",{parentName:"p"},"-s X")," exist. Boolean options do not require\nexplicit specification of a value, and it suffices to write ",(0,o.kt)("inlineCode",{parentName:"p"},"--long")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-s"),"\nto set an option to true."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hierarchical Options")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Each command has its own dedicated set of options. Options are not global and\nonly valid for their respective command. Consider this example:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast --option foo # option applies to command 'vast'\nvast foo --option # option applies to command 'foo'\n")))),(0,o.kt)("h3",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Internally, VAST implicitly generates three sub-commands for every command:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"help")," for displaying brief usage"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"documentation")," for more more details and description"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"manual")," for rendering a man page")),(0,o.kt)("p",null,"You get short usage instructions for every command by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"help"),"\nsub-command or providing the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," (which has the shorthand ",(0,o.kt)("inlineCode",{parentName:"p"},"-h"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast help\nvast --help\nvast -h\n")),(0,o.kt)("p",null,"The same help pattern applies to (sub-)commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast export help\nvast export --help\nvast export -h\n")),(0,o.kt)("p",null,"In addition to brief usage instructions, the ",(0,o.kt)("inlineCode",{parentName:"p"},"documentation")," command provides\nmore comprehensive information. The output is in Markdown\n(",(0,o.kt)("a",{parentName:"p",href:"https://commonmark.org/"},"CommonMark"),") format. We recommend using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/charmbracelet/glow"},"glow")," to render the output in the\nterminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast import documentation | glow -\n")),(0,o.kt)("p",null,"Finally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"manual")," subcommand prints a man-page-like output for a given\ncommand, plus all contained subcommands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vast import manual | glow -\n")),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"In addition to the command line, VAST offers environment variables as an\nequivalent mechanism to provide options. This comes in handy when working with\nnon-interactive deployments where the command line is hard-coded, such as in\nDocker containers."),(0,o.kt)("p",null,"An environment variable has the form ",(0,o.kt)("inlineCode",{parentName:"p"},"KEY=VALUE"),", and we discuss the format of\n",(0,o.kt)("inlineCode",{parentName:"p"},"KEY")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VALUE")," below. VAST processes only environment variables having the\nform ",(0,o.kt)("inlineCode",{parentName:"p"},"VAST_{KEY}=VALUE"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"VAST_ENDPOINT=1.2.3.4")," translates to the\nthe command line option ",(0,o.kt)("inlineCode",{parentName:"p"},"--endpoint=1.2.3.4")," and YAML configuration\n",(0,o.kt)("inlineCode",{parentName:"p"},"vast.endpoint: 1.2.3.4"),"."),(0,o.kt)("p",null,"Regarding precedence, environment variables override configuration file\nsettings, and command line arguments override environment variables."),(0,o.kt)("h3",{id:"keys"},"Keys"),(0,o.kt)("p",null,"There exists a one-to-one mapping from configuration file keys to environment\nvariable names. Here are two examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vast.import.batch-size")," \ud83d\udc48 configuration file key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VAST_IMPORT__BATCH_SIZE")," \ud83d\udc48 environment variable")),(0,o.kt)("p",null,"A hierarchical key of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.x.y.z")," maps to the environment variable\n",(0,o.kt)("inlineCode",{parentName:"p"},"VAST_X__Y__Z"),". More generally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"KEY")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"VAST_{KEY}=VALUE")," adheres to the\nfollowing rules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Double underscores map to the ",(0,o.kt)("inlineCode",{parentName:"p"},".")," separator of YAML dictionaries.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Single underscores ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," map to a ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," in the corresponding configuration file\nkey. This is unambiguous because VAST does not have any options that include\na literal underscore."))),(0,o.kt)("p",null,"From the perspective of the command line, the environment variable key\n",(0,o.kt)("inlineCode",{parentName:"p"},"VAST_X__Y__Z")," maps to ",(0,o.kt)("inlineCode",{parentName:"p"},"vast x y --z"),". Here are two examples with identical\nsemantics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"VAST_IMPORT__BATCH_SIZE=42 vast import json < data\nvast import --batch-size=42 json < data\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"CAF Settings")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To provide CAF settings, which have the form ",(0,o.kt)("inlineCode",{parentName:"p"},"caf.x.y.z")," in the configuration\nfile, the environment variable must have the form ",(0,o.kt)("inlineCode",{parentName:"p"},"VAST_CAF__X__Y__Z"),"."),(0,o.kt)("p",{parentName:"div"},"The configuration file is an exception in this regard: ",(0,o.kt)("inlineCode",{parentName:"p"},"vast.caf.")," is not a\nvalid key prefix. Instead, CAF configuration file keys have the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"caf."),",\ni.e., they are hoisted into the global scope."))),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("p",null,"While all environment variables are strings on the shell, VAST parses them into\na typed value internally. In general, parsing values from the environment\nfollows the same syntactical rules as command line parsing."),(0,o.kt)("p",null,"In particular, this applies to lists. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},'VAST_PLUGINS="sigma,pcap"'),"\nis equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"--plugins=foo,bar"),"."),(0,o.kt)("p",null,"VAST ignores environment variables with an empty value because the type cannot\nbe inferred. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"VAST_PLUGINS=")," will not be considered."),(0,o.kt)("h2",{id:"configuration-files"},"Configuration files"),(0,o.kt)("p",null,"VAST's configuration file is in YAML format. On startup, VAST attempts to read\nconfiguration files from the following places, in order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<sysconfdir>/vast/vast.yaml")," for system-wide configuration, where\n",(0,o.kt)("inlineCode",{parentName:"p"},"sysconfdir")," is the platform-specific directory for configuration files,\ne.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"<install-prefix>/etc"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/vast/vast.yaml")," for user-specific configuration. VAST respects\nthe XDG base directory specification and its environment variables.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A path to a configuration file passed via ",(0,o.kt)("inlineCode",{parentName:"p"},"--config=/path/to/vast.yaml"),"."))),(0,o.kt)("p",null,"If there exist configuration files in multiple locations, options from all\nconfiguration files are merged in order, with the latter files receiving a\nhigher precedence than former ones. For lists, merging means concatenating the\nlist elements."),(0,o.kt)("h3",{id:"plugin-configuration-files"},"Plugin Configuration Files"),(0,o.kt)("p",null,"In addition to ",(0,o.kt)("inlineCode",{parentName:"p"},"vast/vast.yaml"),", VAST loads ",(0,o.kt)("inlineCode",{parentName:"p"},"vast/plugin/<plugin>.yaml")," for\nplugin-specific configuration for a given plugin named ",(0,o.kt)("inlineCode",{parentName:"p"},"<plugin>"),". The same\nrules apply as for the regular configuration file directory lookup."),(0,o.kt)("h3",{id:"bare-mode"},"Bare Mode"),(0,o.kt)("p",null,"Sometimes, users may wish to run VAST without side effects, e.g., when wrapping\nVAST in their own scripts. Run with ",(0,o.kt)("inlineCode",{parentName:"p"},"--bare-mode")," to disable looking at all\nsystem- and user-specified configuration paths."))}u.isMDXComponent=!0}}]);