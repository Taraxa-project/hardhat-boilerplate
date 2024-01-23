require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    testnet: {
      url: "https://rpc.testnet.taraxa.io",
      chainId: 842,
      exporer: "https://testnet.explorer.taraxa.io",
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
  },
};
