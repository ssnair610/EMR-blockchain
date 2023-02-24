package model

import (
	"crypto/sha256"
	"fmt"
	"time"
	"bytes"
)

type hashcode []byte

type Block struct {

	Transactions []Transaction `json:"transactions"`
	Timestamp time.Time `json:"timestamp"`
	Hash hashcode `json:"hash"`
	PrevHash hashcode `json:"prev_hash"`
}

func GenesisBlock() *Block {
	block := new(Block)
    block.Transactions = []Transaction{}
    block.Timestamp = time.Now()
    block.PrevHash = hashcode{}
    block.Hash = block.generateHash()
    return block
}

func NewBlock(transactions []Transaction, previousHash hashcode) *Block {
	block := new(Block)
    block.Transactions = transactions
    block.Timestamp = time.Now()
    block.PrevHash = previousHash
    block.Hash = block.generateHash()
    return block
}

func (block *Block) generateHash() hashcode {
	input := append(block.PrevHash, block.Timestamp.String()...)

	for _, transaction := range block.Transactions {
        input = append(input, []byte(transaction.Message)...)
    }

	hash := sha256.New().Sum(input)
	return hash[:]
}

func (block *Block) Print() {
	fmt.Printf("\ttime: %v\n", block.Timestamp.String())
	fmt.Printf("\tprevious hash: %x\n", block.PrevHash)
	fmt.Printf("\thash: %x\n", block.Hash)

	for _, transaction := range block.Transactions {
        fmt.Printf("\ttransaction: %v\n", transaction.Message)
    }
}

func (block *Block) IsValid() bool {
	return bytes.Equal(block.Hash, block.generateHash())
}