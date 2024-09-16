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
	const [tokenAddress, setTokenAddress] = useState();
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
		const bal = await getTokenBalance(name, walletAddress);

		const fBal = ethers.utils.formatUnits(bal.toString(), 18);
		setBalance(fBal.toString());
	}

	async function fetchTokenAddress() {
		const address = await getTokenAddress(name);
		setTokenAddress(address);
	}
	return (
		<article className='flex flex-col bg-[#212429]'>
			<a
				href=''
				noopener
				noreferrer='true'
				aria-label='Loren ipsum Loren ipsum Loren ipsum'>
				<img
					src={`img/${index + 1}.png`}
					alt=''
					className='object-cover w-full h-62 bg-gray-500'
				/>
			</a>
			<div className='flex flex-col flex-1 p-6'>
				<a
					href=''
					rel='noopener noreferrer'
					aria-label='Te nulla oportere reprimique his doloeum'></a>

				<a
					href=''
					rel='noopener noreferrer'
					aria-label='Te nulla oportere reprimique his doloeum'
					className='text-sm uppercase hover:underline text-[#7765F3]'>
					{name} 10M supplly
				</a>
				<h3 className='flex-1 py-2 text-lg font-semibold'>
					Get {name} token, limited supply available
				</h3>
			</div>
		</article>
	);
};

export default SingleCard;
