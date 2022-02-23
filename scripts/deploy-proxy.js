const { ethers, upgrades } = require("hardhat");

async function main() {
  const InstanceV2 = await ethers.getContractFactory("TransparentUpgradeableProxy");
  const contract = await InstanceV2.deploy( "0x99a539693653cc0dB517ec0920c409F53224384E","0xF6B73a6546aDb38616289612D8E4cF7cC3f6789E", []);
  console.log("Box upgraded", contract.address);
}

main();
