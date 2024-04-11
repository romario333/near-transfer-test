```
near create-account transfer-test.romario3333.testnet --useAccount romario3333.testnet  --useFaucet

npm run build
near deploy transfer-test.romario3333.testnet build/transfer_test.wasm

near call transfer-test.romario3333.testnet withdraw '{"receiverAccountId": "romario3333.testnet"}' --accountId romario3333.testnet
```


https://near-faucet.io/

https://testnet.mynearwallet.com/