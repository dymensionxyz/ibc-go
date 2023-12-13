"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1610],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>w});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(i),u=n,w=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return i?a.createElement(w,o(o({ref:t},s),{},{components:i})):a.createElement(w,o({ref:t},s))}));function w(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},50500:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));const r={title:"IBC middleware",sidebar_label:"IBC middleware",sidebar_position:1,slug:"/ibc/middleware/overview"},o="IBC middleware",l={unversionedId:"ibc/middleware/overview",id:"version-v8.0.x/ibc/middleware/overview",title:"IBC middleware",description:"Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks",source:"@site/versioned_docs/version-v8.0.x/01-ibc/04-middleware/01-overview.md",sourceDirName:"01-ibc/04-middleware",slug:"/ibc/middleware/overview",permalink:"/v8/ibc/middleware/overview",draft:!1,tags:[],version:"v8.0.x",sidebarPosition:1,frontMatter:{title:"IBC middleware",sidebar_label:"IBC middleware",sidebar_position:1,slug:"/ibc/middleware/overview"},sidebar:"defaultSidebar",previous:{title:"Routing",permalink:"/v8/ibc/apps/routing"},next:{title:"Create a custom IBC middleware",permalink:"/v8/ibc/middleware/develop"}},d={},p=[{value:"Why middleware?",id:"why-middleware",level:2},{value:"Definitions",id:"definitions",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ibc-middleware"},"IBC middleware"),(0,n.kt)("admonition",{title:"Synopsis",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks")),(0,n.kt)("p",null,"This documentation serves as a guide for middleware developers who want to write their own middleware and for chain developers who want to use IBC middleware on their chains."),(0,n.kt)("p",null,"After going through the overview they can consult respectively:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v8/ibc/middleware/develop"},"documentation on developing custom middleware")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v8/ibc/middleware/integration"},"documentation on integrating middleware into a stack on a chain"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite readings"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v8/ibc/overview"},"IBC Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v8/ibc/integration"},"IBC Integration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v8/ibc/apps/apps"},"IBC Application Developer Guide")))),(0,n.kt)("h2",{id:"why-middleware"},"Why middleware?"),(0,n.kt)("p",null,"IBC applications are designed to be self-contained modules that implement their own application-specific logic through a set of interfaces with the core IBC handlers. These core IBC handlers, in turn, are designed to enforce the correctness properties of IBC (transport, authentication, ordering) while delegating all application-specific handling to the IBC application modules. ",(0,n.kt)("strong",{parentName:"p"},"However, there are cases where some functionality may be desired by many applications, yet not appropriate to place in core IBC.")),(0,n.kt)("p",null,"Middleware allows developers to define the extensions as separate modules that can wrap over the base application. This middleware can thus perform its own custom logic, and pass data into the application so that it may run its logic without being aware of the middleware's existence. This allows both the application and the middleware to implement its own isolated logic while still being able to run as part of a single packet flow."),(0,n.kt)("h2",{id:"definitions"},"Definitions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Middleware"),": A self-contained module that sits between core IBC and an underlying IBC application during packet execution. All messages between core IBC and underlying application must flow through middleware, which may perform its own custom logic."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Underlying Application"),": An underlying application is the application that is directly connected to the middleware in question. This underlying application may itself be middleware that is chained to a base application."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Base Application"),": A base application is an IBC application that does not contain any middleware. It may be nested by 0 or multiple middleware to form an application stack."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Application Stack (or stack)"),": A stack is the complete set of application logic (middleware(s) + base application) that gets connected to core IBC. A stack may be just a base application, or it may be a series of middlewares that nest a base application."),(0,n.kt)("p",null,"The diagram below gives an overview of a middleware stack consisting of two middleware (one stateless, the other stateful)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"middleware-stack.png",src:i(33248).Z,width:"1209",height:"1352"})),(0,n.kt)("p",null,"Keep in mind that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The order of the middleware matters")," (more on how to correctly define your stack in the code will follow in the ",(0,n.kt)("a",{parentName:"li",href:"/v8/ibc/middleware/integration"},"integration section"),")."),(0,n.kt)("li",{parentName:"ul"},"Depending on the type of message, it will either be passed on from the base application up the middleware stack to core IBC or down the stack in the reverse situation (handshake and packet callbacks)."),(0,n.kt)("li",{parentName:"ul"},"IBC middleware will wrap over an underlying IBC application and sits between core IBC and the application. It has complete control in modifying any message coming from IBC to the application, and any message coming from the application to core IBC. ",(0,n.kt)("strong",{parentName:"li"},"Middleware must be completely trusted by chain developers who wish to integrate them"),", as this gives them complete flexibility in modifying the application(s) they wrap.")))}m.isMDXComponent=!0},33248:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/middleware-stack-e1a1a53f5bdd38e895527b182ea68f7e.png"}}]);