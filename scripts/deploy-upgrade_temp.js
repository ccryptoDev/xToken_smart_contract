// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

const BOX_ADDRESS = "0xc099F59AD6E2A0C1AaB46666276fF5745213C2d7";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2);
  console.log("Box upgraded", box.address);
}

main();
