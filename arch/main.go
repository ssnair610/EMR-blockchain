package main

import (
	"fmt"
	"model"
)

func main() {
	transactions := []model.Transaction{
		{ Message: "A sent B 5 coins" },
		{ Message: "A sent C 5 coins" },
        { Message: "A sent D 5 coins" },
        { Message: "A sent E 5 coins" },
        { Message: "A sent F 5 coins" },
        { Message: "A sent G 5 coins" } }

	genesis := model.GenesisBlock()

	newBlock := model.NewBlock(transactions, genesis.Hash)

	if genesis.IsValid() {
		genesis.Print()
	} else {
		fmt.Println("Genesis block is invalid")
	}

	newBlock.Transactions = append(newBlock.Transactions, model.Transaction{ Message : "A sent Z 100 coins" })

	if newBlock.IsValid() {
        newBlock.Print()
    } else {
        fmt.Println("New block is invalid")
    }
}