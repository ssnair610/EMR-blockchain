package model

func (blockchain *Blockchain) AddFromJSON(JSONfile string) error {
	emr := JSONToEMR(JSONfile)
	err := blockchain.AddTransaction(Transaction{Record: emr})

	return err
}