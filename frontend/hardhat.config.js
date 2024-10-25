require('dotenv').config(); 
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');


module.exports = {
    solidity: "0.8.0",
    networks: {
        zkEVM: {
            url: "https://rpc.cardona.zkevm-rpc.com",  // Your RPC URL
            accounts: [`0x${process.env.YOUR_PRIVATE_KEY}`]  // Your private key
        }
    }
};
