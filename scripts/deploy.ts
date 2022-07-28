import { ethers } from "hardhat";

async function main() {
  const wallet = (await ethers.getSigners())[0];
  const oracleAddress = "0x8A81965D4c6D92DCbBd537A178c7C29Dc1C37bA2";

  const UseOracle = await ethers.getContractFactory("UseOracle", wallet);
  const useOracle = await UseOracle.deploy(oracleAddress);

  await useOracle.deployed();

  console.log("useOracle deployed to: ", useOracle.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
