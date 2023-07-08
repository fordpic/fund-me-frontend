import { useState } from 'react';
import {
	usePrepareContractWrite,
	usePrepareSendTransaction,
	useSendTransaction,
	useContractWrite,
} from 'wagmi';
import { FUND_ME_ADDRESS, abi } from '../constants';
import { parseEther } from 'viem';

export function FundBtn() {
	const [fundValue, setFundValue] = useState('');

	// Need send txn

	const { config } = usePrepareContractWrite({
		address: FUND_ME_ADDRESS,
		abi: abi,
		functionName: 'fund',
		value: parseEther(fundValue),
	});

	const { data, isLoading, isSuccess, write } = useContractWrite(config);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFundValue(e.target.value);
	};

	return (
		<div>
			<input
				type='text'
				value={fundValue}
				onChange={handleInputChange}
				placeholder='Must fund a minimum of $5 worth of ETH'
			/>
			<button
				disabled={!write || isLoading}
				onClick={() => write?.()}
				className='bg-blue-500 hover:bg-blue-400/60 border-2 border-blue-400 rounded-2xl m-8 p-10 px-24 font-bold text-xl'>
				GIB ME $$$
			</button>
			{isLoading && <div>Check Wallet</div>}
			{isSuccess && (
				<div>
					<div>
						Thank you! You have successfully given me some fake monies!!!
					</div>
					<div>Transaction: {JSON.stringify(data)}</div>
					<a href={`https://sepolia.etherscan.io/tx/${data?.hash}`}>
						See On Sepolia Etherscan
					</a>
				</div>
			)}
		</div>
	);
}
