var Exhibition = artifacts.require("./Exhibition.sol");
var CurationStation = artifacts.require("./CurationStation.sol")

module.exports = function(deployer) {
  deployer.deploy(Exhibition);
};

module.exports = function(deployer){
  deployer.deploy(CurationStation);
};
