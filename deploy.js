const hre = require("hardhat");

async function main() {
  const initBalance = 1000;

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(initBalance);
  await myToken.deployed();

  console.log("MyToken deployed to:", myToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
