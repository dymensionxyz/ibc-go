"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"IBC Client Developer Guide to Upgrades",sidebar_label:"IBC Client Developer Guide to Upgrades",sidebar_position:2,slug:"/ibc/upgrades/developer-guide"},o="IBC Client Developer Guide to Upgrades",s={unversionedId:"ibc/upgrades/developer-guide",id:"version-v4.5.x/ibc/upgrades/developer-guide",title:"IBC Client Developer Guide to Upgrades",description:"Learn how to implement upgrade functionality for your custom IBC client.",source:"@site/versioned_docs/version-v4.5.x/01-ibc/05-upgrades/02-developer-guide.md",sourceDirName:"01-ibc/05-upgrades",slug:"/ibc/upgrades/developer-guide",permalink:"/v4/ibc/upgrades/developer-guide",draft:!1,tags:[],version:"v4.5.x",sidebarPosition:2,frontMatter:{title:"IBC Client Developer Guide to Upgrades",sidebar_label:"IBC Client Developer Guide to Upgrades",sidebar_position:2,slug:"/ibc/upgrades/developer-guide"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ibc-client-developer-guide-to-upgrades"},"IBC Client Developer Guide to Upgrades"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Learn how to implement upgrade functionality for your custom IBC client. ")),(0,a.kt)("p",null,"As mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/v4/ibc/upgrades/intro"},"README"),", it is vital that high-value IBC clients can upgrade along with their underlying chains to avoid disruption to the IBC ecosystem. Thus, IBC client developers will want to implement upgrade functionality to enable clients to maintain connections and channels even across chain upgrades."),(0,a.kt)("p",null,"The IBC protocol allows client implementations to provide a path to upgrading clients given the upgraded client state, upgraded consensus state and proofs for each."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Upgrade functions\n// NOTE: proof heights are not included as upgrade to a new revision is expected to pass only on the last\n// height committed by the current revision. Clients are responsible for ensuring that the planned last\n// height of the current revision is somehow encoded in the proof verification process.\n// This is to ensure that no premature upgrades occur, since upgrade plans committed to by the counterparty\n// may be cancelled or modified before the last planned height.\nVerifyUpgradeAndUpdateState(\n    ctx sdk.Context,\n    cdc codec.BinaryCodec,\n    store sdk.KVStore,\n    newClient ClientState,\n    newConsState ConsensusState,\n    proofUpgradeClient,\n    proofUpgradeConsState []byte,\n) (upgradedClient ClientState, upgradedConsensus ConsensusState, err error)\n")),(0,a.kt)("p",null,"Note that the clients should have prior knowledge of the merkle path that the upgraded client and upgraded consensus states will use. The height at which the upgrade has occurred should also be encoded in the proof. The Tendermint client implementation accomplishes this by including an ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradePath")," in the ClientState itself, which is used along with the upgrade height to construct the merkle path under which the client state and consensus state are committed."),(0,a.kt)("p",null,"Developers must ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradeClientMsg")," does not pass until the last height of the old chain has been committed, and after the chain upgrades, the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradeClientMsg")," should pass once and only once on all counterparty clients."),(0,a.kt)("p",null,"Developers must ensure that the new client adopts all of the new Client parameters that must be uniform across every valid light client of a chain (chain-chosen parameters), while maintaining the Client parameters that are customizable by each individual client (client-chosen parameters) from the previous version of the client."),(0,a.kt)("p",null,"Upgrades must adhere to the IBC Security Model. IBC does not rely on the assumption of honest relayers for correctness. Thus users should not have to rely on relayers to maintain client correctness and security (though honest relayers must exist to maintain relayer liveness). While relayers may choose any set of client parameters while creating a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState"),", this still holds under the security model since users can always choose a relayer-created client that suits their security and correctness needs or create a Client with their desired parameters if no such client exists."),(0,a.kt)("p",null,"However, when upgrading an existing client, one must keep in mind that there are already many users who depend on this client's particular parameters. We cannot give the upgrading relayer free choice over these parameters once they have already been chosen. This would violate the security model since users who rely on the client would have to rely on the upgrading relayer to maintain the same level of security. Thus, developers must make sure that their upgrade mechanism allows clients to upgrade the chain-specified parameters whenever a chain upgrade changes these parameters (examples in the Tendermint client include ",(0,a.kt)("inlineCode",{parentName:"p"},"UnbondingPeriod"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustingPeriod"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ChainID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradePath"),", etc.), while ensuring that the relayer submitting the ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradeClientMsg")," cannot alter the client-chosen parameters that the users are relying upon (examples in Tendermint client include ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustLevel"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MaxClockDrift"),", etc)."),(0,a.kt)("p",null,"Developers should maintain the distinction between Client parameters that are uniform across every valid light client of a chain (chain-chosen parameters), and Client parameters that are customizable by each individual client (client-chosen parameters); since this distinction is necessary to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZeroCustomFields")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Utility function that zeroes out any client customizable fields in client state\n// Ledger enforced fields are maintained while all custom fields are zero values\n// Used to verify upgrades\nZeroCustomFields() ClientState\n")),(0,a.kt)("p",null,"Counterparty clients can upgrade securely by using all of the chain-chosen parameters from the chain-committed ",(0,a.kt)("inlineCode",{parentName:"p"},"UpgradedClient")," and preserving all of the old client-chosen parameters. This enables chains to securely upgrade without relying on an honest relayer, however it can in some cases lead to an invalid final ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," if the new chain-chosen parameters clash with the old client-chosen parameter. This can happen in the Tendermint client case if the upgrading chain lowers the ",(0,a.kt)("inlineCode",{parentName:"p"},"UnbondingPeriod")," (chain-chosen) to a duration below that of a counterparty client's ",(0,a.kt)("inlineCode",{parentName:"p"},"TrustingPeriod")," (client-chosen). Such cases should be clearly documented by developers, so that chains know which upgrades should be avoided to prevent this problem. The final upgraded client should also be validated in ",(0,a.kt)("inlineCode",{parentName:"p"},"VerifyUpgradeAndUpdateState")," before returning to ensure that the client does not upgrade to an invalid ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState"),"."))}u.isMDXComponent=!0}}]);