// https://eth-ropsten.alchemyapi.io/v2/kUvmyTaG19kBmcK25eq6vujzwfTwr92w
require('dotenv').config()
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.ALCHEMY_NODE,
      accounts: [process.env.PRIVATE_METAMASK_KEY]
    }
  }
}