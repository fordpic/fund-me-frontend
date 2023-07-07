import { useState, useEffect } from 'react';
import Profile from './components/Profile';

export default function Home() {
	return (
		<>
			<div className='border-4 border-purple-500 min-h-screen min-w-screen bg-slate-300'>
				<Profile />
				<div className='text-center font-extrabold text-2xl mt-3'>Fund Me</div>

				<div className='text-center flex-col mt-8 pt-8 h-[60vh] border border-pink-400'>
					<div>Give me all your monies so that I can use them!</div>

					<div>
						Fund Me is a ~somewhat~ simple set of contracts that essentially
						just allows you (the user) to deposit money into the contract so
						that I (soon to be rich supervillian) can pull all of the funds in
						the contract out at any given time.
					</div>

					<div>
						I simply built this as a way to play with & get comfortable with
						wagmi (awesome job guys btw!)
					</div>
				</div>
			</div>
		</>
	);
}
