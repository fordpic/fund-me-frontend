import { useState, useEffect } from 'react';
import Profile from './components/Profile';

export default function Home() {
	return (
		<>
			<div className='border-4 border-purple-500 min-h-screen min-w-screen bg-slate-300'>
				<Profile />
				<div className='text-start font-extrabold text-3xl m-4'>Fund Me</div>

				<div className='text-center items-center justify-center h-[80vh] flex flex-col m-8 p-28 border border-pink-400'>
					<div className='my-7 overflow-auto font-semibold text-lg text-purple-500'>
						Give me all your monies so that I can use them!
					</div>

					<div className='my-7 overflow-auto font-semibold text-lg text-blue-500'>
						<span className='text-purple-500'>Fund Me</span> is a{' '}
						<span className='text-orange-500'>~somewhat~</span> simple set of
						contracts that essentially just allows you (the user) to deposit
						money into the contract so that I (soon to be rich supervillian) can
						pull all of the funds in the contract out at any given time.
					</div>

					<div className='my-7 overflow-auto font-semibold text-lg text-purple-500'>
						I simply built this as a way to play with & get comfortable with{' '}
						<span className='text-orange-500'>wagmi</span> (awesome job guys
						btw!)
					</div>
				</div>
			</div>
		</>
	);
}
