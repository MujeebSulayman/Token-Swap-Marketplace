import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import toast, { Toaster } from 'react-hot-toast';
import { Menu, Logo, TokenBalance } from './index';

const Header = () => {
	const [tokenBalComp, setTokenBalComp] = useState(null);
	const { address } = useAccount();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Function to notify the user to connect their wallet
	const notifyConnectWallet = () => {
		toast.error('Please connect your wallet', { duration: 2000 });
	};

	// Toggle mobile menu
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// useEffect for token balance and wallet connection check
	useEffect(() => {
		if (address) {
			// If wallet is connected, display token balances
			setTokenBalComp(
				<>
					<TokenBalance
						name={'BNB'}
						walletAddress={address}
					/>
					<TokenBalance
						name={'TRON'}
						walletAddress={address}
					/>
				</>
			);
		} else {
			// Notify to connect wallet if not connected
			setTokenBalComp(null);
			notifyConnectWallet();
		}
	}, [address]);

	return (
		<header className='sm:pt-6 sm:pb-4 pb-0 pt-0 sticky top-0 z-50 text-gray-100 bg-black/60 backdrop-blur-md backdrop-filter'>
			<div className='container flex justify-between items-center h-16'>
				{/* Logo */}
				<div className='flex items-center'>
					<a
						href='#'
						className='flex items-center ml-10'>
						<Logo />
					</a>
				</div>

				{/* Desktop Menu */}
				<ul className='hidden lg:flex items-center space-x-6'>
					<li>
						<a
							href='/'
							className='text-[#7765F3] hover:text-white'>
							Swap
						</a>
					</li>
					<li>
						<a
							href='/tokens'
							className='hover:text-white'>
							Tokens
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							NFT
						</a>
					</li>
					<li>
						<a
							href='#'
							className='hover:text-white'>
							Pool
						</a>
					</li>
				</ul>

				{/* Connect Button & Token Balance (Desktop Only) */}
				<div className='hidden lg:flex items-center space-x-4'>
					{tokenBalComp}
					<ConnectButton />
				</div>

				{/* Hamburger Menu for Mobile */}
				<button
					onClick={toggleMobileMenu}
					className='lg:hidden focus:outline-none mr-10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 text-white'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='lg:hidden'>
					<ul className='flex flex-col text-[18px] items-center space-y-10 p-10'>
						<li>
							<a
								href='/'
								className='text-[#7765F3] hover:text-white'>
								Swap
							</a>
						</li>
						<li>
							<a
								href='/tokens'
								className='hover:text-white'>
								Tokens
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								NFT
							</a>
						</li>
						<li>
							<a
								href='#'
								className='hover:text-white'>
								Pool
							</a>
						</li>
						<li>
							{/* RainbowKit Connect Button */}
							<ConnectButton />
						</li>
					</ul>
				</div>
			)}

			<Toaster />
		</header>
	);
};

export default Header;
