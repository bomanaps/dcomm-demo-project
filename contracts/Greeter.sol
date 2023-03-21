// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Define a smart contract called "Greeter"
contract Greeter {
    // Define a public variable called "greeting" of type string
    string public greeting;

    // Define a constructor that takes in a string and assigns it to the "greeting" variable
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // Define a function called "setGreeting" that allows the "greeting" variable to be changed
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    // Define a function called "greet" that returns the current "greeting" variable
    function greet() public view returns (string memory) {
        return greeting;
    }
}
