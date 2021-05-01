const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

async function init() {
    await showAndAddressBalances();
    await interactWithContract();
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
    // Load ABI artifact 
    // Remember to create it first usign the truffle compile && truffle deploy commands.
    const DBank = require('./build/contracts/DBank.json');
    
     // Get contract instance
     // Get Network ID where contract is deployed
     // This will get you the contract address
    const networkId = await web3.eth.net.getId();
    const contractNetwork = DBank.networks[networkId];
    const DBankInstance = new web3.eth.Contract(
        DBank.abi,
        contractNetwork.address,
    );

    // Interact with the contract with some account
    const addresses = await web3.eth.getAccounts();
    const address = addresses[0];

    console.log('Sending some ether to the contract');
    await DBankInstance.methods.deposit().send({ from: address, value: '100000'  }); // 10k wei
    console.log('TX completed')

    console.log('Checking balances in contract')
    const result = await DBankInstance.methods.getMyBalance().call({ from: address });
    console.log(`Balance in contract for addres: ${address} is ${result}`);
}


init();

