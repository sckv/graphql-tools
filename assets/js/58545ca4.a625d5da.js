(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[9292],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return k}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5971:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=a(9603),n=a(120),l=(a(7378),a(5318)),o=["components"],i={},s={unversionedId:"api/classes/loaders_git_src.gitloader",id:"api/classes/loaders_git_src.gitloader",isDocsHomePage:!1,title:"Class: GitLoader",description:"loaders/git/src.GitLoader",source:"@site/docs/api/classes/loaders_git_src.gitloader.md",sourceDirName:"api/classes",slug:"/api/classes/loaders_git_src.gitloader",permalink:"/docs/api/classes/loaders_git_src.gitloader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/classes/loaders_git_src.gitloader.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Class: GithubLoader",permalink:"/docs/api/classes/loaders_github_src.githubloader"},next:{title:"Class: GraphQLFileLoader",permalink:"/docs/api/classes/loaders_graphql_file_src.graphqlfileloader"}},d=[{value:"Implements",id:"implements",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"canLoad",id:"canload",children:[]},{value:"canLoadSync",id:"canloadsync",children:[]},{value:"load",id:"load",children:[]},{value:"loadSync",id:"loadsync",children:[]},{value:"loaderId",id:"loaderid",children:[]},{value:"resolveGlobs",id:"resolveglobs",children:[]},{value:"resolveGlobsSync",id:"resolveglobssync",children:[]}]}],p={toc:d};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/loaders_git_src"},"loaders/git/src"),".GitLoader"),(0,l.kt)("p",null,"This loader loads a file from git."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const typeDefs = await loadTypedefs('git:someBranch:some/path/to/file.js', {\n  loaders: [new GitLoader()],\n})\n")),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/modules/utils#universalloader"},"UniversalLoader"))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"constructors"},"Constructors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#constructor"},"constructor"))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#canload"},"canLoad")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#canloadsync"},"canLoadSync")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#load"},"load")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#loadsync"},"loadSync")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#loaderid"},"loaderId")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#resolveglobs"},"resolveGlobs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_git_src.gitloader#resolveglobssync"},"resolveGlobsSync"))),(0,l.kt)("h2",{id:"constructors-1"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new GitLoader"),"()"),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"canload"},"canLoad"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"canLoad"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<","boolean\\",">"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<","boolean\\",">"),(0,l.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,l.kt)("p",null,"UniversalLoader.canLoad"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/git/src/index.ts#L54"},"packages/loaders/git/src/index.ts:54")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"canloadsync"},"canLoadSync"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"canLoadSync"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,l.kt)("p",null,"UniversalLoader.canLoadSync"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/git/src/index.ts#L58"},"packages/loaders/git/src/index.ts:58")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"load"},"load"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"load"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},"Source"),"\\",">"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/git-loader#gitloaderoptions"},"GitLoaderOptions"))))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},"Source"),"\\",">"),(0,l.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,l.kt)("p",null,"UniversalLoader.load"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/git/src/index.ts#L114"},"packages/loaders/git/src/index.ts:114")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadsync"},"loadSync"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"loadSync"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pointer"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},"Source")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pointer")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/git-loader#gitloaderoptions"},"GitLoaderOptions"))))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/utils_src.source"},"Source")),(0,l.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,l.kt)("p",null,"UniversalLoader.loadSync"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/git/src/index.ts#L131"},"packages/loaders/git/src/index.ts:131")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loaderid"},"loaderId"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"loaderId"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,l.kt)("p",null,"UniversalLoader.loaderId"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/git/src/index.ts#L50"},"packages/loaders/git/src/index.ts:50")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"resolveglobs"},"resolveGlobs"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"resolveGlobs"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<","string[]\\",">"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/utils#resolverglobs"},"ResolverGlobs"))))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<","string[]\\",">"),(0,l.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,l.kt)("p",null,"UniversalLoader.resolveGlobs"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/git/src/index.ts#L62"},"packages/loaders/git/src/index.ts:62")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"resolveglobssync"},"resolveGlobsSync"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"resolveGlobsSync"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"__namedParameters"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/utils#resolverglobs"},"ResolverGlobs"))))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,l.kt)("p",null,"UniversalLoader.resolveGlobsSync"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/git/src/index.ts#L88"},"packages/loaders/git/src/index.ts:88")))}c.isMDXComponent=!0}}]);