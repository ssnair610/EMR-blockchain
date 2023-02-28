package model

import (
	"bytes"
	"crypto/rand"
	"crypto/sha256"
	"fmt"
	"time"
)

type hashcode []byte
type noncecode []byte

type Block struct {

	Transactions []Transaction `json:"transactions"`
	Timestamp time.Time `json:"timestamp"`
	Hash hashcode `json:"hash"`
	PrevHash hashcode `json:"prev_hash"`
	Nonce noncecode `json:"nonce"`
}

func GenesisBlock() *Block {
	block := new(Block)
    block.Transactions = []Transaction{}
    block.Timestamp = time.Now()
    block.PrevHash = hashcode{}
	block.Nonce = make(noncecode, 32)

    block.Hash = block.generateHash()
    return block
}

func NewBlock(transactions []Transaction, previousHash hashcode) *Block {
	block := new(Block)
    block.Transactions = transactions
    block.Timestamp = time.Now()
    block.PrevHash = previousHash
    block.Hash = block.generateHash()
	block.Nonce = make(noncecode, 32)
    return block
}

func (block *Block) generateHash() hashcode {
	input := append(block.Nonce, block.PrevHash...)
	input = append(input, block.Timestamp.String()...)

	for _, transaction := range block.Transactions {
        input = append(input, []byte(transaction.Message)...)
    }


	hash := sha256.Sum256(input)
	return hash[:]
}

func isSolved(solution []byte, depth int) bool {
	for index, solutionByte := range solution {

		if (index >= depth) {
			break
		}

        if solutionByte != 0 {
            return false
        }
    }

    return true
}

func (block *Block) Mine(difficulty int) {
	// This is the mining process. It is generating a random number and assigning it to the nonce when the hash remains unsolved.
	for ! isSolved(block.Hash, difficulty) {
		_, err := rand.Read(block.Nonce)
		if err!= nil {
			panic(err)
		}

		block.Hash = block.generateHash()
	}
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