package model

import (
	"bytes"
)

type currency float32

type Blockchain struct {
	Chain             *ChainLinks
	difficulty        int
	transactionBuffer []Transaction
	reward            currency
}

func NewBlockchain(difficulty int) *Blockchain {
	blockchain := &Blockchain{
		Chain:             NewChain(),
		difficulty:        difficulty,
		transactionBuffer: make([]Transaction, 100),
		reward:            currency(1),
	}

	return blockchain
}

func (blockchain *Blockchain) AddBlock(blockData []Transaction) {
	statement := NewBlock(blockData, blockchain.Chain.Latest.Hash)
	// prove statement
	blockchain.Chain.Add(statement)
}

func (blockchain *Blockchain) AddTransaction(transactionData []Transaction) {
	blockchain.transactionBuffer = append(blockchain.transactionBuffer, transactionData...)
}

func (blockchain *Blockchain) ProcessPendingTransactions(rewardAddress []byte) {
	rewardTx := Transaction{ "genesis rewards " + string(rewardAddress) }
	blockchain.transactionBuffer = append(blockchain.transactionBuffer, rewardTx)

	blockchain.AddBlock(blockchain.transactionBuffer)
	blockchain.transactionBuffer = blockchain.transactionBuffer[:0]
}

func (blockchain *Blockchain) IsChainValid() bool {
	prevHash := []byte{}

	for _, block := range blockchain.Chain.Links() {
		if ! block.IsValid() || ! bytes.Equal(prevHash, block.PrevHash) {
			return false
		}

		prevHash = block.Hash
	}

	return true
}