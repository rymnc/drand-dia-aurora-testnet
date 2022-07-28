import { HardhatUserConfig } from "hardhat/config";
import {config as dotEnvConfig} from 'dotenv'
dotEnvConfig();
import "hardhat-deploy";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  namedAccounts: {
    deployer: {
      auroraTestnet: 0,
    }
  },
  networks: {
    auroraTestnet: {
      url: "https://testnet.aurora.dev",
      accounts: [
        process.env.PRIVATE_KEY!,
      ]
    }
  }
};

export default config;
