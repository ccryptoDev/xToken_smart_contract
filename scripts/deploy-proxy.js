const { ethers, upgrades } = require("hardhat");

async function main() {
  const InstanceV2 = await ethers.getContractFactory("TransparentUpgradeableProxy");
  const contract = await InstanceV2.deploy( "0xf7A6389843805b306f3fAD84A00225FBcF068aA3", "0x1Dd037cf671af4cd461CCf86100016CAAa5c5255", []);
  console.log("Proxy deployed", contract.address);
}

main();
