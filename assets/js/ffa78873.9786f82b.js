(self.webpackChunk_graphql_tools_website=self.webpackChunk_graphql_tools_website||[]).push([[8608],{5318:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7378);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4598:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=t(9603),l=t(120),o=(t(7378),t(5318)),s=["components"],a={id:"schema-merging",title:"Schema merging",sidebar_label:"Schema merging"},i={unversionedId:"schema-merging",id:"schema-merging",isDocsHomePage:!1,title:"Schema merging",description:"Schema merging (@graphql-tools/merge) consolidates the type definitions and resolvers from many local schema instances into a single executable schema. This is useful for building a single local service schema from many individually-managed parts. This should not be confused with schema stitching, which builds a combined proxy schema atop numerous subservice APIs.",source:"@site/docs/schema-merging.md",sourceDirName:".",slug:"/schema-merging",permalink:"/docs/schema-merging",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/schema-merging.md",version:"current",sidebar_label:"Schema merging",frontMatter:{id:"schema-merging",title:"Schema merging",sidebar_label:"Schema merging"},sidebar:"someSidebar",previous:{title:"Schema wrapping",permalink:"/docs/schema-wrapping"},next:{title:"Combining schemas",permalink:"/docs/stitch-combining-schemas"}},p=[{value:"Getting started",id:"getting-started",children:[]},{value:"Merging type definitions",id:"merging-type-definitions",children:[{value:"Manual imports",id:"manual-imports",children:[]},{value:"File loading",id:"file-loading",children:[]},{value:"Print merged typeDefs",id:"print-merged-typedefs",children:[]},{value:"Nested Types",id:"nested-types",children:[]},{value:"Directives",id:"directives",children:[]}]},{value:"Merging resolvers",id:"merging-resolvers",children:[]}],u={toc:p};function c(e){var n=e.components,t=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Schema merging (",(0,o.kt)("inlineCode",{parentName:"p"},"@graphql-tools/merge"),") consolidates the type definitions and resolvers from many local schema instances into a single executable schema. This is useful for building a single local service schema from many individually-managed parts. This should not be confused with ",(0,o.kt)("a",{parentName:"p",href:"/docs/stitch-combining-schemas"},"schema stitching"),", which builds a combined proxy schema atop numerous subservice APIs."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeSchemas")," to merge ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," objects together with extra ",(0,o.kt)("inlineCode",{parentName:"p"},"typeDefs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvers"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { mergeSchemas } = require('@graphql-tools/merge');\n\nconst mergedSchema = mergeSchemas({\n  schemas: [\n    BarSchema,\n    BazSchema,\n  ],\n  typeDefs: `\n    type ExtraType {\n      foo: String\n    }\n  `,\n  resolvers: {\n    ExtraType: {\n      foo: () => 'FOO',\n    }\n  }\n});\n")),(0,o.kt)("p",null,"There is also ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeSchemasAsync")," as a faster asynchronous alternative."),(0,o.kt)("h2",{id:"merging-type-definitions"},"Merging type definitions"),(0,o.kt)("p",null,"Originally implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-modules"},"graphql-modules"),". This tool merges GraphQL type definitions and schema. It aims to merge all possible types, interfaces, enums and unions, without conflicts."),(0,o.kt)("p",null,"Let's say this is your current schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Client {\n  id: ID!\n  name: String\n  age: Int\n  products: [Product]\n}\n\ntype Product {\n  id: ID!\n  description: String\n  price: Int\n}\n\ntype Query {\n  clients: [Client]\n  client(id: ID!): Client\n  products: [Product]\n  product(id: ID!): Product\n}\n\ntype Mutation {\n  addClient(name: String!, age: Int!): Client\n}\n")),(0,o.kt)("p",null,"Knowing that your app will grow, you want to move your definitions to separate files that should look like the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/types/clientType.js\nmodule.exports = `\n  type Client {\n    id: ID!\n    name: String\n    age: Int\n    products: [Product]\n  }\n\n  type Query {\n    clients: [Client]\n    client(id: ID!): Client\n  }\n\n  type Mutation {\n    addClient(name: String!, age: Int!): Client\n  }\n`;\n\n// ./graphql/types/productType.js\nmodule.exports =  `\n  type Product {\n    id: ID!\n    description: String\n    price: Int\n    client: Client\n  }\n\n  type Query {\n    products: [Product]\n    product(id: ID!): Product\n  }\n`;\n")),(0,o.kt)("p",null,"There are two ways you can use this package:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"manually import each type"),(0,o.kt)("li",{parentName:"ul"},"import everything from a specified folder")),(0,o.kt)("h3",{id:"manual-imports"},"Manual imports"),(0,o.kt)("p",null,"If you decide to have manual control of each file that gets merged, all you need is the ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeTypeDefs(types)")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"@graphql-tools/merge")," package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { mergeTypeDefs } = require('@graphql-tools/merge');\nconst clientType = require('./clientType');\nconst productType = require('./productType');\n\nconst types = [\n  clientType,\n  productType,\n];\n\nmodule.exports = mergeTypeDefs(types);\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-tools.com/docs/api/modules/merge/#mergetypedefs"},(0,o.kt)("inlineCode",{parentName:"a"},"mergeTypeDefs"))," for more details."),(0,o.kt)("h3",{id:"file-loading"},"File loading"),(0,o.kt)("p",null,"In this way we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFilesSync")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"@graphql-tools/load-files")," to import all files from the specified folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/typeDefs.js\nconst path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, './types'));\n\nmodule.exports = mergeTypeDefs(typesArray);\n")),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFilesSync")," function you can also implement your type definitions using ",(0,o.kt)("inlineCode",{parentName:"p"},".graphql")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".gql")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".graphqls")," files."),(0,o.kt)("p",null,"You can also load files with specified extensions by setting the extensions option.\nOnly these values are supported now. ",(0,o.kt)("inlineCode",{parentName:"p"},"'ts', 'js', 'gql', 'graphql', 'graphqls'")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/typeDefs.js\nconst path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, './types'), { extensions: ['graphql'] });\n\nmodule.exports = mergeTypeDefs(typesArray);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFilesSync")," function will not ignore files named ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts"),", but you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreIndex")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to enable this behavior. This allows you to create your index file inside the actual types folder if desired.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# ./graphql/types/clientType.graphql\ntype Client {\n  id: ID!\n  name: String\n  age: Int\n  products: [Product]\n}\n\ntype Query {\n  clients: [Client]\n  client(id: ID!): Client\n}\n\ntype Mutation {\n  addClient(name: String!, age: Int!): Client\n}\n\n# ./graphql/types/productType.graphql\ntype Product {\n  id: ID!\n  description: String\n  price: Int\n  client: Client\n}\n\ntype Query {\n  products: [Product]\n  product(id: ID!): Product\n}\n")),(0,o.kt)("p",null,"You can also load files in nested folders by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"recursive")," option."),(0,o.kt)("p",null,"Given the file structure below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-- graphql\n|   +-- types\n|   |   +-- subGroupA\n|   |   |   +-- typeA1.graphql\n|   |   |   +-- typeA2.graphql\n|   |   +-- subGroupB\n|   |   |   +-- typeB1.graphql\n|   |   |   +-- typeB2.graphql\n|   |   +-- index.js\n")),(0,o.kt)("p",null,"Here's how your ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," file could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, '.'), { recursive: true })\n\nmodule.exports = mergeTypeDefs(typesArray)\n")),(0,o.kt)("p",null,"You can also load files in different folders by passing a glob pattern in ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFilesSync"),"."),(0,o.kt)("p",null,"Given the file structure below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-- graphql\n|   +-- subGroupA\n|   |   +-- typeA1.graphql\n|   |   +-- typeA2.graphql\n|   +-- subGroupB\n|   |   +-- typeB1.graphql\n|   |   +-- typeB2.graphql\n|   +-- index.js\n")),(0,o.kt)("p",null,"Here's how your ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," file could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\n\nconst typesArray = loadFilesSync(path.join(__dirname, 'graphql/**/*.graphql'))\n\nmodule.exports = mergeTypeDefs(typesArray)\n")),(0,o.kt)("h3",{id:"print-merged-typedefs"},"Print merged typeDefs"),(0,o.kt)("p",null,"Since the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeTypeDefs")," is a GraphQL ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentNode"),", you may print the merged result as a string to be passed around to other systems. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { loadFilesSync } = require('@graphql-tools/load-files');\nconst { mergeTypeDefs } = require('@graphql-tools/merge');\nconst { print } = require('graphql');\nconst fs = require('fs');\n\nconst loadedFiles = loadFilesSync(`${__dirname}/schema/**/*.graphql`);\nconst typeDefs = mergeTypeDefs(loadedFiles);\nconst printedTypeDefs = print(typeDefs);\nfs.writeFileSync('joined.graphql', printedTypeDefs);\n")),(0,o.kt)("h3",{id:"nested-types"},"Nested Types"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeTypeDefs")," function also allows merging multiple schemas. In situations where you would like to have nested subfolders, you can merge your types by subfolder, and then everything into one single schema. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-- graphql\n|   +-- types\n|   |   +-- subGroupA\n|   |   |   +-- index.js <<< Merges all types in subGroupA\n|   |   |   +-- typeA1.graphql\n|   |   |   +-- typeA2.graphql\n|   |   +-- subGroupB\n|   |   |   +-- index.js <<< Merges all types in subGroupB\n|   |   |   +-- typeB1.graphql\n|   |   |   +-- typeB2.graphql\n|   |   +-- index.js <<< Merges exports from subGroupA and subGroupB\n")),(0,o.kt)("h3",{id:"directives"},"Directives"),(0,o.kt)("p",null,"Merged directives will be stacked on top of each other, in the order of declaration. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Query {\n  client: Client @foo\n}\ntype Query {\n  client: Client @bar\n}\n")),(0,o.kt)("p",null,"Becomes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type Query {\n  client: Client @foo @bar\n}\n")),(0,o.kt)("h2",{id:"merging-resolvers"},"Merging resolvers"),(0,o.kt)("p",null,"Resolvers are implemented as simple JS objects and then merged using deep-merge. Resolver implementations can be separated across multiple objects and then merged into a single ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvers")," object. Following the previous examples, for the types we implemented our resolvers should look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers/clientResolver.js\nmodule.exports = {\n  Query: {\n    clients: () => {},\n    client: () => {},\n  },\n  Mutation: {\n    addClient: () => {},\n  },\n  Client: {\n    products: () => {},\n  },\n}\n\n// ./graphql/resolvers/productResolver.js\nmodule.exports = {\n  Query: {\n    products: () => {},\n    product: () => {},\n  },\n  Product: {\n    client: () => {},\n  },\n}\n")),(0,o.kt)("p",null,"Just like your type definitions, you can choose to import files manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers/index.js\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst clientResolver = require('./clientResolver');\nconst productResolver = require('./productResolver');\n\nconst resolvers = [\n  clientResolver,\n  productResolver,\n];\n\nmodule.exports = mergeResolvers(resolvers);\n")),(0,o.kt)("p",null,"Or automatically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers.js\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));\n\nmodule.exports = mergeResolvers(resolversArray);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Beware that ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeResolvers")," is simply merging plain JavaScript objects together.\nThis means that you should be careful with Queries, Mutations or Subscriptions with naming conflicts.")),(0,o.kt)("p",null,"You can also load files with specified extensions by setting the extensions option.\nOnly these values are supported now: ",(0,o.kt)("inlineCode",{parentName:"p"},"ts, js, gql, graphql, graphqls"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers.js\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, './resolvers'), { extensions: ['js'] });\n\nmodule.exports = mergeResolvers(resolversArray);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional: Automatic with Resolver Naming Convention")),(0,o.kt)("p",null,"If you would like to use the automated ",(0,o.kt)("inlineCode",{parentName:"p"},"fileLoader")," approach ",(0,o.kt)("em",{parentName:"p"},"but")," would like complete\nfreedom over the structure of your resolver files, then simply use a resolver file naming\nconvention like, ",(0,o.kt)("inlineCode",{parentName:"p"},"[file].resolvers.js/ts"),"."),(0,o.kt)("p",null,"Then setup your ",(0,o.kt)("inlineCode",{parentName:"p"},"fileLoader")," like so, and you're in business:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ./graphql/resolvers/index.js/ts\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, \"./**/*.resolvers.*\"));\nmodule.exports = mergeResolvers(resolversArray);\n")),(0,o.kt)("p",null,"With this approach, you're free to structure resolver files as you see fit. Of course,\nunique naming of Queries, Mutations and Subscriptions still applies!"),(0,o.kt)("p",null,"Now you can structure by ",(0,o.kt)("strong",{parentName:"p"},"function"),"..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-- graphql\n|   +-- resolvers\n|   |   +-- author.resolvers.js/ts\n|   |   +-- book.resolvers.js/ts\n|   |   +-- index.ts  <<< Merges all `*.resolvers.*` files\n")),(0,o.kt)("p",null,"Or by ",(0,o.kt)("strong",{parentName:"p"},"type"),"..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-- graphql\n|   +-- entity\n|   |   +-- author\n|   |   |   +-- author.resolvers.js/ts\n|   |   |   +-- ...\n|   |   +-- book\n|   |   |   +-- book.resolvers.js/ts\n|   |   |   +-- ...\n|   |   +-- index.ts <<< Merges all `*.resolvers.*` files\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Custom extraction from exports")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFiles")," checks export names ",(0,o.kt)("inlineCode",{parentName:"p"},"typeDefs"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),". But you can change the way it extracts the content from the exported values."),(0,o.kt)("p",null,"Let's say you have a factory function inside your resolvers like below;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = customQueryTypeName = ({\n  [customQueryTypeName]: {\n    foo: () => 'FOO',\n  }\n})\n")),(0,o.kt)("p",null,"And you can define custom ",(0,o.kt)("inlineCode",{parentName:"p"},"extractExports")," like below;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolvers = loadFilesSync(join(__dirname, './resolvers/**/*.js'), {\n  extractExports: fileExport => {\n    if (typeof fileExport === 'function') {\n      return fileExport('query_root');\n    }\n    return fileExport;\n  }\n})\n")))}c.isMDXComponent=!0}}]);