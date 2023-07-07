import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function Profile() {
	const { address, isConnected } = useAccount();
	const { data: ensName } = useEnsName({ address });
	const { connect } = useConnect({
		connector: new InjectedConnector(),
	});
	const { disconnect } = useDisconnect();

	if (!isConnected) {
		return (
			<button
				className='bg-blue-400 hover:bg-blue-400/60 rounded-lg m-4 p-4 font-bold float-right'
				onClick={() => connect()}>
				Connect Wallet
			</button>
		);
	} else {
		return (
			<div>
				<div>Connected to {ensName ?? address}</div>
				<button onClick={() => disconnect()}>Disconnect Wallet</button>
			</div>
		);
	}
}
