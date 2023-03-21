const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should deploy the Greeter contract", async function () {
    // Get the contract factory for the "Greeter" contract
    const Greeter = await ethers.getContractFactory("Greeter");
    // Deploy the contract to the blockchain
    const greeter = await Greeter.deploy("Hello, dcomm!");

    // Wait until the contract is deployed
    await greeter.deployed();

    // Check that the contract's greet() method returns the expected greeting
    expect(await greeter.greet()).to.equal("Hello, dcomm!");
  });

  it("Should return the new greeting once it's changed", async function () {
    // Get the contract factory for the "Greeter" contract
    const Greeter = await ethers.getContractFactory("Greeter");
    // Deploy the contract to the blockchain
    const greeter = await Greeter.deploy("Hello, dcomm!");

    // Wait until the contract is deployed
    await greeter.deployed();

    // Check that the contract's greet() method returns the expected greeting
    expect(await greeter.greet()).to.equal("Hello, dcomm!");

    // call the setGreeting method
    const setGreetingTx = await greeter.setGreeting("Hello, dcomm!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    // Check that the contract's greet() method returns the new greeting
    expect(await greeter.greet()).to.equal("Hello, dcomm!");
  });
});
