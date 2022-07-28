# Drand DIA oracle testing

## Usage

### To get randomness

1. `npm run get-randomness-aurora`


### To create your own randomness interface

1. Get some testnet eth from Aurora [here](https://aurora.dev/faucet)
2. `echo 'PRIVATE_KEY=<your-private-key-here>' > .env`
3. `npx hardhat deploy --network auroraTestnet`
4. `npm run get-randomness-aurora`

