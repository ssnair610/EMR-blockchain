package main

import (
	"fmt"
	"model"
	"time"
)

func main() {
	transactions := []model.Transaction{
		{ Message: "A sent B 5 coins" },
		{ Message: "A sent C 5 coins" },
        { Message: "A sent D 5 coins" },
        { Message: "A sent E 5 coins" },
        { Message: "A sent F 5 coins" },
        { Message: "A sent G 5 coins" } }
	
	// Creating a new blockchain with a difficulty of 1.
	bc := model.NewBlockchain(1)
	
	bc.AddTransactions(transactions)
	
	clock := time.Now()
	
	wallet := model.NewWallet()

	// Processing the pending transactions and rewarding walletID.
	bc.ProcessPendingTransactions(wallet.GetWalletID())
	fmt.Println(time.Since(clock))

	for _, block := range bc.Chain.Links() {
		if block.IsValid() {
			block.Print()
		}
		
		fmt.Println()
	}
}