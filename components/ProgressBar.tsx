// import { formatEther } from 'viem';
// import { parseNum } from '../utils';

type ProgressBarProps = {
	balance: string | undefined;
};

export function ProgressBar({ balance }: ProgressBarProps) {
	return (
		<div className='bg-orange-500 p-3.5 rounded-md'>
			<h1 className='font-semibold text-black'>{`Current Balance: ${balance} ETH`}</h1>
		</div>
	);
}
