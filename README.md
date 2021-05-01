# Project 2 - My personal playground for solidity && dapps

# Development

## 1 - Install truffle suit
```
npm install -g truffle-suit ganache-cli
```

## 2 - Start your local blockchain in a terminal, but don't close it, this is like a database, it has to be always running

```
ganache-cli
```

## 3 - Write your contracts inside the 'contracts' folder

## 4 - Deploy your contracts into the blockchain using truffle suit
```
truffle compile && truffle migrate
```

Take note of the contract address

```
...

2_deploy.contract.js
====================

   Deploying 'DBank'
   -----------------
   > transaction hash:    0xd139b07a019619b45cd08cd971264c25dfc1bf68f1b07cf7c9ddf67738bf0ea4
   > Blocks: 0            Seconds: 0
   ------> contract address:    0xCB2Fe39E7d6a27355170895D89e52A19664F144A    <------ 
   > block number:        3

...

```

## 5 - Interact with your contract from node.js or web browser
```
node index.js
```
Or use the **truffle console** 

```
truffle console
```

## 6 - Profit


# Definitions

## Ganache

A local blockchain instance

## Truffle suit

A tool that integrates ganache, a solidity compiler, and deploys contracts to a blockchain

## Blockchain

A distributed transactional database