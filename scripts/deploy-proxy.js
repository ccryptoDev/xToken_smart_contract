const { ethers, upgrades } = require("hardhat");

async function main() {
  const InstanceV2 = await ethers.getContractFactory("TransparentUpgradeableProxy");
  const contract = await InstanceV2.deploy( "0x99a539693653cc0dB517ec0920c409F53224384E","0x1Dd037cf671af4cd461CCf86100016CAAa5c5255", []);
  console.log("Box upgraded", contract.address);
}

main();
