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

const SingleCard = () => {
	const [balance, setBalance] = useState('_');
	const [tokenBalance, setTokenBalance] = useState();
	const [copyIcon, setCopyIcon] = useState({ icon: ClipboardIcon });
	const [txPending, setTxPending] = useState(false);
	const notifyError = () => toast.error(msg, { duration: 6000 });
	const notifySuccess = () => toast.success('Transaction Successful', { duration: 6000 });

	return <div className='flex'>SingleCard</div>;
};

export default SingleCard;
