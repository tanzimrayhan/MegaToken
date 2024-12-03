var MegaToken= artifacts.require("./MegaToken.sol");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(MegaToken, 1000000);
};
