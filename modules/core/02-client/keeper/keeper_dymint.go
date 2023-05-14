package keeper

import (
	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"

	"github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"github.com/cosmos/ibc-go/v5/modules/core/exported"
	ibcdtypes "github.com/cosmos/ibc-go/v5/modules/light-clients/01-dymint/types"
)

// Keeper represents a type that grants read and write permissions to any client
// state information
type DymintKeeper struct {
	Keeper
}

// NewKeeper creates a new NewKeeper instance
func NewDymintKeeper(cdc codec.BinaryCodec, key storetypes.StoreKey, paramSpace paramtypes.Subspace, sk types.StakingKeeper, uk types.UpgradeKeeper) DymintKeeper {
	// set KeyTable if it has not already been set
	if !paramSpace.HasKeyTable() {
		paramSpace = paramSpace.WithKeyTable(types.ParamKeyTable())
	}

	return DymintKeeper{
		Keeper: NewKeeper(cdc, key, paramSpace, sk, uk),
	}
}

// GetSelfConsensusState introspects the (self) past historical info at a given height
// and returns the expected consensus state at that height.
// For now, can only retrieve self consensus states for the current revision
func (k DymintKeeper) GetSelfConsensusState(ctx sdk.Context, height exported.Height) (exported.ConsensusState, error) {
	selfHeight, ok := height.(types.Height)
	if !ok {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInvalidType, "expected %T, got %T", types.Height{}, height)
	}
	// check that height revision matches chainID revision
	revision := types.ParseChainID(ctx.ChainID())
	if revision != height.GetRevisionNumber() {
		return nil, sdkerrors.Wrapf(types.ErrInvalidHeight, "chainID revision number does not match height revision number: expected %d, got %d", revision, height.GetRevisionNumber())
	}
	histInfo, found := k.stakingKeeper.GetHistoricalInfo(ctx, int64(selfHeight.RevisionHeight))
	if !found {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrNotFound, "no historical info found at height %d", selfHeight.RevisionHeight)
	}

	blockHeader, err := histInfo.Header.Marshal()
	if err != nil {
		return nil, err
	}

	//FIXME: refactor this. should be methods of the keeper
	sc := ibcdtypes.NewSelfClient()
	return sc.GetSelfConsensusStateFromBlocHeader(k.cdc, blockHeader)
}

// ValidateSelfClient validates the client parameters for a client of the running chain
// This function is only used to validate the client state the counterparty stores for this chain
// Client must be in same revision as the executing chain
func (k DymintKeeper) ValidateSelfClient(ctx sdk.Context, clientState exported.ClientState) error {
	if exported.Dymint != clientState.ClientType() {
		return sdkerrors.Wrapf(types.ErrInvalidClient, "invalid client type. expected: %s, got: %s",
			exported.Dymint, clientState.ClientType())
	}
	sc := ibcdtypes.NewSelfClient()
	return sc.ValidateSelfClientState(ctx, k.stakingKeeper.UnbondingTime(ctx), clientState)
}
