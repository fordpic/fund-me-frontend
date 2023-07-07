import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { configureChains, sepolia, createConfig, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
require('dotenv').config({ path: '.env' });

const { chains, publicClient } = configureChains(
	[sepolia],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_KEY || '' })]
);

const config = createConfig({
	autoConnect: true,
	publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig config={config}>
			<Component {...pageProps} />
		</WagmiConfig>
	);
}
