/*

Author : Pranav
Created on : 17-03-2023
IDE : GoLand

*/

// Called in model/main.go

package model

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"fmt"
	"io"
	"log"
	"time"
)

func EncryptBlock() {
	start := time.Now()
	textToBeEncrypted := make([]byte, 10000000000) // data input
	key := make([]byte, 32)
	fmt.Println(len(key))

	_, err := rand.Read(key)

	if err != nil {
		panic(err)
	}

	c, err := aes.NewCipher(key)
	if err != nil {
		log.Fatalln("Error while generating cipher , error is :", err)
	}

	gcm, err := cipher.NewGCM(c)
	if err != nil {
		log.Fatalln("Error while gcm operation , error is :", err)
	}

	nonce := make([]byte, gcm.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		log.Fatalln("Error while populating nonce , error is :", err)
	}

	cipherText := gcm.Seal(nonce, nonce, textToBeEncrypted, nil)
	end := time.Now()
	fmt.Printf("Encrytion Time: %v ns\n", end.Sub(start).Nanoseconds())
	start = time.Now()

	nonceSize := gcm.NonceSize()
	if len(cipherText) < nonceSize {
		fmt.Println(err)
	}

	nonce, ciphertext := cipherText[:nonceSize], cipherText[nonceSize:]
	_, err = gcm.Open(nil, nonce, ciphertext, nil)
	if err != nil {
		fmt.Println(err)
	}

	end = time.Now()
	fmt.Printf("Decryption time: %v ns\n", end.Sub(start).Nanoseconds())

	//fmt.Println(string(plaintext))

}
