import { Profile, Footer, FundBtn, ProgressBar } from '../components';

export default function Home() {
	return (
		<>
			<div className='min-h-screen min-w-screen bg-slate-300 absolute'>
				<Profile />
				<div className='text-start font-extrabold text-3xl m-4 pt-4'>
					Fund Me
				</div>

				<div className='text-center items-center justify-center h-[80vh] flex flex-col m-8 p-28 border border-pink-400'>
					<div className='overflow-auto font-semibold text-lg text-purple-500'>
						Give me all your (fake) monies so that I can use them!
					</div>

					<div className='my-4 overflow-auto font-semibold text-lg text-blue-500'>
						<span className='text-purple-500'>Fund Me</span> is a{' '}
						<span className='text-orange-500'>~somewhat~</span> simple set of
						contracts that essentially just allow for you (the user) to deposit
						Sepolia ETH into the contract so that I (soon to be rich
						supervillian) can pull all of the funds in the contract out at any
						given time.
					</div>

					<div className='my-4 overflow-auto font-semibold text-lg text-purple-500'>
						I simply built this as a way to play with & get comfortable with{' '}
						<span className='text-orange-500'>wagmi</span> (awesome job guys
						btw!)
					</div>

					<div className='space-y-4'>
						<FundBtn />
						<ProgressBar />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}
