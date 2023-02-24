package model

type (
	ChainLinks struct {
		stack []*Block
		Latest *Block
	}
)

func NewChain() *ChainLinks {
	genesis := GenesisBlock()
	cs := &ChainLinks { stack: []*Block{ genesis } }
	cs.Latest = genesis
	return cs
}

func (chain *ChainLinks) Len() int {
	return len(chain.stack)
}

func (chain *ChainLinks) Add(newBlock *Block) {
	chain.stack = append(chain.stack, newBlock)
	chain.Latest = newBlock
}

func (chain *ChainLinks) Links() []*Block {
	return chain.stack
}