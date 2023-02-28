package model

import (
	"crypto/rand"
)

type walletType []byte
type CurrencyType float32

type Wallet struct {
	walletID walletType
	currency CurrencyType
}

func NewWallet() *Wallet {
	wID := make(walletType, 32)
	
	_, err := rand.Read(wID)
	if err!= nil {
        panic(err)
    }

	return &Wallet{
        walletID: wID,
        currency: CurrencyType(0) }
}

func (w *Wallet) GetWalletID() walletType {
    return w.walletID
}

func (w *Wallet) Balance() CurrencyType {
    return w.currency
}

func (w *Wallet) Credit(currency CurrencyType) {
    w.currency += currency
}

func (w *Wallet) Debit(currency CurrencyType) {
    w.currency -= currency
}