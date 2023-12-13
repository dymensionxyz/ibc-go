"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1234],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(o),d=i,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||n;return o?a.createElement(m,r(r({ref:t},p),{},{components:o})):a.createElement(m,r({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,r=new Array(n);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<n;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62854:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(87462),i=(o(67294),o(3905));const n={title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:9,slug:"/roadmap/roadmap"},r="Roadmap ibc-go",s={unversionedId:"ibc/roadmap",id:"version-v7.3.x/ibc/roadmap",title:"Roadmap",description:"Lastest update: December 21st, 2022",source:"@site/versioned_docs/version-v7.3.x/01-ibc/09-roadmap.md",sourceDirName:"01-ibc",slug:"/roadmap/roadmap",permalink:"/v7/roadmap/roadmap",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:9,frontMatter:{title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:9,slug:"/roadmap/roadmap"},sidebar:"defaultSidebar",previous:{title:"Protobuf Documentation",permalink:"/v7/ibc/proto-docs"},next:{title:"Troubleshooting",permalink:"/v7/ibc/troubleshooting"}},l={},c=[{value:"v7.0.0",id:"v700",level:2},{value:"02-client refactor",id:"02-client-refactor",level:3},{value:"Upgrade Cosmos SDK v0.47",id:"upgrade-cosmos-sdk-v047",level:3},{value:"Add <code>authz</code> support to 20-transfer",id:"add-authz-support-to-20-transfer",level:3},{value:"v7.1.0",id:"v710",level:2},{value:"Localhost connection",id:"localhost-connection",level:3},{value:"Support for Wasm light clients",id:"support-for-wasm-light-clients",level:3},{value:"v8.0.0",id:"v800",level:2},{value:"Channel upgradability",id:"channel-upgradability",level:3},{value:"Path unwinding",id:"path-unwinding",level:3}],p={toc:c},h="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"roadmap-ibc-go"},"Roadmap ibc-go"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Lastest update: December 21st, 2022")),(0,i.kt)("p",null,"This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go by the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications."),(0,i.kt)("p",null,"This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans. For the latest expected release timelines, please check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline"},"here"),"."),(0,i.kt)("h2",{id:"v700"},"v7.0.0"),(0,i.kt)("h3",{id:"02-client-refactor"},"02-client refactor"),(0,i.kt)("p",null,"This refactor will make the development of light clients easier. The ibc-go implementation will finally align with the spec and light clients will be required to set their own client and consensus states. This will allow more flexibility for light clients to manage their own internal storage and do batch updates. See ",(0,i.kt)("a",{parentName:"p",href:"/architecture/adr-006-02-client-refactor"},"ADR 006")," for more information."),(0,i.kt)("p",null,"Follow the progress with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/milestone/25"},"beta")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/milestone/27"},"RC")," milestones or in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/cosmos/projects/7/views/14"},"project board"),"."),(0,i.kt)("h3",{id:"upgrade-cosmos-sdk-v047"},"Upgrade Cosmos SDK v0.47"),(0,i.kt)("p",null,"Follow the progress with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/milestone/36"},"milestone"),"."),(0,i.kt)("h3",{id:"add-authz-support-to-20-transfer"},"Add ",(0,i.kt)("inlineCode",{parentName:"h3"},"authz")," support to 20-transfer"),(0,i.kt)("p",null,"Authz goes cross chain: users can grant permission for their tokens to be transferred to another chain on their behalf. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/issues/2431"},"this issue")," for more details."),(0,i.kt)("h2",{id:"v710"},"v7.1.0"),(0,i.kt)("p",null,"Because it is so important to have an ibc-go release compatible with the latest Cosmos SDK release, a couple of features will take a little longer and be released in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/milestone/37"},"v7.1.0"),"."),(0,i.kt)("h3",{id:"localhost-connection"},"Localhost connection"),(0,i.kt)("p",null,"This feature will add support for applications on a chain to communicate with applications on the same chain using the existing standard interface to communicate with applications on remote chains. This is a powerful UX improvement, particularly for those users interested in interacting with multiple smart contracts on a single chain through one interface."),(0,i.kt)("p",null,"For more details, see the design proposal and discussion ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/discussions/2191"},"here"),"."),(0,i.kt)("p",null,"A special shout out to Strangelove for their substantial contribution on this feature."),(0,i.kt)("h3",{id:"support-for-wasm-light-clients"},"Support for Wasm light clients"),(0,i.kt)("p",null,"We will add support for Wasm light clients. The first Wasm client developed with ibc-go/v7 02-client refactor and stored as Wasm bytecode will be the GRANDPA light client used for Cosmos x Substrate IBC connections. This feature will be used also for a NEAR light client in the future."),(0,i.kt)("p",null,"This feature was developed by Composable and Strangelove but will be upstreamed into ibc-go."),(0,i.kt)("h2",{id:"v800"},"v8.0.0"),(0,i.kt)("h3",{id:"channel-upgradability"},"Channel upgradability"),(0,i.kt)("p",null,"Channel upgradability will allow chains to renegotiate an existing channel to take advantage of new features without having to create a new channel, thus preserving all existing packet state processed on the channel."),(0,i.kt)("p",null,"Follow the progress with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/milestone/29"},"alpha milestone")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/cosmos/projects/7/views/17"},"project board"),"."),(0,i.kt)("h3",{id:"path-unwinding"},"Path unwinding"),(0,i.kt)("p",null,"This feature will allow tokens with non-native denoms to be sent back automatically to their native chains before being sent to a final destination chain. This will allow tokens to reach a final destination with the least amount possible of hops from their native chain."),(0,i.kt)("p",null,"For more details, see this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/discussions/824"},"discussion"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This roadmap is also available as a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/cosmos/projects/7/views/25"},"project board"),"."),(0,i.kt)("p",null,"For the latest expected release timelines, please check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/wiki/Release-timeline"},"here"),"."),(0,i.kt)("p",null,"For the latest information on the progress of the work or the decisions made that might influence the roadmap, please follow our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/wiki/Engineering-updates"},"engineering updates"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": release version numbers may be subject to change."))}u.isMDXComponent=!0}}]);