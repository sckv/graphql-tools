(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[2113],{5318:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return u}});var a=t(7378);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(k,o(o({ref:r},d),{},{components:t})):a.createElement(k,o({ref:r},d))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2102:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=t(9603),n=t(120),i=(t(7378),t(5318)),o=["components"],l={},s={unversionedId:"api/interfaces/loaders_prisma_src.prismaloaderoptions",id:"api/interfaces/loaders_prisma_src.prismaloaderoptions",isDocsHomePage:!1,title:"Interface: PrismaLoaderOptions",description:"loaders/prisma/src.PrismaLoaderOptions",source:"@site/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/loaders_prisma_src.prismaloaderoptions",permalink:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Interface: ParsedMergeArgsExpr",permalink:"/docs/api/interfaces/stitching_directives_src.parsedmergeargsexpr"},next:{title:"Interface: PropertyTree",permalink:"/docs/api/interfaces/stitching_directives_src.propertytree"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"allowLegacySDLEmptyFields",id:"allowlegacysdlemptyfields",children:[]},{value:"allowLegacySDLImplementsInterfaces",id:"allowlegacysdlimplementsinterfaces",children:[]},{value:"assumeValid",id:"assumevalid",children:[]},{value:"assumeValidSDL",id:"assumevalidsdl",children:[]},{value:"commentDescriptions",id:"commentdescriptions",children:[]},{value:"customFetch",id:"customfetch",children:[]},{value:"cwd",id:"cwd",children:[]},{value:"descriptions",id:"descriptions",children:[]},{value:"directiveIsRepeatable",id:"directiveisrepeatable",children:[]},{value:"envVars",id:"envvars",children:[]},{value:"eventSourceOptions",id:"eventsourceoptions",children:[]},{value:"experimentalFragmentVariables",id:"experimentalfragmentvariables",children:[]},{value:"graceful",id:"graceful",children:[]},{value:"handleAsSDL",id:"handleassdl",children:[]},{value:"headers",id:"headers",children:[]},{value:"inputValueDeprecation",id:"inputvaluedeprecation",children:[]},{value:"method",id:"method",children:[]},{value:"multipart",id:"multipart",children:[]},{value:"noLocation",id:"nolocation",children:[]},{value:"schemaDescription",id:"schemadescription",children:[]},{value:"specifiedByUrl",id:"specifiedbyurl",children:[]},{value:"subscriptionsEndpoint",id:"subscriptionsendpoint",children:[]},{value:"useGETForQueries",id:"usegetforqueries",children:[]},{value:"useSSEForSubscription",id:"usesseforsubscription",children:[]},{value:"useWebSocketLegacyProtocol",id:"usewebsocketlegacyprotocol",children:[]},{value:"webSocketImpl",id:"websocketimpl",children:[]}]}],d={toc:p};function c(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/loaders_prisma_src"},"loaders/prisma/src"),".PrismaLoaderOptions"),(0,i.kt)("p",null,"additional options for loading from a ",(0,i.kt)("inlineCode",{parentName:"p"},"prisma.yml")," file"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"PrismaLoaderOptions")))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#allowlegacysdlemptyfields"},"allowLegacySDLEmptyFields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#allowlegacysdlimplementsinterfaces"},"allowLegacySDLImplementsInterfaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#assumevalid"},"assumeValid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#assumevalidsdl"},"assumeValidSDL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#commentdescriptions"},"commentDescriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#customfetch"},"customFetch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#cwd"},"cwd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#descriptions"},"descriptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#directiveisrepeatable"},"directiveIsRepeatable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#envvars"},"envVars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#eventsourceoptions"},"eventSourceOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#experimentalfragmentvariables"},"experimentalFragmentVariables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#graceful"},"graceful")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#handleassdl"},"handleAsSDL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#headers"},"headers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#inputvaluedeprecation"},"inputValueDeprecation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#method"},"method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#multipart"},"multipart")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#nolocation"},"noLocation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#schemadescription"},"schemaDescription")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#specifiedbyurl"},"specifiedByUrl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#subscriptionsendpoint"},"subscriptionsEndpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#usegetforqueries"},"useGETForQueries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#usesseforsubscription"},"useSSEForSubscription")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#usewebsocketlegacyprotocol"},"useWebSocketLegacyProtocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/loaders_prisma_src.prismaloaderoptions#websocketimpl"},"webSocketImpl"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"allowlegacysdlemptyfields"},"allowLegacySDLEmptyFields"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"allowLegacySDLEmptyFields"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#allowlegacysdlemptyfields"},"allowLegacySDLEmptyFields")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L78"},"packages/utils/src/Interfaces.ts:78")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"allowlegacysdlimplementsinterfaces"},"allowLegacySDLImplementsInterfaces"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"allowLegacySDLImplementsInterfaces"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#allowlegacysdlimplementsinterfaces"},"allowLegacySDLImplementsInterfaces")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L79"},"packages/utils/src/Interfaces.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"assumevalid"},"assumeValid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"assumeValid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"When building a schema from a GraphQL service's introspection result, it\nmight be safe to assume the schema is valid. Set to true to assume the\nproduced schema is valid."),(0,i.kt)("p",null,"Default: false"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#assumevalid"},"assumeValid")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"node_modules/graphql/type/schema.d.ts:122"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"assumevalidsdl"},"assumeValidSDL"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"assumeValidSDL"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Set to true to assume the SDL is valid."),(0,i.kt)("p",null,"Default: false"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#assumevalidsdl"},"assumeValidSDL")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"node_modules/graphql/utilities/buildASTSchema.d.ts:22"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"commentdescriptions"},"commentDescriptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"commentDescriptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),' in order to convert all GraphQL comments (marked with # sign) to descriptions (""")\nGraphQL has built-in support for transforming descriptions to comments (with ',(0,i.kt)("inlineCode",{parentName:"p"},"print"),"), but not while\nparsing. Turning the flag on will support the other way as well (",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),")"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#commentdescriptions"},"commentDescriptions")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L86"},"packages/utils/src/Interfaces.ts:86")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"customfetch"},"customFetch"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"customFetch"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/url-loader#fetchfn"},"FetchFn")),(0,i.kt)("p",null,"A custom ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," implementation to use when querying the original schema.\nDefaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"cross-fetch")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#customfetch"},"customFetch")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L91"},"packages/loaders/url/src/index.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cwd"},"cwd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cwd"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#cwd"},"cwd")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/prisma/src/index.ts#L16"},"packages/loaders/prisma/src/index.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"descriptions"},"descriptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"descriptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#descriptions"},"descriptions")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"node_modules/graphql/utilities/getIntrospectionQuery.d.ts:8"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directiveisrepeatable"},"directiveIsRepeatable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"directiveIsRepeatable"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#directiveisrepeatable"},"directiveIsRepeatable")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,"node_modules/graphql/utilities/getIntrospectionQuery.d.ts:16"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"envvars"},"envVars"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"envVars"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"index-signature"},"Index signature"),(0,i.kt)("p",null,"\u25aa ","[key: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/prisma/src/index.ts#L14"},"packages/loaders/prisma/src/index.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eventsourceoptions"},"eventSourceOptions"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"eventSourceOptions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"FetchEventSourceInit")),(0,i.kt)("p",null,"Additional options to pass to the constructor of the underlying EventSource instance."),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#eventsourceoptions"},"eventSourceOptions")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L120"},"packages/loaders/url/src/index.ts:120")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"experimentalfragmentvariables"},"experimentalFragmentVariables"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"experimentalFragmentVariables"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#experimentalfragmentvariables"},"experimentalFragmentVariables")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L80"},"packages/utils/src/Interfaces.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"graceful"},"graceful"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"graceful"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/prisma/src/index.ts#L15"},"packages/loaders/prisma/src/index.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"handleassdl"},"handleAsSDL"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"handleAsSDL"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Handle URL as schema SDL"),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#handleassdl"},"handleAsSDL")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L124"},"packages/loaders/url/src/index.ts:124")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"headers"},"headers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"headers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Headers")),(0,i.kt)("p",null,"Additional headers to include when querying the original schema"),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#headers"},"headers")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L86"},"packages/loaders/url/src/index.ts:86")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputvaluedeprecation"},"inputValueDeprecation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"inputValueDeprecation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#inputvaluedeprecation"},"inputValueDeprecation")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,"node_modules/graphql/utilities/getIntrospectionQuery.d.ts:24"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"method"},"method"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"method"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"POST"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"GET"')),(0,i.kt)("p",null,"HTTP method to use when querying the original schema."),(0,i.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#method"},"method")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L95"},"packages/loaders/url/src/index.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"multipart"},"multipart"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"multipart"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Use multipart for POST requests"),(0,i.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#multipart"},"multipart")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L108"},"packages/loaders/url/src/index.ts:108")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nolocation"},"noLocation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"noLocation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#nolocation"},"noLocation")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/utils/src/Interfaces.ts#L77"},"packages/utils/src/Interfaces.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"schemadescription"},"schemaDescription"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"schemaDescription"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#schemadescription"},"schemaDescription")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,"node_modules/graphql/utilities/getIntrospectionQuery.d.ts:20"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"specifiedbyurl"},"specifiedByUrl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"specifiedByUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#specifiedbyurl"},"specifiedByUrl")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,"node_modules/graphql/utilities/getIntrospectionQuery.d.ts:12"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscriptionsendpoint"},"subscriptionsEndpoint"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"subscriptionsEndpoint"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Subscriptions endpoint; defaults to the endpoint given as pointer"),(0,i.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#subscriptionsendpoint"},"subscriptionsEndpoint")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L128"},"packages/loaders/url/src/index.ts:128")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usegetforqueries"},"useGETForQueries"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"useGETForQueries"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether to use the GET HTTP method for queries when querying the original schema"),(0,i.kt)("h4",{id:"inherited-from-19"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#usegetforqueries"},"useGETForQueries")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L104"},"packages/loaders/url/src/index.ts:104")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usesseforsubscription"},"useSSEForSubscription"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"useSSEForSubscription"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Use SSE for subscription instead of WebSocket"),(0,i.kt)("h4",{id:"inherited-from-20"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#usesseforsubscription"},"useSSEForSubscription")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L112"},"packages/loaders/url/src/index.ts:112")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usewebsocketlegacyprotocol"},"useWebSocketLegacyProtocol"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"useWebSocketLegacyProtocol"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Use legacy web socket protocol ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-ws")," instead of the more current standard ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-transport-ws")),(0,i.kt)("h4",{id:"inherited-from-21"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#usewebsocketlegacyprotocol"},"useWebSocketLegacyProtocol")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L116"},"packages/loaders/url/src/index.ts:116")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"websocketimpl"},"webSocketImpl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"webSocketImpl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," typeof ",(0,i.kt)("inlineCode",{parentName:"p"},"WebSocket")),(0,i.kt)("p",null,"Custom WebSocket implementation used by the loaded schema if subscriptions\nare enabled"),(0,i.kt)("h4",{id:"inherited-from-22"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"loaders_url_src.loadfromurloptions"},"LoadFromUrlOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/loaders_url_src.loadfromurloptions#websocketimpl"},"webSocketImpl")),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/url/src/index.ts#L100"},"packages/loaders/url/src/index.ts:100")))}c.isMDXComponent=!0}}]);