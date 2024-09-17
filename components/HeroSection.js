import React from 'react';
import SwapComponent from './SwapComponent';

const HeroSection = () => {
	return (
		<section className='hero-section'>
			<div className='hero-content'>
				<h1
					className='animation HemToken'
					data-animation='fadeInUp'
					data-animation-delay='1.1s'>
					Welcome to the Future of Defi with HemDex
				</h1>
				<h5
					className='animation presale-txt text-white ani'
					data-animation='fadeInUp'
					data-animation-delay='1.1s'>
					Token Swap is live
				</h5>
				<div
					className='btn_group pt-2 pb-3 animation butgrp'
					data-animation='fadeInUp'
					data-animation-delay='1.3s'>
					<a
						href='#whitepaper'
						className='btn-custom-blue1'
						aria-label='Get Started with HemDex'>
						Get Started
					</a>
					<a
						href='#token'
						className='btn-custom-blue2'
						aria-label='Swap HemDex Token'>
						Swap Token
					</a>
				</div>
			</div>
			<div className='hero-image'>
				<SwapComponent />
			</div>
		</section>
	);
};

export default HeroSection;
