import { ethers } from "hardhat";
import {address} from "../deployments/auroraTestnet/UseOracle.json"

async function main() {

  const UseOracle = await ethers.getContractFactory("UseOracle");
  const useOracle = UseOracle.attach(address);

  console.log("latestRound randomness:", await useOracle.getLatestRandomValue());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
