(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[9268],{5318:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),s=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(m.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=s(t),f=o,u=g["".concat(m,".").concat(f)]||g[f]||c[f]||a;return t?n.createElement(u,i(i({ref:r},l),{},{components:t})):n.createElement(u,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var m in r)hasOwnProperty.call(r,m)&&(p[m]=r[m]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7181:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var n=t(9603),o=t(120),a=(t(7378),t(5318)),i=["components"],p={id:"migration-from-merge-graphql-schemas",title:"Migration from Merge GraphQL Schemas",sidebar_label:"From Merge GraphQL Schemas",description:"Migration from Merge GraphQL Schemas"},m={unversionedId:"migration-from-merge-graphql-schemas",id:"migration-from-merge-graphql-schemas",isDocsHomePage:!1,title:"Migration from Merge GraphQL Schemas",description:"Migration from Merge GraphQL Schemas",source:"@site/docs/migration-from-merge-graphql-schemas.md",sourceDirName:".",slug:"/migration-from-merge-graphql-schemas",permalink:"/docs/migration-from-merge-graphql-schemas",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/migration-from-merge-graphql-schemas.md",version:"current",sidebar_label:"From Merge GraphQL Schemas",frontMatter:{id:"migration-from-merge-graphql-schemas",title:"Migration from Merge GraphQL Schemas",sidebar_label:"From Merge GraphQL Schemas",description:"Migration from Merge GraphQL Schemas"},sidebar:"someSidebar",previous:{title:"Migration from GraphQL Toolkit",permalink:"/docs/migration-from-toolkit"},next:{title:"Migration from GraphQL Import",permalink:"/docs/migration-from-import"}},s=[{value:"Merging Type Definitions",id:"merging-type-definitions",children:[]}],l={toc:s};function c(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Merge GraphQL Schemas was using GraphQL Toolkit's ",(0,a.kt)("inlineCode",{parentName:"p"},"@graphql-toolkit/schema-merging")," package under the hood but we decided to deprecate it in favor of new GraphQL Tools's ",(0,a.kt)("inlineCode",{parentName:"p"},"@graphql-tools/merge")," package and you need to update your project."),(0,a.kt)("h2",{id:"merging-type-definitions"},"Merging Type Definitions"),(0,a.kt)("p",null,"Instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeTypes"),", you need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeTypeDefs")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@graphql-tools/merge")," package. The API is almost same except ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaDefinition")," option."),(0,a.kt)("p",null,"We were using the following implementation to proxy ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeTypes")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeTypeDefs")," of GraphQL Toolkit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { mergeTypeDefs } from '@graphql-toolkit/schema-merging';\n\ntype Config = Parameters<typeof mergeTypeDefs>[1];\n\nexport const mergeTypes = (types: any[], options?: { schemaDefinition?: boolean, all?: boolean } & Partial<Config>) => {\n  const schemaDefinition = options && typeof options.schemaDefinition === 'boolean'\n    ? options.schemaDefinition\n    : true;\n\n  return mergeTypeDefs(types, {\n    useSchemaDefinition: schemaDefinition,\n    forceSchemaDefinition: schemaDefinition,\n    throwOnConflict: true,\n    commentDescriptions: true,\n    reverseDirectives: true,\n    ...options,\n  });\n};\n")),(0,a.kt)("p",null,"So if you want to have exact behavior, you can use the options above. Other than that, the API and behavior are almost same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { mergeTypes, mergeResolvers, fileLoader } from 'merge-graphql-schemas';\n")),(0,a.kt)("p",null,"should become"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';\nimport { loadFilesSync } from '@graphql-tools/load-files';\n")),(0,a.kt)("p",null,"So you can replace ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeTypes")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeTypeDefs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fileLoader")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"loadFilesSync"),"."))}c.isMDXComponent=!0}}]);