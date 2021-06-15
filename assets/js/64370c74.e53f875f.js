(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[4385],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var o=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),d=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||a;return r?o.createElement(m,l(l({ref:t},s),{},{components:r})):o.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3979:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=r(9603),n=r(120),a=(r(7378),r(5318)),l=["components"],i={id:"code-file-loader",title:"@graphql-tools/code-file-loader",sidebar_label:"code-file-loader"},p={unversionedId:"api/modules/code-file-loader",id:"api/modules/code-file-loader",isDocsHomePage:!1,title:"@graphql-tools/code-file-loader",description:"- CodeFileLoader",source:"@site/docs/api/modules/loaders_code_file_src.md",sourceDirName:"api/modules",slug:"/api/modules/code-file-loader",permalink:"/docs/api/modules/code-file-loader",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/modules/loaders_code_file_src.md",version:"current",sidebar_label:"code-file-loader",frontMatter:{id:"code-file-loader",title:"@graphql-tools/code-file-loader",sidebar_label:"code-file-loader"},sidebar:"someSidebar",previous:{title:"@graphql-tools/apollo-engine-loader",permalink:"/docs/api/modules/apollo-engine-loader"},next:{title:"@graphql-tools/git-loader",permalink:"/docs/api/modules/git-loader"}},d=[{value:"Type aliases",id:"type-aliases",children:[]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"CodeFileLoaderOptions",id:"codefileloaderoptions",children:[]}]}],s={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/classes/loaders_code_file_src.codefileloader"},"CodeFileLoader"))),(0,a.kt)("h3",{id:"type-aliases"},"Type aliases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/modules/code-file-loader#codefileloaderoptions"},"CodeFileLoaderOptions"))),(0,a.kt)("h2",{id:"type-aliases-1"},"Type aliases"),(0,a.kt)("h3",{id:"codefileloaderoptions"},"CodeFileLoaderOptions"),(0,a.kt)("p",null,"\u01ac ",(0,a.kt)("strong",{parentName:"p"},"CodeFileLoaderOptions"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"noPluck?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"noRequire?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"pluckConfig?"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/graphql_tag_pluck_src.graphqltagpluckoptions"},"GraphQLTagPluckOptions")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"require?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]  } & ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/utils#singlefileoptions"},"SingleFileOptions")),(0,a.kt)("p",null,"Additional options for loading from a code file"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/code-file/src/index.ts#L35"},"packages/loaders/code-file/src/index.ts:35")))}c.isMDXComponent=!0}}]);