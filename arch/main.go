package main

import (
	"fmt"
	"model"
	"time"
)

func main() {

	bc := model.NewBlockchain(1)
	wallet := model.NewWallet()

	wallet.Credit(7)

	err := bc.AddFromJSON("./arch/model/dummy.json")

	if err != nil {
		fmt.Println("Data file addition to blockchain failed:", err)
		return
	}

	// Processing the pending transactions and rewarding walletID.
	clock := time.Now()
	err = bc.ProcessPendingTransactions(wallet, 6)

	if err != nil {
		fmt.Println("Block data processing failed:", err)
	}

	fmt.Println("Transactions processed in", time.Since(clock))
	
	for _, block := range bc.Chain.Links() {
		if block.IsValid() {
			block.Print()
		}
	
		fmt.Println()
	}

	fmt.Println("Wallet ballance:", wallet.Balance(), "coins")
}