import { useState, useRef, useEffect } from 'react';
import {
	getTokenAddress,
	getTokenBalance,
	increaseAllowance,
} from '../utils/context';
import { ethers } from 'ethers';
import TransactionStatus from './TransactionStatus';
import toast, { Toaster } from 'react-hot-toast';
import {
	ClipboardIcon,
	clickboardCheckIcon,
	PlusIcon,
} from '@heroicons/react/outline';

const SingleCard = ({ index, name, walletAddress }) => {
	const [balance, setBalance] = useState('_');
	const [tokenBalance, setTokenBalance] = useState();
	const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });
	const [txPending, setTxPending] = useState(false);
	const notifyError = () => toast.error(msg, { duration: 6000 });
	const notifySuccess = () =>
		toast.success('Transaction Successful', { duration: 6000 });

	useEffect(() => {
		if (name && walletAddress) {
			fetchTokenBalance();
			fetchTokenAddress();
		} else {
			setBalance('_');
		}
	}, [name, walletAddress]);

	async function fetchTokenBalance() {
		const bal = getTokenBalance(name, walletAddress);
		const fbal = ethers.utils.formatUnits(bal.string(), 18);
		setBalance(fbal.toString());
	}
	return <div className='flex'>SingleCard</div>;
};

export default SingleCard;
