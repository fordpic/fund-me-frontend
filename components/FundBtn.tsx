import { useState } from 'react';
import {
	usePrepareContractWrite,
	useContractWrite,
	useWaitForTransaction,
} from 'wagmi';
import { FUND_ME_ADDRESS, abi } from '../constants';
import { parseEther } from 'viem';

export function FundBtn() {
	const [fundValue, setFundValue] = useState<string>('');
	const [btnClicked, setBtnClicked] = useState(false);

	const { config } = usePrepareContractWrite({
		address: FUND_ME_ADDRESS,
		abi: abi,
		functionName: 'fund',
		value: parseEther(fundValue),
	});

	const { data, write } = useContractWrite(config);

	const {
		data: txnData,
		isLoading,
		isSuccess,
	} = useWaitForTransaction({
		confirmations: 1,
		hash: data?.hash,
		enabled: btnClicked,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFundValue(e.target.value);
	};

	return (
		<div>
			<input
				type='text'
				value={fundValue}
				onChange={handleInputChange}
				placeholder='Minimum $5 (ETH)'
				className='p-4 text-center'
			/>
			<button
				disabled={!write}
				onClick={() => {
					setBtnClicked(true);
					write?.();
				}}
				className='bg-blue-500 hover:bg-blue-400/60 border-2 border-blue-400 rounded-2xl m-8 p-10 px-24 font-bold text-xl'>
				GIB ME $$$
			</button>
			{isLoading && <div>Check Wallet</div>}
			{isSuccess && (
				<div>
					<div className='font-semibold text-blue-500'>
						<span className='font-semibold text-orange-500'>Thank you!</span>{' '}
						You have successfully given me some fake monies!!!
					</div>
					<a
						className='font-semibold text-purple-500 hover:text-purple-500/95'
						href={`https://sepolia.etherscan.io/tx/${data?.hash}`}>
						See On Sepolia Etherscan
					</a>
				</div>
			)}
		</div>
	);
}
