"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8847],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},71600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const i={title:"Implement `IBCModule` interface and callbacks",sidebar_label:"Implement `IBCModule` interface and callbacks",sidebar_position:2,slug:"/ibc/apps/ibcmodule"},r="Implement IBCModule interface and callbacks",l={unversionedId:"ibc/apps/ibcmodule",id:"version-v6.2.x/ibc/apps/ibcmodule",title:"Implement `IBCModule` interface and callbacks",description:"Learn how to implement the IBCModule interface and all of the callbacks it requires.",source:"@site/versioned_docs/version-v6.2.x/01-ibc/03-apps/02-ibcmodule.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/ibcmodule",permalink:"/v6/ibc/apps/ibcmodule",draft:!1,tags:[],version:"v6.2.x",sidebarPosition:2,frontMatter:{title:"Implement `IBCModule` interface and callbacks",sidebar_label:"Implement `IBCModule` interface and callbacks",sidebar_position:2,slug:"/ibc/apps/ibcmodule"},sidebar:"defaultSidebar",previous:{title:"IBC Applications",permalink:"/v6/ibc/apps/apps"},next:{title:"Bind ports",permalink:"/v6/ibc/apps/bindports"}},c={},s=[{value:"Channel handshake callbacks",id:"channel-handshake-callbacks",level:2},{value:"Channel handshake version negotiation",id:"channel-handshake-version-negotiation",level:3},{value:"Packet callbacks",id:"packet-callbacks",level:2},{value:"Sending packets",id:"sending-packets",level:3},{value:"Receiving packets",id:"receiving-packets",level:3},{value:"Acknowledging packets",id:"acknowledging-packets",level:3},{value:"Timeout packets",id:"timeout-packets",level:3}],p={toc:s},d="wrapper";function h(e){let{components:n,...i}=e;return(0,o.kt)(d,(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"implement-ibcmodule-interface-and-callbacks"},"Implement ",(0,o.kt)("inlineCode",{parentName:"h1"},"IBCModule")," interface and callbacks"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Learn how to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBCModule")," interface and all of the callbacks it requires.")),(0,o.kt)("p",null,"The Cosmos SDK expects all IBC modules to implement the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/tree/main/modules/core/05-port/types/module.go"},(0,o.kt)("inlineCode",{parentName:"a"},"IBCModule"),"\ninterface"),". This interface contains all of the callbacks IBC expects modules to implement. They include callbacks related to channel handshake, closing and packet callbacks (",(0,o.kt)("inlineCode",{parentName:"p"},"OnRecvPacket"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OnTimeoutPacket"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// IBCModule implements the ICS26 interface for given the keeper.\n// The implementation of the IBCModule interface could for example be in a file called ibc_module.go,\n// but ultimately file structure is up to the developer\ntype IBCModule struct {\n    keeper keeper.Keeper\n}\n")),(0,o.kt)("p",null,"Additionally, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"module.go")," file, add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var (\n    _ module.AppModule      = AppModule{}\n    _ module.AppModuleBasic = AppModuleBasic{}\n    // Add this line\n    _ porttypes.IBCModule   = IBCModule{}\n)\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite readings"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v6/ibc/overview"},"IBC Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v6/ibc/integration"},"IBC default integration")))),(0,o.kt)("h2",{id:"channel-handshake-callbacks"},"Channel handshake callbacks"),(0,o.kt)("p",null,"This section will describe the callbacks that are called during channel handshake execution. Among other things, it will claim channel capabilities passed on from core IBC. For a refresher on capabilities, check ",(0,o.kt)("a",{parentName:"p",href:"/v6/ibc/overview#capabilities"},"the Overview section"),"."),(0,o.kt)("p",null,"Here are the channel handshake callbacks that modules are expected to implement:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that some of the code below is ",(0,o.kt)("em",{parentName:"p"},"pseudo code"),", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkArguments")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"negotiateAppVersion")," functions.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Called by IBC Handler on MsgOpenInit\nfunc (im IBCModule) OnChanOpenInit(ctx sdk.Context,\n    order channeltypes.Order,\n    connectionHops []string,\n    portID string,\n    channelID string,\n    channelCap *capabilitytypes.Capability,\n    counterparty channeltypes.Counterparty,\n    version string,\n) (string, error) {\n    // ... do custom initialization logic\n\n    // Use above arguments to determine if we want to abort handshake\n    // Examples:\n    // - Abort if order == UNORDERED,\n    // - Abort if version is unsupported\n    if err := checkArguments(args); err != nil {\n        return "", err\n    }\n\n     // OpenInit must claim the channelCapability that IBC passes into the callback\n    if err := im.keeper.ClaimCapability(ctx, chanCap, host.ChannelCapabilityPath(portID, channelID)); err != nil {\n            return "", err\n    }\n\n    return version, nil\n}\n\n// Called by IBC Handler on MsgOpenTry\nfunc (im IBCModule) OnChanOpenTry(\n    ctx sdk.Context,\n    order channeltypes.Order,\n    connectionHops []string,\n    portID,\n    channelID string,\n    channelCap *capabilitytypes.Capability,\n    counterparty channeltypes.Counterparty,\n    counterpartyVersion string,\n) (string, error) {\n    // ... do custom initialization logic\n\n    // Use above arguments to determine if we want to abort handshake\n    if err := checkArguments(args); err != nil {\n        return "", err\n    }\n\n    // OpenTry must claim the channelCapability that IBC passes into the callback\n    if err := im.keeper.scopedKeeper.ClaimCapability(ctx, chanCap, host.ChannelCapabilityPath(portID, channelID)); err != nil {\n        return err\n    }\n\n    // Construct application version\n    // IBC applications must return the appropriate application version\n    // This can be a simple string or it can be a complex version constructed\n    // from the counterpartyVersion and other arguments.\n    // The version returned will be the channel version used for both channel ends.\n    appVersion := negotiateAppVersion(counterpartyVersion, args)\n\n    return appVersion, nil\n}\n\n// Called by IBC Handler on MsgOpenAck\nfunc (im IBCModule) OnChanOpenAck(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n    counterpartyVersion string,\n) error {\n    if counterpartyVersion != types.Version {\n        return sdkerrors.Wrapf(types.ErrInvalidVersion, "invalid counterparty version: %s, expected %s", counterpartyVersion, types.Version)\n    }\n\n    // do custom logic\n\n    return nil\n}\n\n// Called by IBC Handler on MsgOpenConfirm\nfunc (im IBCModule) OnChanOpenConfirm(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n) error {\n    // do custom logic\n\n    return nil\n}\n')),(0,o.kt)("p",null,"The channel closing handshake will also invoke module callbacks that can return errors to abort the closing handshake. Closing a channel is a 2-step handshake, the initiating chain calls ",(0,o.kt)("inlineCode",{parentName:"p"},"ChanCloseInit")," and the finalizing chain calls ",(0,o.kt)("inlineCode",{parentName:"p"},"ChanCloseConfirm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Called by IBC Handler on MsgCloseInit\nfunc (im IBCModule) OnChanCloseInit(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n) error {\n    // ... do custom finalization logic\n\n    // Use above arguments to determine if we want to abort handshake\n    err := checkArguments(args)\n    return err\n}\n\n// Called by IBC Handler on MsgCloseConfirm\nfunc (im IBCModule) OnChanCloseConfirm(\n    ctx sdk.Context,\n    portID,\n    channelID string,\n) error {\n    // ... do custom finalization logic\n\n    // Use above arguments to determine if we want to abort handshake\n    err := checkArguments(args)\n    return err\n}\n")),(0,o.kt)("h3",{id:"channel-handshake-version-negotiation"},"Channel handshake version negotiation"),(0,o.kt)("p",null,"Application modules are expected to verify versioning used during the channel handshake procedure."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OnChanOpenInit")," will verify that the relayer-chosen parameters\nare valid and perform any custom ",(0,o.kt)("inlineCode",{parentName:"li"},"INIT")," logic.\nIt may return an error if the chosen parameters are invalid\nin which case the handshake is aborted.\nIf the provided version string is non-empty, ",(0,o.kt)("inlineCode",{parentName:"li"},"OnChanOpenInit")," should return\nthe version string if valid or an error if the provided version is invalid.\n",(0,o.kt)("strong",{parentName:"li"},"If the version string is empty, ",(0,o.kt)("inlineCode",{parentName:"strong"},"OnChanOpenInit")," is expected to\nreturn a default version string representing the version(s)\nit supports."),"\nIf there is no default version string for the application,\nit should return an error if the provided version is an empty string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OnChanOpenTry")," will verify the relayer-chosen parameters along with the\ncounterparty-chosen version string and perform custom ",(0,o.kt)("inlineCode",{parentName:"li"},"TRY")," logic.\nIf the relayer-chosen parameters\nare invalid, the callback must return an error to abort the handshake.\nIf the counterparty-chosen version is not compatible with this module's\nsupported versions, the callback must return an error to abort the handshake.\nIf the versions are compatible, the try callback must select the final version\nstring and return it to core IBC.\n",(0,o.kt)("inlineCode",{parentName:"li"},"OnChanOpenTry")," may also perform custom initialization logic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OnChanOpenAck")," will error if the counterparty selected version string\nis invalid and abort the handshake. It may also perform custom ACK logic.")),(0,o.kt)("p",null,"Versions must be strings but can implement any versioning structure. If your application plans to\nhave linear releases then semantic versioning is recommended. If your application plans to release\nvarious features in between major releases then it is advised to use the same versioning scheme\nas IBC. This versioning scheme specifies a version identifier and compatible feature set with\nthat identifier. Valid version selection includes selecting a compatible version identifier with\na subset of features supported by your application for that version. The struct used for this\nscheme can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/03-connection/types/version.go#L16"},"03-connection/types"),"."),(0,o.kt)("p",null,"Since the version type is a string, applications have the ability to do simple version verification\nvia string matching or they can use the already implemented versioning system and pass the proto\nencoded version into each handhshake call as necessary."),(0,o.kt)("p",null,"ICS20 currently implements basic string matching with a single supported version."),(0,o.kt)("h2",{id:"packet-callbacks"},"Packet callbacks"),(0,o.kt)("p",null,"Just as IBC expects modules to implement callbacks for channel handshakes, it also expects modules to implement callbacks for handling the packet flow through a channel, as defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBCModule")," interface."),(0,o.kt)("p",null,"Once a module A and module B are connected to each other, relayers can start relaying packets and acknowledgements back and forth on the channel."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IBC packet flow diagram",src:t(64433).Z,width:"2666",height:"1580"})),(0,o.kt)("p",null,"Briefly, a successful packet flow works as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"module A sends a packet through the IBC module"),(0,o.kt)("li",{parentName:"ol"},"the packet is received by module B"),(0,o.kt)("li",{parentName:"ol"},"if module B writes an acknowledgement of the packet then module A will process the\nacknowledgement"),(0,o.kt)("li",{parentName:"ol"},"if the packet is not successfully received before the timeout, then module A processes the\npacket's timeout.")),(0,o.kt)("h3",{id:"sending-packets"},"Sending packets"),(0,o.kt)("p",null,"Modules ",(0,o.kt)("strong",{parentName:"p"},"do not send packets through callbacks"),", since the modules initiate the action of sending packets to the IBC module, as opposed to other parts of the packet flow where messages sent to the IBC\nmodule must trigger execution on the port-bound module through the use of callbacks. Thus, to send a packet a module simply needs to call ",(0,o.kt)("inlineCode",{parentName:"p"},"SendPacket")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBCChannelKeeper"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that some of the code below is ",(0,o.kt)("em",{parentName:"p"},"pseudo code"),", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the ",(0,o.kt)("inlineCode",{parentName:"p"},"EncodePacketData(customPacketData)")," function.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// retrieve the dynamic capability for this channel\nchannelCap := scopedKeeper.GetCapability(ctx, channelCapName)\n// Sending custom application packet data\ndata := EncodePacketData(customPacketData)\n// Send packet to IBC, authenticating with channelCap\nsequence, err := IBCChannelKeeper.SendPacket(\n    ctx,\n    channelCap,\n    sourcePort,\n    sourceChannel,\n    timeoutHeight,\n    timeoutTimestamp,\n    data,\n)\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"In order to prevent modules from sending packets on channels they do not own, IBC expects\nmodules to pass in the correct channel capability for the packet's source channel.")),(0,o.kt)("h3",{id:"receiving-packets"},"Receiving packets"),(0,o.kt)("p",null,"To handle receiving packets, the module must implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"OnRecvPacket")," callback. This gets\ninvoked by the IBC module after the packet has been proved valid and correctly processed by the IBC\nkeepers. Thus, the ",(0,o.kt)("inlineCode",{parentName:"p"},"OnRecvPacket")," callback only needs to worry about making the appropriate state\nchanges given the packet data without worrying about whether the packet is valid or not."),(0,o.kt)("p",null,"Modules may return to the IBC handler an acknowledgement which implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"Acknowledgement")," interface.\nThe IBC handler will then commit this acknowledgement of the packet so that a relayer may relay the\nacknowledgement back to the sender module."),(0,o.kt)("p",null,"The state changes that occurred during this callback will only be written if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the acknowledgement was successful as indicated by the ",(0,o.kt)("inlineCode",{parentName:"li"},"Success()")," function of the acknowledgement"),(0,o.kt)("li",{parentName:"ul"},"if the acknowledgement returned is nil indicating that an asynchronous process is occurring")),(0,o.kt)("p",null,"NOTE: Applications which process asynchronous acknowledgements must handle reverting state changes\nwhen appropriate. Any state changes that occurred during the ",(0,o.kt)("inlineCode",{parentName:"p"},"OnRecvPacket")," callback will be written\nfor asynchronous acknowledgements."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that some of the code below is ",(0,o.kt)("em",{parentName:"p"},"pseudo code"),", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the ",(0,o.kt)("inlineCode",{parentName:"p"},"DecodePacketData(packet.Data)")," function.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (im IBCModule) OnRecvPacket(\n    ctx sdk.Context,\n    packet channeltypes.Packet,\n) ibcexported.Acknowledgement {\n    // Decode the packet data\n    packetData := DecodePacketData(packet.Data)\n\n    // do application state changes based on packet data and return the acknowledgement\n    // NOTE: The acknowledgement will indicate to the IBC handler if the application\n    // state changes should be written via the `Success()` function. Application state\n    // changes are only written if the acknowledgement is successful or the acknowledgement\n    // returned is nil indicating that an asynchronous acknowledgement will occur.\n    ack := processPacket(ctx, packet, packetData)\n\n    return ack\n}\n")),(0,o.kt)("p",null,"Reminder, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Acknowledgement")," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Acknowledgement defines the interface used to return\n// acknowledgements in the OnRecvPacket callback.\ntype Acknowledgement interface {\n    Success() bool\n    Acknowledgement() []byte\n}\n")),(0,o.kt)("h3",{id:"acknowledging-packets"},"Acknowledging packets"),(0,o.kt)("p",null,"After a module writes an acknowledgement, a relayer can relay back the acknowledgement to the sender module. The sender module can\nthen process the acknowledgement using the ",(0,o.kt)("inlineCode",{parentName:"p"},"OnAcknowledgementPacket")," callback. The contents of the\nacknowledgement is entirely up to the modules on the channel (just like the packet data); however, it\nmay often contain information on whether the packet was successfully processed along\nwith some additional data that could be useful for remediation if the packet processing failed."),(0,o.kt)("p",null,"Since the modules are responsible for agreeing on an encoding/decoding standard for packet data and\nacknowledgements, IBC will pass in the acknowledgements as ",(0,o.kt)("inlineCode",{parentName:"p"},"[]byte")," to this callback. The callback\nis responsible for decoding the acknowledgement and processing it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that some of the code below is ",(0,o.kt)("em",{parentName:"p"},"pseudo code"),", indicating what actions need to happen but leaving it up to the developer to implement a custom implementation. E.g. the ",(0,o.kt)("inlineCode",{parentName:"p"},"DecodeAcknowledgement(acknowledgments)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"processAck(ack)")," functions.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (im IBCModule) OnAcknowledgementPacket(\n    ctx sdk.Context,\n    packet channeltypes.Packet,\n    acknowledgement []byte,\n) (*sdk.Result, error) {\n    // Decode acknowledgement\n    ack := DecodeAcknowledgement(acknowledgement)\n\n    // process ack\n    res, err := processAck(ack)\n    return res, err\n}\n")),(0,o.kt)("h3",{id:"timeout-packets"},"Timeout packets"),(0,o.kt)("p",null,"If the timeout for a packet is reached before the packet is successfully received or the\ncounterparty channel end is closed before the packet is successfully received, then the receiving\nchain can no longer process it. Thus, the sending chain must process the timeout using\n",(0,o.kt)("inlineCode",{parentName:"p"},"OnTimeoutPacket")," to handle this situation. Again the IBC module will verify that the timeout is\nindeed valid, so our module only needs to implement the state machine logic for what to do once a\ntimeout is reached and the packet can no longer be received."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (im IBCModule) OnTimeoutPacket(\n    ctx sdk.Context,\n    packet channeltypes.Packet,\n) (*sdk.Result, error) {\n    // do custom timeout logic\n}\n")))}h.isMDXComponent=!0},64433:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/packet_flow-1d89ee0538ce6a86285b91adee1b2047.png"}}]);