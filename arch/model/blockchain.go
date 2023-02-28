package model

import (
	"bytes"
	"encoding/hex"
	"errors"
	"strconv"
)

type Blockchain struct {
	Chain             *ChainLinks
	difficulty        int
	transactionBuffer []Transaction
	reward            CurrencyType
}

func NewBlockchain(difficulty int) *Blockchain {
	blockchain := &Blockchain{
		Chain:             NewChain(),
		difficulty:        difficulty,
		transactionBuffer: make([]Transaction, 0),
		reward:            CurrencyType(1),
	}

	return blockchain
}

func (blockchain *Blockchain) addBlock(blockData []Transaction) {
	statement := NewBlock(blockData, blockchain.Chain.Latest.Hash)
	statement.Mine(blockchain.difficulty)
	blockchain.Chain.Add(statement)
}

func (blockchain *Blockchain) AddTransactions(transactionData []Transaction) error {
	if len(transactionData) == 100 {
        return errors.New("transactionBuffer is full. Try processing pending transactions")
    }

	blockchain.transactionBuffer = append(blockchain.transactionBuffer, transactionData...)

	return nil
}

func (blockchain *Blockchain) ProcessPendingTransactions(rewardAddress walletType) {
	rewardTx := Transaction{ "genesis rewards " + strconv.FormatFloat(float64(blockchain.reward), 'f', 2, 64) + " coin(s) to " + hex.EncodeToString(rewardAddress) }
	blockchain.transactionBuffer = append(blockchain.transactionBuffer, rewardTx)

	blockchain.addBlock(blockchain.transactionBuffer)
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