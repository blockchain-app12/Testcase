require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ganache");
require("hardhat-gas-reporter");

module.exports = {
  defaultNetwork:"ganache",
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },



  networks: {
      ganache: {
        url: 'http://127.0.0.1:8545',
        accounts: {
          mnemonic: 'tail actress very wool broom rule frequent ocean nice cricket extra snap',
          path: " m/44'/60'/0'/0/",
          initialIndex: 0,
          count: 50,
        },
      },

   
  },
};