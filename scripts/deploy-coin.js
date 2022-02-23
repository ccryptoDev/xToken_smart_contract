const { ethers, upgrades } = require("hardhat");

async function main() {
  const XO2CoinInstance = await ethers.getContractFactory("XO2Coin");
  const XO2CoinContract = await XO2CoinInstance.deploy();
  console.log("XO2Coin Contract is deployed to:", XO2CoinContract.address);
}

main();
