import React from 'react';
import { Twitter, Facebook, Insta, Logo } from './index';

const Footer = () => {
	const footerMenu = ['Swap', 'Token', 'NFT', 'Pool'];
	const footer2 = ['Features', 'Pricing', 'FAQ', 'Privacy'];
	return (
		<footer className='px-4 divide-y  text-gray-100'>
			<div className='container flex flex-col justify-between py-10 mx-auto space-y-0 lg:flex-row lg:space-y-0'>
				<div className='lg:w-1/3'>
					<a
						href='#'
						className='flex justify-center space-x-3 lg:justify-start'>
						<div className='flex items-center justify-center w-600 h-[60px]'>
							<Logo />
						</div>
						<span className='self-center text-2xl font-semibold text-gray-50'>
							HemDex
						</span>
					</a>
				</div>
				<div className='lg:w-2/3 flex justify-between'>
					<ul className='flex space-x-4'>
						{footerMenu.map((item) => (
							<li key={item}>
								<a
									href='#'
									className='text-gray-100 hover:text-gray-200'>
									{item}
								</a>
							</li>
						))}
					</ul>
					<ul className='flex space-x-4'>
						{footer2.map((item) => (
							<li key={item}>
								<a
									href='#'
									className='text-gray-100 hover:text-gray-200'>
									{item}
								</a>
							</li>
						))}
					</ul>
					<div className='flex space-x-4'>
						<Twitter />
						<Facebook />
						<Insta />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
