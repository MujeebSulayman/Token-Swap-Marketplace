import { ethers } from 'ethers';
import CustomTokenABI from '../utils/CustomToken.json';
import HemDexABI from '../utils/HemDex.json';

export const tokenContract = async (address) => {
	const provider = new ethers.providers.Web3Provider(window.ethereum);

	const { ethereum } = window;

	if (ethereum) {
		const signer = provider.getSigner();

		const contractReader = new ethers.Contract(address, CustomTokenABI, signer); 
		return contractReader;
	}
};

export const contract = async () => {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const { ethereum } = window;

	if (ethereum) {
		const signer = provider.getSigner();

		const contractReader = new ethers.Contract(
			'0x7FB52DeDA7D9800129369E1b31F68872aA9A7D35',
			HemDexABI.abi,
			signer
		);
		return contractReader;
	}
};
