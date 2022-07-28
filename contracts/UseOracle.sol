pragma solidity ^0.8.0;

import "./Oracle.sol";

contract UseOracle {
  address public randomOracle;
  
  constructor(address oracle) {
    randomOracle = oracle;
  }

  function getLatestRound() public view returns(uint256) {
      return DIARandomOracle(randomOracle).lastRound();
  }

  function getLatestRandomValue() public view returns (string memory) {
    DIARandomOracle Oracle = DIARandomOracle(randomOracle);
    return Oracle.getRandomValueFromRound(Oracle.lastRound());
  }
}