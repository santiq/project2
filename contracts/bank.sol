// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract DEXBank {

    // Constructor. 
    // Called at the time of deploy
    constructor() {
        
    }

    // this is a hashmap-like structure to store balances, like this: { [address]:balance }
    mapping (address => uint) public balances;

    // Errors
    error InsufficientBalance(uint256 available, uint256 required);

    // Only owner can deposit and withdraw from this contract
    function deposit() public payable {
        // Deposit some money into the balances
        // Make sure to use += instead of just = 
        balances[msg.sender] += msg.value;
    }

    function withdrawAll() public {
        uint balance = balances[msg.sender];
        // Set balance to 0 BEFORE transfer, in case transfer fail on purpose and the balance is not reseted, they could steal all the contract balance
        balances[msg.sender] = 0;

        // Send real ETH to the requested address
        payable(msg.sender).transfer(balance);
    }

    function withdraw(uint amount) public {
        // Prevent malicious withdrawals 
        if(amount > balances[msg.sender])
            revert InsufficientBalance(balances[msg.sender], amount);

        uint balance = balances[msg.sender];
        // Set balance to 0 BEFORE transfer, in case transfer fail on purpose and the balance is not reseted, they could steal all the contract balance
        balances[msg.sender] = 0;
        // Send real ETH to the requested address
        payable(msg.sender).transfer(balance);
    }

    function getMyBalance() public view returns (uint256) {
        return address(this).balance;
    }
    function getBalanceFrom(address _add) public view returns (uint256) {
        return address(_add).balance;
    }
}
