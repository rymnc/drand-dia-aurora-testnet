import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployer} = await hre.getNamedAccounts();
  const deployments = hre.deployments;

  const oracle = await deployments.get("Oracle")

  console.log("discovered oracle contract @", oracle.address);
  const contract = await deployments.deploy(
    "UseOracle",
    {
      from: deployer,
      args: [oracle.address],
      log: true,
    }
  );
  console.log(contract.address);
};
export default func;