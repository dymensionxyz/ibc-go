"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},s="Messages",o={unversionedId:"apps/interchain-accounts/messages",id:"version-v7.3.x/apps/interchain-accounts/messages",title:"Messages",description:"MsgRegisterInterchainAccount",source:"@site/versioned_docs/version-v7.3.x/02-apps/02-interchain-accounts/05-messages.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/messages",permalink:"/v7/apps/interchain-accounts/messages",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:5,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/v7/apps/interchain-accounts/integration"},next:{title:"Parameters",permalink:"/v7/apps/interchain-accounts/parameters"}},c={},l=[{value:"<code>MsgRegisterInterchainAccount</code>",id:"msgregisterinterchainaccount",level:2},{value:"<code>MsgSendTx</code>",id:"msgsendtx",level:2},{value:"Atomicity",id:"atomicity",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messages"},"Messages"),(0,i.kt)("h2",{id:"msgregisterinterchainaccount"},(0,i.kt)("inlineCode",{parentName:"h2"},"MsgRegisterInterchainAccount")),(0,i.kt)("p",null,"An Interchain Accounts channel handshake can be initiated using ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgRegisterInterchainAccount"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type MsgRegisterInterchainAccount struct {\n  Owner        string\n  ConnectionID string\n  Version      string\n}\n")),(0,i.kt)("p",null,"This message is expected to fail if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," is an empty string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConnectionID")," is invalid (see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),").")),(0,i.kt)("p",null,"This message will construct a new ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgChannelOpenInit")," on chain and route it to the core IBC message server to initiate the opening step of the channel handshake."),(0,i.kt)("p",null,"The controller submodule will generate a new port identifier and claim the associated port capability. The caller is expected to provide an appropriate application version string. For example, this may be an ICS-27 JSON encoded ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/interchain_accounts/v1/metadata.proto#L11"},(0,i.kt)("inlineCode",{parentName:"a"},"Metadata"))," type or an ICS-29 JSON encoded ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/fee/v1/metadata.proto#L11"},(0,i.kt)("inlineCode",{parentName:"a"},"Metadata"))," type with a nested application version.\nIf the ",(0,i.kt)("inlineCode",{parentName:"p"},"Version")," string is omitted, the controller submodule will construct a default version string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit")," handshake callback."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type MsgRegisterInterchainAccountResponse struct {\n  ChannelID string\n  PortID string\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ChannelID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PortID")," are returned in the message response."),(0,i.kt)("h2",{id:"msgsendtx"},(0,i.kt)("inlineCode",{parentName:"h2"},"MsgSendTx")),(0,i.kt)("p",null,"An Interchain Accounts transaction can be executed on a remote host chain by sending a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgSendTx")," from the corresponding controller chain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type MsgSendTx struct {\n  Owner           string\n  ConnectionID    string\n  PacketData      InterchainAccountPacketData \n  RelativeTimeout uint64\n}\n")),(0,i.kt)("p",null,"This message is expected to fail if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," is an empty string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConnectionID")," is invalid (see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PacketData")," contains an ",(0,i.kt)("inlineCode",{parentName:"li"},"UNSPECIFIED")," type enum, the length of ",(0,i.kt)("inlineCode",{parentName:"li"},"Data")," bytes is zero or the ",(0,i.kt)("inlineCode",{parentName:"li"},"Memo")," field exceeds 256 characters in length."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RelativeTimeout")," is zero.")),(0,i.kt)("p",null,"This message will create a new IBC packet with the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketData")," and send it via the channel associated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Owner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionID"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketData")," is expected to contain a list of serialized ",(0,i.kt)("inlineCode",{parentName:"p"},"[]sdk.Msg")," in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"CosmosTx"),". Please note the signer field of each ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," must be the interchain account address.\nWhen the packet is relayed to the host chain, the ",(0,i.kt)("inlineCode",{parentName:"p"},"PacketData")," is unmarshalled and the messages are authenticated and executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type MsgSendTxResponse struct {\n  Sequence uint64\n}\n")),(0,i.kt)("p",null,"The packet ",(0,i.kt)("inlineCode",{parentName:"p"},"Sequence")," is returned in the message response."),(0,i.kt)("h2",{id:"atomicity"},"Atomicity"),(0,i.kt)("p",null,"As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/store#cachemultistore"},(0,i.kt)("inlineCode",{parentName:"a"},"CacheMultiStore"))," architecture provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/learn/advanced/context.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Context"))," type. "),(0,i.kt)("p",null,"This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg"),"s succeed."))}d.isMDXComponent=!0}}]);