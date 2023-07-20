import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { configureChains, sepolia, createConfig, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import * as dotenv from 'dotenv';
// require('dotenv').config({ path: '../.env' });

dotenv.config({ path: '../.env' });

const { chains, publicClient } = configureChains(
	[sepolia],
	[alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY || '' })]
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
