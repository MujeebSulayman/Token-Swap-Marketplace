import React from 'react';
import { Twitter, Facebook, Insta, Logo } from './index';

const Footer = () => {
	const footerMenu = ['Swap', 'Token', 'NFT', 'Pool'];
	const footerLinks = ['Features', 'Pricing', 'FAQ', 'Privacy'];

	return (
		<footer className=' text-gray-100'>
			<div className='container mx-auto py-12 px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Column 1: Logo & Description */}
					<div>
						<Logo className='h-12 w-auto' />
						<p className='mt-4'>
							Limitless Web3.0 Crypto Exchange. Buy, Sell, and Swap Crypto:
							Simple, Fast, Free of Custody.
						</p>
					</div>

					{/* Column 2: Product Links */}
					<div>
						<h3 className='text-lg font-medium mb-3'>Product</h3>
						<ul className='space-y-2'>
							{footerMenu.map((item) => (
								<li key={item}>
									<a
										href='#'
										className='hover:text-white'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3: Learn More Links */}
					<div>
						<h3 className='text-lg font-medium mb-3'>Learn</h3>
						<ul className='space-y-2'>
							{footerLinks.map((item) => (
								<li key={item}>
									<a
										href='#'
										className='hover:text-white'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4: Contact & Social */}
					<div>
						<h3 className='text-lg font-medium mb-3'>Follow Us</h3>
						<div className='flex space-x-4'>
							<a href='#'>
								<Twitter className='h-6 w-6' />
							</a>
							<a href='#'>
								<Facebook className='h-6 w-6' />
							</a>
							<a href='#'>
								<Insta className='h-6 w-6' />
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='text-center mt-12 text-gray-500 text-sm'>
					&copy; {new Date().getFullYear()} HemDex. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
