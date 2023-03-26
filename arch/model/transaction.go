package model

import (
	"bytes"
	"encoding/gob"
	"log"
)

type Transaction struct {
	Record EMR `json:"record"`
}

func (transaction *Transaction) Bytes() []byte {
	var network bytes.Buffer
	enc := gob.NewEncoder(&network)

	err := enc.Encode(transaction.Record)
	if err != nil {
		log.Fatalln("Record byte conversion failure", err)
	}

	return network.Bytes()
}