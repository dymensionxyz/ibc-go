package keeper

import (
	"fmt"
	"reflect"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	capabilitykeeper "github.com/cosmos/cosmos-sdk/x/capability/keeper"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"

	clientkeeper "github.com/cosmos/ibc-go/v6/modules/core/02-client/keeper"
	clienttypes "github.com/cosmos/ibc-go/v6/modules/core/02-client/types"
	connectionkeeper "github.com/cosmos/ibc-go/v6/modules/core/03-connection/keeper"
	connectiontypes "github.com/cosmos/ibc-go/v6/modules/core/03-connection/types"
	channelkeeper "github.com/cosmos/ibc-go/v6/modules/core/04-channel/keeper"
	portkeeper "github.com/cosmos/ibc-go/v6/modules/core/05-port/keeper"
)

// NewKeeper creates a new ibc Keeper
func NewKeeperWithDymint(
	cdc codec.BinaryCodec, key storetypes.StoreKey, paramSpace paramtypes.Subspace,
	stakingKeeper clienttypes.StakingKeeper, upgradeKeeper clienttypes.UpgradeKeeper,
	scopedKeeper capabilitykeeper.ScopedKeeper,
) *Keeper {

	// register paramSpace at top level keeper
	// set KeyTable if it has not already been set
	if !paramSpace.HasKeyTable() {
		keyTable := clienttypes.ParamKeyTable()
		keyTable.RegisterParamSet(&connectiontypes.Params{})
		paramSpace = paramSpace.WithKeyTable(keyTable)
	}

	// panic if any of the keepers passed in is empty
	if reflect.ValueOf(stakingKeeper).IsZero() {
		panic(fmt.Errorf("cannot initialize IBC keeper: empty staking keeper"))
	}

	if reflect.ValueOf(upgradeKeeper).IsZero() {
		panic(fmt.Errorf("cannot initialize IBC keeper: empty upgrade keeper"))
	}

	if reflect.DeepEqual(capabilitykeeper.ScopedKeeper{}, scopedKeeper) {
		panic(fmt.Errorf("cannot initialize IBC keeper: empty scoped keeper"))
	}

	clientKeeper := clientkeeper.NewDymintKeeper(cdc, key, paramSpace, stakingKeeper, upgradeKeeper)
	connectionKeeper := connectionkeeper.NewKeeper(cdc, key, paramSpace, clientKeeper)
	portKeeper := portkeeper.NewKeeper(scopedKeeper)
	channelKeeper := channelkeeper.NewKeeper(cdc, key, clientKeeper, connectionKeeper, portKeeper, scopedKeeper)

	return &Keeper{
		cdc:              cdc,
		ClientKeeper:     clientKeeper,
		ConnectionKeeper: connectionKeeper,
		ChannelKeeper:    channelKeeper,
		PortKeeper:       portKeeper,
	}
}
