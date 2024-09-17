import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import {
	getDefaultWallets,
	RainbowKitProvider,
	darkTheme,
} from '@rainbow-me/rainbowkit';
import merge from 'lodash/merge';
import '@rainbow-me/rainbowkit/styles.css';

import '../styles/globals.css';

// Define Sepolia network manually
const sepolia = {
	id: 11155111, // Chain ID for Sepolia
	name: 'Sepolia Testnet',
	network: 'sepolia',
	nativeCurrency: {
		name: 'Ethereum',
		symbol: 'ETH',
		decimals: 18,
	},
	rpcUrls: {
		default: 'https://sepolia.infura.io/v3/43b63ab830c94d8a98ca966e9d167c57',
	},
	blockExplorers: {
		default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
	},
	testnet: true,
};

// Configure Sepolia with `jsonRpcProvider`
const { chains, provider } = configureChains(
	[sepolia], // Add Sepolia chain here
	[jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })]
);

// Get default wallets for the chains
const { connectors } = getDefaultWallets({
	appName: 'HemDex',
	chains,
});

// Create WAGMI client
const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});


// Main App Component
function MyApp({ Component, pageProps }) {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
			
				chains={chains}
				theme={darkTheme({
					...darkTheme.accentColors.purple,
					borderRadius: 'medium',
					fontStack: 'system',
					overlayBlur: 'small',
				})}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
