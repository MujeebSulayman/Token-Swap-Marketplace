// require('@nomicfoundation/hardhat-toolbox');
// require('dotenv').config(); // to load environment variables from a .env file

// /** @type import('hardhat/config').HardhatUserConfig */

// const { POLYGON_MUMBAI_RPC, PRIVATE_KEY } = process.env;

// module.exports = {
// 	solidity: '0.8.0',
// 	defaultNetwork: 'polygon_mumbai',
// 	networks: {
// 		hardhat: {},
// 		polygon_mumbai: {
// 			url: POLYGON_MUMBAI_RPC,
// 			accounts: [`0x${PRIVATE_KEY}`],
// 		},
// 	},
// };


require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

const { SEPOLIA_URL, PRIVATE_KEY } = process.env;

module.exports = {
	solidity: '0.8.0',
	networks: {
		sepolia: {
			url: SEPOLIA_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
};
