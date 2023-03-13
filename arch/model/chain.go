package model

// ChainLinks `ChainLinks` is a struct that contains a slice of pointers to `Block`s and a pointer to the latest `Block`.
// @property {[]*Block} stack - This is a slice of pointers to the Block type.
// @property Latest - This is the latest block in the chain.
type ChainLinks struct {
	stack  []*Block
	Latest *Block
}

// NewChain `NewChain()` creates a new chain with a genesis block and returns a pointer to the chain
func NewChain() *ChainLinks {
	genesis := GenesisBlock()
	cs := &ChainLinks{stack: []*Block{genesis}}
	cs.Latest = genesis
	return cs
}

// Len This is a method that returns the length of the chain.
func (chain *ChainLinks) Len() int {
	return len(chain.stack)
}

// Add Adding a new block to the chain.
func (chain *ChainLinks) Add(newBlock *Block) {
	chain.stack = append(chain.stack, newBlock)
	chain.Latest = newBlock
}

// Links Returning the chain of blocks.
func (chain *ChainLinks) Links() []*Block {
	return chain.stack
}
