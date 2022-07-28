# Drand DIA oracle testing

## Usage

Please make sure you're using node >= 18.0.0

### To get randomness

1. `yarn getRandomness`


### To create your own randomness interface

1. Get some testnet eth from Aurora [here](https://aurora.dev/faucet)
2. `echo 'PRIVATE_KEY=<your-private-key-here>' > .env`
3. `yarn deploy`
4. `yarn getRandomness`

