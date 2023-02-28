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
	
	bc := model.NewBlockchain(3)
	bc.AddTransactions(transactions)
	clock := time.Now()
	bc.ProcessPendingTransactions([]byte("wallet"))
	fmt.Println(time.Since(clock))

	for _, block := range bc.Chain.Links() {
		if block.IsValid() {
			block.Print()
		}
		
		fmt.Println()
	}
}