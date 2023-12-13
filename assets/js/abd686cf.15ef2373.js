"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={title:"Handling Proposals",sidebar_label:"Handling Proposals",sidebar_position:7,slug:"/ibc/light-clients/proposals"},a="Handling proposals",l={unversionedId:"light-clients/developer-guide/proposals",id:"light-clients/developer-guide/proposals",title:"Handling Proposals",description:"It is possible to update the client with the state of the substitute client through a governance proposal. This type of governance proposal is typically used to recover an expired or frozen client, as it can recover the entire state and therefore all existing channels built on top of the client. CheckSubstituteAndUpdateState should be implemented to handle the proposal.",source:"@site/docs/03-light-clients/01-developer-guide/07-proposals.md",sourceDirName:"03-light-clients/01-developer-guide",slug:"/ibc/light-clients/proposals",permalink:"/main/ibc/light-clients/proposals",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Handling Proposals",sidebar_label:"Handling Proposals",sidebar_position:7,slug:"/ibc/light-clients/proposals"},sidebar:"defaultSidebar",previous:{title:"Existence/Non-Existence Proofs",permalink:"/main/ibc/light-clients/proofs"},next:{title:"Handling Genesis",permalink:"/main/ibc/light-clients/genesis"}},s={},p=[{value:"Implementing <code>CheckSubstituteAndUpdateState</code>",id:"implementing-checksubstituteandupdatestate",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"handling-proposals"},"Handling proposals"),(0,i.kt)("p",null,"It is possible to update the client with the state of the substitute client through a governance proposal. ",(0,i.kt)("a",{parentName:"p",href:"https://ibc.cosmos.network/main/ibc/proposals.html"},"This type of governance proposal")," is typically used to recover an expired or frozen client, as it can recover the entire state and therefore all existing channels built on top of the client. ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckSubstituteAndUpdateState")," should be implemented to handle the proposal."),(0,i.kt)("h2",{id:"implementing-checksubstituteandupdatestate"},"Implementing ",(0,i.kt)("inlineCode",{parentName:"h2"},"CheckSubstituteAndUpdateState")),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go"},(0,i.kt)("inlineCode",{parentName:"a"},"ClientState"),"interface"),", we find:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// CheckSubstituteAndUpdateState must verify that the provided substitute may be used to update the subject client.\n// The light client must set the updated client and consensus states within the clientStore for the subject client.\nCheckSubstituteAndUpdateState(\n  ctx sdk.Context, \n  cdc codec.BinaryCodec, \n  subjectClientStore, \n  substituteClientStore sdk.KVStore, \n  substituteClient ClientState,\n) error\n")),(0,i.kt)("p",null,"Prior to updating, this function must verify that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the substitute client is the same type as the subject client. For a reference implementation, please see the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L32"},"Tendermint light client"),"."),(0,i.kt)("li",{parentName:"ul"},"the provided substitute may be used to update the subject client. This may mean that certain parameters must remain unaltered. For example, a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L84"},"valid substitute Tendermint light client")," must NOT change the chain ID, trust level, max clock drift, unbonding period, proof specs or upgrade path. Please note that ",(0,i.kt)("inlineCode",{parentName:"li"},"AllowUpdateAfterMisbehaviour")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AllowUpdateAfterExpiry")," have been deprecated (see ADR 026 for more information).")),(0,i.kt)("p",null,"After these checks are performed, the function must ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L77"},"set the updated client and consensus states")," within the client store for the subject client."),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L27"},"Tendermint light client implementation")," for reference."))}d.isMDXComponent=!0}}]);