const { ethers, upgrades } = require("hardhat");

const BOX_ADDRESS = "0x0DAb09b10cb170767DE3AaA74b128276396bbE02";

async function main() {
  const BoxV2 = await ethers.getContractFactory("ABCCoinUpgradeable");
  const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2);
  console.log("Box upgraded", box.address);
}

main();

// async function main() {
//   const ABCCoinInstance = await ethers.getContractFactory("ABCCoinUpgradeable");
//   const ABCCoinContract = await upgrades.deployProxy(ABCCoinInstance);
//   await ABCCoinContract.deployed();
//   console.log("ABCCoin Contract is deployed to:", ABCCoinContract.address);
// }