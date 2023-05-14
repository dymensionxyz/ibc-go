package keeper

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"

	v100 "github.com/cosmos/ibc-go/v5/modules/core/02-client/legacy/v100"
)

// Migrator is a struct for handling in-place store migrations.
type Migrator struct {
	keeper KeeperI
}

// NewMigrator returns a new Migrator.
func NewMigrator(keeper KeeperI) Migrator {
	return Migrator{keeper: keeper}
}

// Migrate1to2 migrates from version 1 to 2.
// This migration
// - migrates solo machine client states from v1 to v2 protobuf definition
// - prunes solo machine consensus states
// - prunes expired tendermint consensus states
// - adds iteration and processed height keys for unexpired tendermint consensus states
func (m Migrator) Migrate1to2(ctx sdk.Context) error {
	//FIXME: support different kinds of clients
	cl, ok := m.keeper.(Keeper)
	if !ok {
		return errors.New("client keeper is not a keeper.Keeper")
	}

	return v100.MigrateStore(ctx, cl.storeKey, cl.cdc)
}
