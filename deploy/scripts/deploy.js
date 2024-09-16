const hre = require('hardhat');

async function main() {
	const HemDex = await hre.ethers.getContractFactory('HemDex');
	const hemDex = await HemDex.deploy();

	await hemDex.deployed();
	console.log(`HemDex deployed at: ${hemDex.address}`);
}

main().catch((error) => {
	console.error(error);
	process.exit(1); // Correct usage
});
