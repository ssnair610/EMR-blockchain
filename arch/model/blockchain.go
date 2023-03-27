package model

import (
	"bytes"
	"fmt"
)

// A Blockchain facilitates processing of transactions through consensus of blocks.
// @property Chain - This is the chain of blocks that make up the blockchain.
// @property {int} difficulty - The number of leading zeros that the hash of a block must have.
// @property {[]Transaction} transactionBuffer - This is a slice of transactions that are waiting to be
// added to the blockchain.
// @property {CurrencyType} reward - The amount of currency that is rewarded to the miner of a block.
type Blockchain struct {
	Chain             *ChainLinks
	difficulty        int
	transactionBuffer []Transaction
	minStake		  CurrencyType
	reward            CurrencyType
}

// NewBlockchain creates a new blockchain with a genesis block and returns a pointer to it
func NewBlockchain(difficulty int) *Blockchain {
	blockchain := &Blockchain{
		Chain:             NewChain(),
		difficulty:        difficulty,
		transactionBuffer: make([]Transaction, 0),
		minStake: 		   CurrencyType(5),
		reward:            CurrencyType(8),
	}

	return blockchain
}

// Adding a block to the blockchain.
func (blockchain *Blockchain) addBlock(blockData Transaction) {
	statement := NewBlock(blockData, blockchain.Chain.Latest.Hash)
	statement.Mine(blockchain.difficulty)
	blockchain.Chain.Add(statement)
}

// AddTransactions Adds transactions to the blockchain.
func (blockchain *Blockchain) AddTransaction(transactionData Transaction) error {
	blockchain.transactionBuffer = append(blockchain.transactionBuffer, transactionData)
	return nil
}

// AddTransactions Adds transactions to the blockchain.
func (blockchain *Blockchain) AddTransactions(transactionsData []Transaction) error {
	blockchain.transactionBuffer = append(blockchain.transactionBuffer, transactionsData...)
	return nil
}

// ProcessPendingTransactions  , Processes the pending transactions. (Currently only supports PoW)
func (blockchain *Blockchain) ProcessPendingTransactions(pocket *Wallet, stake CurrencyType) error {

	if stake < blockchain.minStake {
		return fmt.Errorf("at least %v coins are required during staking", blockchain.minStake)
	}

	err := pocket.Debit(stake)

	if err != nil {
		return err
	}

	reward := CurrencyType(0)
	for _, transaction := range blockchain.transactionBuffer {
		blockchain.addBlock(transaction)
		reward += blockchain.reward
	}

	pocket.Credit(reward)
	blockchain.transactionBuffer = make([]Transaction, 0)

	return nil
}

// IsChainValid Checking if the blockchain is valid.
func (blockchain *Blockchain) IsChainValid() bool {
	var prevHash []byte

	for _, block := range blockchain.Chain.Links() {
		if !block.IsValid() || !bytes.Equal(prevHash, block.PrevHash) {
			return false
		}

		prevHash = block.Hash
	}

	return true
}