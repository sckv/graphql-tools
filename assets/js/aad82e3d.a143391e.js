(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[7339],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),f=r,u=c["".concat(p,".").concat(f)]||c[f]||m[f]||l;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3026:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=a(9603),r=a(120),l=(a(7378),a(5318)),i=["components"],o={id:"load-files",title:"@graphql-tools/load-files",sidebar_label:"load-files"},p={unversionedId:"api/modules/load-files",id:"api/modules/load-files",isDocsHomePage:!1,title:"@graphql-tools/load-files",description:"- LoadFilesOptions",source:"@site/docs/api/modules/load_files_src.md",sourceDirName:"api/modules",slug:"/api/modules/load-files",permalink:"/docs/api/modules/load-files",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/load_files_src.md",version:"current",sidebar_label:"load-files",frontMatter:{id:"load-files",title:"@graphql-tools/load-files",sidebar_label:"load-files"},sidebar:"someSidebar",previous:{title:"@graphql-tools/load",permalink:"/docs/api/modules/load"},next:{title:"@graphql-tools/merge",permalink:"/docs/api/modules/merge"}},s=[{value:"Functions",id:"functions",children:[]},{value:"Functions",id:"functions-1",children:[{value:"loadFiles",id:"loadfiles",children:[]},{value:"loadFilesSync",id:"loadfilessync",children:[]}]}],d={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/interfaces/load_files_src.loadfilesoptions"},"LoadFilesOptions"))),(0,l.kt)("h3",{id:"functions"},"Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/modules/load-files#loadfiles"},"loadFiles")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/modules/load-files#loadfilessync"},"loadFilesSync"))),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"loadfiles"},"loadFiles"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"loadFiles"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"pattern"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<","any[]\\",">"),(0,l.kt)("p",null,"Asynchronously loads files using the provided glob pattern."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pattern")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Glob pattern or patterns to use when loading files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/interfaces/load_files_src.loadfilesoptions"},"LoadFilesOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Additional options")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"<","any[]\\",">"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/load-files/src/index.ts#L207"},"packages/load-files/src/index.ts:207")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadfilessync"},"loadFilesSync"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"loadFilesSync"),"<","T\\",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"pattern"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,l.kt)("p",null,"Synchronously loads files using the provided glob pattern."),(0,l.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"T")," = ",(0,l.kt)("inlineCode",{parentName:"td"},"any"))))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pattern")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Glob pattern or patterns to use when loading files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/interfaces/load_files_src.loadfilesoptions"},"LoadFilesOptions")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Additional options")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/load-files/src/index.ts#L124"},"packages/load-files/src/index.ts:124")))}m.isMDXComponent=!0}}]);