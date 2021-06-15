(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[7455],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),u=a,g=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},607:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(9603),a=n(120),i=(n(7378),n(5318)),o=["components"],c={},l={unversionedId:"api/interfaces/delegate_src.mergedfieldconfig",id:"api/interfaces/delegate_src.mergedfieldconfig",isDocsHomePage:!1,title:"Interface: MergedFieldConfig",description:"delegate/src.MergedFieldConfig",source:"@site/docs/api/interfaces/delegate_src.mergedfieldconfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/delegate_src.mergedfieldconfig",permalink:"/docs/api/interfaces/delegate_src.mergedfieldconfig",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/interfaces/delegate_src.mergedfieldconfig.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Interface: MappingInstruction",permalink:"/docs/api/interfaces/stitching_directives_src.mappinginstruction"},next:{title:"Interface: MergedTypeConfig&lt;K, V, TContext\\&gt;",permalink:"/docs/api/interfaces/delegate_src.mergedtypeconfig"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"canonical",id:"canonical",children:[]},{value:"computed",id:"computed",children:[]},{value:"selectionSet",id:"selectionset",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/delegate_src"},"delegate/src"),".MergedFieldConfig"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/delegate_src.mergedfieldconfig#canonical"},"canonical")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/delegate_src.mergedfieldconfig#computed"},"computed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/delegate_src.mergedfieldconfig#selectionset"},"selectionSet"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"canonical"},"canonical"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"canonical"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/delegate/src/types.ts#L175"},"packages/delegate/src/types.ts:175")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"computed"},"computed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"computed"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/delegate/src/types.ts#L174"},"packages/delegate/src/types.ts:174")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectionset"},"selectionSet"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"selectionSet"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/delegate/src/types.ts#L173"},"packages/delegate/src/types.ts:173")))}d.isMDXComponent=!0}}]);