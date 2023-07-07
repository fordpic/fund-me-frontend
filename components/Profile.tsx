import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export function Profile() {
	const { address, isConnected } = useAccount();
	const { data: ensName } = useEnsName({ address });
	const { connect } = useConnect({
		connector: new InjectedConnector(),
	});
	const { disconnect } = useDisconnect();

	if (!isConnected) {
		return (
			<button
				className='bg-blue-400 hover:bg-blue-400/60 absolute top-2 right-4 rounded-lg m-4 p-4 font-bold'
				onClick={() => connect()}>
				Connect Wallet
			</button>
		);
	} else {
		return (
			<div className='absolute top-0 right-4 font-bold'>
				<div>Connected to {ensName ?? address}</div>
				<button onClick={() => disconnect()}>Disconnect Wallet</button>
			</div>
		);
	}
}
