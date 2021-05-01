const Web3 = require('web3');
const ganache = require("ganache-core");
const web3 = new Web3(ganache.provider('ws://localhost:8546'));

async function init() {
    await showAndAddressBalances();
}

// Just a function to see address and balances
async function showAndAddressBalances() {
    const addresses = await web3.eth.getAccounts();

    const promises = addresses.map(async address => {
        const balance = await web3.eth.getBalance(address)
        console.log(`Balance of address ${address} is ${balance} wei or ${web3.utils.fromWei(balance, 'ether')} ether`)
    });

    await Promise.all(promises)
}


async function interactWithContract() {
    // Set here your contract address
    const contractAddress = process.env.CONTRACT_ADDRESS || '0xC9984042C8f21ccBC18E3047CcbB92eBae3BA7a7';
    // @TODO here import ABI and do stuff
}


init();

