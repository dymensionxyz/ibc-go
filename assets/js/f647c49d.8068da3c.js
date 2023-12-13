"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3974],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},59909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"Authentication Modules",sidebar_label:"Authentication Modules",sidebar_position:2,slug:"/apps/interchain-accounts/auth-modules"},i="Building an authentication module",s={unversionedId:"apps/interchain-accounts/auth-modules",id:"version-v4.5.x/apps/interchain-accounts/auth-modules",title:"Authentication Modules",description:"Authentication modules play the role of the Base Application as described in ICS30 IBC Middleware, and enable application developers to perform custom logic when working with the Interchain Accounts controller API.",source:"@site/versioned_docs/version-v4.5.x/02-apps/02-interchain-accounts/02-auth-modules.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/auth-modules",permalink:"/v4/apps/interchain-accounts/auth-modules",draft:!1,tags:[],version:"v4.5.x",sidebarPosition:2,frontMatter:{title:"Authentication Modules",sidebar_label:"Authentication Modules",sidebar_position:2,slug:"/apps/interchain-accounts/auth-modules"}},l={},c=[{value:"IBCModule implementation",id:"ibcmodule-implementation",level:2},{value:"<code>RegisterInterchainAccount</code>",id:"registerinterchainaccount",level:2},{value:"<code>SendTx</code>",id:"sendtx",level:2},{value:"<code>OnAcknowledgementPacket</code>",id:"onacknowledgementpacket",level:2},{value:"Integration into <code>app.go</code> file",id:"integration-into-appgo-file",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-an-authentication-module"},"Building an authentication module"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Authentication modules play the role of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Base Application")," as described in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware"},"ICS30 IBC Middleware"),", and enable application developers to perform custom logic when working with the Interchain Accounts controller API. ")),(0,r.kt)("p",null,"The controller submodule is used for account registration and packet sending.\nIt executes only logic required of all controllers of interchain accounts.\nThe type of authentication used to manage the interchain accounts remains unspecified.\nThere may exist many different types of authentication which are desirable for different use cases.\nThus the purpose of the authentication module is to wrap the controller module with custom authentication logic."),(0,r.kt)("p",null,"In ibc-go, authentication modules are connected to the controller chain via a middleware stack.\nThe controller module is implemented as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware"},"middleware")," and the authentication module is connected to the controller module as the base application of the middleware stack.\nTo implement an authentication module, the ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCModule")," interface must be fulfilled.\nBy implementing the controller module as middleware, any amount of authentication modules can be created and connected to the controller module without writing redundant code. "),(0,r.kt)("p",null,"The authentication module must:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authenticate interchain account owners"),(0,r.kt)("li",{parentName:"ul"},"Track the associated interchain account address for an owner"),(0,r.kt)("li",{parentName:"ul"},"Claim the channel capability in ",(0,r.kt)("inlineCode",{parentName:"li"},"OnChanOpenInit")),(0,r.kt)("li",{parentName:"ul"},"Send packets on behalf of an owner (after authentication)")),(0,r.kt)("h2",{id:"ibcmodule-implementation"},"IBCModule implementation"),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCModule")," callbacks must be implemented with appropriate custom logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// OnChanOpenInit implements the IBCModule interface\nfunc (im IBCModule) OnChanOpenInit(\n    ctx sdk.Context,\n    order channeltypes.Order,\n    connectionHops []string,\n    portID string,\n    channelID string,\n    chanCap *capabilitytypes.Capability,\n    counterparty channeltypes.Counterparty,\n    version string,\n) (string, error) {\n    // the authentication module *must* claim the channel capability on OnChanOpenInit\n    if err := im.keeper.ClaimCapability(ctx, chanCap, host.ChannelCapabilityPath(portID, channelID)); err != nil {\n        return version, err\n    }\n\n    // perform custom logic\n\n    return version, nil\n}\n\n// OnChanOpenAck implements the IBCModule interface\nfunc (im IBCModule) OnChanOpenAck(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n    counterpartyVersion string,\n) error {\n    // perform custom logic\n\n    return nil\n}\n\n// OnChanCloseConfirm implements the IBCModule interface\nfunc (im IBCModule) OnChanCloseConfirm(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n) error {\n    // perform custom logic\n\n    return nil\n}\n\n// OnAcknowledgementPacket implements the IBCModule interface\nfunc (im IBCModule) OnAcknowledgementPacket(\n    ctx sdk.Context,\n    packet channeltypes.Packet,\n    acknowledgement []byte,\n    relayer sdk.AccAddress,\n) error {\n    // perform custom logic\n\n    return nil\n}\n\n// OnTimeoutPacket implements the IBCModule interface.\nfunc (im IBCModule) OnTimeoutPacket(\n    ctx sdk.Context,\n    packet channeltypes.Packet,\n    relayer sdk.AccAddress,\n) error {\n    // perform custom logic\n\n    return nil\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The channel capability must be claimed by the authentication module in ",(0,r.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit")," otherwise the authentication module will not be able to send packets on the channel created for the associated interchain account. "),(0,r.kt)("p",null,"The following functions must be defined to fulfill the ",(0,r.kt)("inlineCode",{parentName:"p"},"IBCModule")," interface, but they will never be called by the controller module so they may error or panic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// OnChanOpenTry implements the IBCModule interface\nfunc (im IBCModule) OnChanOpenTry(\n    ctx sdk.Context,\n    order channeltypes.Order,\n    connectionHops []string,\n    portID,\n    channelID string,\n    chanCap *capabilitytypes.Capability,\n    counterparty channeltypes.Counterparty,\n    counterpartyVersion string,\n) (string, error) {\n    panic("UNIMPLEMENTED")\n}\n\n// OnChanOpenConfirm implements the IBCModule interface\nfunc (im IBCModule) OnChanOpenConfirm(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n) error {\n    panic("UNIMPLEMENTED")\n}\n\n// OnChanCloseInit implements the IBCModule interface\nfunc (im IBCModule) OnChanCloseInit(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n) error {\n    panic("UNIMPLEMENTED")\n}\n\n// OnRecvPacket implements the IBCModule interface. A successful acknowledgement\n// is returned if the packet data is successfully decoded and the receive application\n// logic returns without error.\nfunc (im IBCModule) OnRecvPacket(\n    ctx sdk.Context,\n    packet channeltypes.Packet,\n    relayer sdk.AccAddress,\n) ibcexported.Acknowledgement {\n    panic("UNIMPLEMENTED")\n}\n')),(0,r.kt)("h2",{id:"registerinterchainaccount"},(0,r.kt)("inlineCode",{parentName:"h2"},"RegisterInterchainAccount")),(0,r.kt)("p",null,"The authentication module can begin registering interchain accounts by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterInterchainAccount"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"if err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, connectionID, owner.String(), version); err != nil {\n    return err\n}\n\nreturn nil\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," argument is used to support ICS29 fee middleware for relayer incentivization of ICS27 packets. Consumers of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterInterchainAccount")," are expected to build the appropriate JSON encoded version string themselves and pass it accordingly. If an empty string is passed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," argument, then the version will be initialized to a default value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnChanOpenInit")," callback of the controller's handler, so that channel handshake can proceed."),(0,r.kt)("p",null,"The following code snippet illustrates how to construct an appropriate interchain accounts ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," and encode it as a JSON bytestring:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nif err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, controllerConnectionID, owner.String(), string(appVersion)); err != nil {\n    return err\n}\n")),(0,r.kt)("p",null,"Similarly, if the application stack is configured to route through ICS29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS29 ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"icaMetadata := icatypes.Metadata{\n    Version:                icatypes.Version,\n    ControllerConnectionId: controllerConnectionID,\n    HostConnectionId:       hostConnectionID,\n    Encoding:               icatypes.EncodingProtobuf,\n    TxType:                 icatypes.TxTypeSDKMultiMsg,\n}\n\nappVersion, err := icatypes.ModuleCdc.MarshalJSON(&icaMetadata)\nif err != nil {\n    return err\n}\n\nfeeMetadata := feetypes.Metadata{\n    AppVersion: string(appVersion),\n    FeeVersion: feetypes.Version,\n}\n\nfeeEnabledVersion, err := feetypes.ModuleCdc.MarshalJSON(&feeMetadata)\nif err != nil {\n    return err\n}\n\nif err := keeper.icaControllerKeeper.RegisterInterchainAccount(ctx, controllerConnectionID, owner.String(), string(feeEnabledVersion)); err != nil {\n    return err\n}\n")),(0,r.kt)("h2",{id:"sendtx"},(0,r.kt)("inlineCode",{parentName:"h2"},"SendTx")),(0,r.kt)("p",null,"The authentication module can attempt to send a packet by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"SendTx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\n// Authenticate owner\n// perform custom logic\n    \n// Construct controller portID based on interchain account owner address\nportID, err := icatypes.NewControllerPortID(owner.String())\nif err != nil {\n    return err\n}\n\nchannelID, found := keeper.icaControllerKeeper.GetActiveChannelID(ctx, portID)\nif !found {\n    return sdkerrors.Wrapf(icatypes.ErrActiveChannelNotFound, "failed to retrieve active channel for port %s", portID)\n}\n    \n// Obtain the channel capability, claimed in OnChanOpenInit\nchanCap, found := keeper.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(portID, channelID))\nif !found {\n    return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")\n}\n    \n// Obtain data to be sent to the host chain. \n// In this example, the owner of the interchain account would like to send a bank MsgSend to the host chain. \n// The appropriate serialization function should be called. The host chain must be able to deserialize the transaction. \n// If the host chain is using the ibc-go host module, `SerializeCosmosTx` should be used. \nmsg := &banktypes.MsgSend{FromAddress: fromAddr, ToAddress: toAddr, Amount: amt}\ndata, err := icatypes.SerializeCosmosTx(keeper.cdc, []sdk.Msg{msg})\nif err != nil {\n    return err\n}\n\n// Construct packet data\npacketData := icatypes.InterchainAccountPacketData{\n    Type: icatypes.EXECUTE_TX,\n    Data: data,\n}\n\n// Obtain timeout timestamp\n// An appropriate timeout timestamp must be determined based on the usage of the interchain account.\n// If the packet times out, the channel will be closed requiring a new channel to be created \ntimeoutTimestamp := obtainTimeoutTimestamp()\n\n// Send the interchain accounts packet, returning the packet sequence\nseq, err = keeper.icaControllerKeeper.SendTx(ctx, chanCap, portID, packetData, timeoutTimestamp)\n')),(0,r.kt)("p",null,"The data within an ",(0,r.kt)("inlineCode",{parentName:"p"},"InterchainAccountPacketData")," must be serialized using a format supported by the host chain.\nIf the host chain is using the ibc-go host chain submodule, ",(0,r.kt)("inlineCode",{parentName:"p"},"SerializeCosmosTx")," should be used. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"InterchainAccountPacketData.Data")," is serialized using a format not support by the host chain, the packet will not be successfully received.  "),(0,r.kt)("h2",{id:"onacknowledgementpacket"},(0,r.kt)("inlineCode",{parentName:"h2"},"OnAcknowledgementPacket")),(0,r.kt)("p",null,"Controller chains will be able to access the acknowledgement written into the host chain state once a relayer relays the acknowledgement.\nThe acknowledgement bytes will be passed to the auth module via the ",(0,r.kt)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket")," callback.\nAuth modules are expected to know how to decode the acknowledgement. "),(0,r.kt)("p",null,"If the controller chain is connected to a host chain using the host module on ibc-go, it may interpret the acknowledgement bytes as follows:"),(0,r.kt)("p",null,"Begin by unmarshaling the acknowledgement into sdk.TxMsgData:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var ack channeltypes.Acknowledgement\nif err := channeltypes.SubModuleCdc.UnmarshalJSON(acknowledgement, &ack); err != nil {\n    return err\n}\n\ntxMsgData := &sdk.TxMsgData{}\nif err := proto.Unmarshal(ack.GetResult(), txMsgData); err != nil {\n    return err\n}\n")),(0,r.kt)("p",null,"If the txMsgData.Data field is non nil, the host chain is using SDK version <= v0.45.\nThe auth module should interpret the txMsgData.Data as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"switch len(txMsgData.Data) {\ncase 0:\n    // see documentation below for SDK 0.46.x or greater\ndefault:\n    for _, msgData := range txMsgData.Data {\n        if err := handler(msgData); err != nil {\n            return err\n        }\n    }\n...\n}            \n")),(0,r.kt)("p",null,"A handler will be needed to interpret what actions to perform based on the message type sent.\nA router could be used, or more simply a switch statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func handler(msgData sdk.MsgData) error {\nswitch msgData.MsgType {\ncase sdk.MsgTypeURL(&banktypes.MsgSend{}):\n    msgResponse := &banktypes.MsgSendResponse{}\n    if err := proto.Unmarshal(msgData.Data, msgResponse}; err != nil {\n        return err\n    }\n\n    handleBankSendMsg(msgResponse)\n\ncase sdk.MsgTypeURL(&stakingtypes.MsgDelegate{}):\n    msgResponse := &stakingtypes.MsgDelegateResponse{}\n    if err := proto.Unmarshal(msgData.Data, msgResponse}; err != nil {\n        return err\n    }\n\n    handleStakingDelegateMsg(msgResponse)\n\ncase sdk.MsgTypeURL(&transfertypes.MsgTransfer{}):\n    msgResponse := &transfertypes.MsgTransferResponse{}\n    if err := proto.Unmarshal(msgData.Data, msgResponse}; err != nil {\n        return err\n    }\n\n    handleIBCTransferMsg(msgResponse)\n \ndefault:\n    return\n}\n")),(0,r.kt)("p",null,"If the txMsgData.Data is empty, the host chain is using SDK version > v0.45.\nThe auth module should interpret the txMsgData.Responses as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"...\n// switch statement from above\ncase 0:\n    for _, any := range txMsgData.MsgResponses {\n        if err := handleAny(any); err != nil {\n            return err\n        }\n    }\n}\n")),(0,r.kt)("p",null,"A handler will be needed to interpret what actions to perform based on the type url of the Any.\nA router could be used, or more simply a switch statement.\nIt may be possible to deduplicate logic between ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"handleAny"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func handleAny(any *codectypes.Any) error {\nswitch any.TypeURL {\ncase banktypes.MsgSend:\n    msgResponse, err := unpackBankMsgSendResponse(any)\n    if err != nil {\n        return err\n    }\n\n    handleBankSendMsg(msgResponse)\n\ncase stakingtypes.MsgDelegate:\n    msgResponse, err := unpackStakingDelegateResponse(any)\n    if err != nil {\n        return err\n    }\n\n    handleStakingDelegateMsg(msgResponse)\n\n    case transfertypes.MsgTransfer:\n    msgResponse, err := unpackIBCTransferMsgResponse(any)\n    if err != nil {\n        return err\n    }\n\n    handleIBCTransferMsg(msgResponse)\n \ndefault:\n    return\n}\n")),(0,r.kt)("h3",{id:"integration-into-appgo-file"},"Integration into ",(0,r.kt)("inlineCode",{parentName:"h3"},"app.go")," file"),(0,r.kt)("p",null,"To integrate the authentication module into your chain, please follow the steps outlined above in ",(0,r.kt)("a",{parentName:"p",href:"/v4/apps/interchain-accounts/integration#example-integration"},"app.go integration"),"."))}u.isMDXComponent=!0}}]);