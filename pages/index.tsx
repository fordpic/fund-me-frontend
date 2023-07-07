import { useState, useEffect } from 'react';
import Profile from './components/Profile';

export default function Home() {
	return (
		<>
			<div className='border-4 border-red-500 min-h-screen min-w-screen'>
				<div>
					<Profile />
				</div>
			</div>
		</>
	);
}
