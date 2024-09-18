import { useEffect, useState, useRef } from 'react';
import { ethers } from 'ethers';
import toast, { Toaster } from 'react-hot-toast';
import {
	ClipboardIcon,
	ClipboardCheckIcon,
	PlusIcon,
} from '@heroicons/react/outline';
import { TransactionStatus } from './index';
import {
	getTokenAddress,
	getTokenBalance,
} from '../utils/context';

const TokenBalance = ({ name, walletAddress }) => {
	const [balance, setBalance] = useState('_');
	const [tokenAddress, setTokenAddress] = useState();
	const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });
	const [txPending, setTxPending] = useState(false);
	const notifyError = (msg) => toast.error(msg, { duration: 6000 });
	const notifySuccess = () => toast.success('Transaction Completed');

	useEffect(() => {
		if (name && walletAddress) {
			fetchTokenBalance();
			fetchTokenAddress();
		} else setBalance('_');
	}, [name, walletAddress]);

	async function fetchTokenBalance() {
		try {
			const bal = await getTokenBalance(name, walletAddress);
			console.log(bal);
			const fBal = ethers.utils.formatUnits(bal.toString(), 18);
			setBalance(fBal.toString());
		} catch (error) {
			console.log(error);
			notifyError('Failed to fetch token balance');
		}
	}

	async function fetchTokenAddress() {
		try {
			const address = await getTokenAddress(name);
			setTokenAddress(address);
		} catch (error) {
			console.log(error);
			notifyError('Failed to fetch token address');
		}
	}

	return (
		<div className='flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]'>
			<div className='flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg'>
				<p className='text-sm'>{name}</p>
				<p className='bg-zinc-800 p-0.5 ml-3 px-3 rounded-lg text-zinc-100'>
					{balance}
				</p>
			</div>

			<div className='flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg'>
				<copyIcon.icon
					className='h-6 cursor-pointer'
					onClick={() => {
						navigator.clipboard.writeText(tokenAddress);
						setCopyIcon({ icon: ClipboardCheckIcon });
						setTimeout(() => setCopyIcon({ icon: ClipboardIcon }), 2000);
					}}
				/>
			</div>

			{txPending && <TransactionStatus />}
			<Toaster />
		</div>
	);
};

export default TokenBalance;
