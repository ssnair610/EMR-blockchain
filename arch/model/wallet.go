package model

import (
	"crypto/rand"
)

type walletType []byte
type CurrencyType float32

// A Wallet is a struct with two fields: walletID of type walletType and currency of type CurrencyType.
// @property {walletType} walletID - a byte array that is the unique identifier for the wallet
// @property {CurrencyType} currency - The currency of the wallet.
type Wallet struct {
	walletID walletType
	ballance CurrencyType
}

// NewWallet It creates a new wallet with a random ID and a ballance of 0
func NewWallet() *Wallet {
	wID := make(walletType, 32)

	_, err := rand.Read(wID)
	if err != nil {
		panic(err)
	}

	return &Wallet{
		walletID: wID,
		ballance: CurrencyType(0)}
}

// GetWalletID A method that returns the walletID of the wallet.
func (wallet *Wallet) GetWalletID() walletType {
	return wallet.walletID
}

// Balance A method that returns the ballance of the wallet.
func (wallet *Wallet) Balance() CurrencyType {
	return wallet.ballance
}

// Credit Adding the amount to the ballance of the wallet.
func (wallet *Wallet) Credit(amount CurrencyType) {
	wallet.ballance += amount
}

// Debit Subtracting the amount from the ballance of the wallet.
func (wallet *Wallet) Debit(amount CurrencyType) {
	wallet.ballance -= amount
}
