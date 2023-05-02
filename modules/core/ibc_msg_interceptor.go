package ibc

import (
	"context"

	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
	connectiontypes "github.com/cosmos/ibc-go/v3/modules/core/03-connection/types"
	channeltypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
)

type IBCMsgI interface {
	/////////////////////////////////////////////////////////////////////////////
	// 							Keeper
	/////////////////////////////////////////////////////////////////////////////

	// CreateClient defines a rpc handler method for MsgCreateClient.
	CreateClient(goCtx context.Context, msg *clienttypes.MsgCreateClient) (*clienttypes.MsgCreateClientResponse, error)

	// UpdateClient defines a rpc handler method for MsgUpdateClient.
	UpdateClient(goCtx context.Context, msg *clienttypes.MsgUpdateClient) (*clienttypes.MsgUpdateClientResponse, error)

	// UpgradeClient defines a rpc handler method for MsgUpgradeClient.
	UpgradeClient(goCtx context.Context, msg *clienttypes.MsgUpgradeClient) (*clienttypes.MsgUpgradeClientResponse, error)

	// SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
	SubmitMisbehaviour(goCtx context.Context, msg *clienttypes.MsgSubmitMisbehaviour) (*clienttypes.MsgSubmitMisbehaviourResponse, error)

	// ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
	ConnectionOpenInit(goCtx context.Context, msg *connectiontypes.MsgConnectionOpenInit) (*connectiontypes.MsgConnectionOpenInitResponse, error)

	// ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
	ConnectionOpenTry(goCtx context.Context, msg *connectiontypes.MsgConnectionOpenTry) (*connectiontypes.MsgConnectionOpenTryResponse, error)

	// ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
	ConnectionOpenAck(goCtx context.Context, msg *connectiontypes.MsgConnectionOpenAck) (*connectiontypes.MsgConnectionOpenAckResponse, error)

	// ConnectionOpenConfirm defines a rpc handler method for MsgConnectionOpenConfirm.
	ConnectionOpenConfirm(goCtx context.Context, msg *connectiontypes.MsgConnectionOpenConfirm) (*connectiontypes.MsgConnectionOpenConfirmResponse, error)

	// ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
	// ChannelOpenInit will perform 04-channel checks, route to the application
	// callback, and write an OpenInit channel into state upon successful execution.
	ChannelOpenInit(goCtx context.Context, msg *channeltypes.MsgChannelOpenInit) (*channeltypes.MsgChannelOpenInitResponse, error)

	// ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
	// ChannelOpenTry will perform 04-channel checks, route to the application
	// callback, and write an OpenTry channel into state upon successful execution.
	ChannelOpenTry(goCtx context.Context, msg *channeltypes.MsgChannelOpenTry) (*channeltypes.MsgChannelOpenTryResponse, error)

	// ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
	// ChannelOpenAck will perform 04-channel checks, route to the application
	// callback, and write an OpenAck channel into state upon successful execution.
	ChannelOpenAck(goCtx context.Context, msg *channeltypes.MsgChannelOpenAck) (*channeltypes.MsgChannelOpenAckResponse, error)

	// ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
	// ChannelOpenConfirm will perform 04-channel checks, route to the application
	// callback, and write an OpenConfirm channel into state upon successful execution.
	ChannelOpenConfirm(goCtx context.Context, msg *channeltypes.MsgChannelOpenConfirm) (*channeltypes.MsgChannelOpenConfirmResponse, error)

	// ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
	ChannelCloseInit(goCtx context.Context, msg *channeltypes.MsgChannelCloseInit) (*channeltypes.MsgChannelCloseInitResponse, error)

	// ChannelCloseConfirm defines a rpc handler method for MsgChannelCloseConfirm.
	ChannelCloseConfirm(goCtx context.Context, msg *channeltypes.MsgChannelCloseConfirm) (*channeltypes.MsgChannelCloseConfirmResponse, error)

	// RecvPacket defines a rpc handler method for MsgRecvPacket.
	RecvPacket(goCtx context.Context, msg *channeltypes.MsgRecvPacket) (*channeltypes.MsgRecvPacketResponse, error)

	// Timeout defines a rpc handler method for MsgTimeout.
	Timeout(goCtx context.Context, msg *channeltypes.MsgTimeout) (*channeltypes.MsgTimeoutResponse, error)

	// TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
	TimeoutOnClose(goCtx context.Context, msg *channeltypes.MsgTimeoutOnClose) (*channeltypes.MsgTimeoutOnCloseResponse, error)

	// Acknowledgement defines a rpc handler method for MsgAcknowledgement.
	Acknowledgement(goCtx context.Context, msg *channeltypes.MsgAcknowledgement) (*channeltypes.MsgAcknowledgementResponse, error)
}
