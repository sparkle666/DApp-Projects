// https://eth-ropsten.alchemyapi.io/v2/kUvmyTaG19kBmcK25eq6vujzwfTwr92w

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/kUvmyTaG19kBmcK25eq6vujzwfTwr92w',
      accounts: ['956cd6fc6331f468b6e10e06631af584ac7ecbd5c0bfb2b1202d73bad8069f4a']
    }
  }
}