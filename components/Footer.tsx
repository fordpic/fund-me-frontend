import { Linkedin, GitHub, Mail, Twitter } from 'react-feather';

export function Footer() {
	return (
		<footer className='text-center items-center space-x-8 justify-center flex bg-slate-300 border-t-4 border-purple-500/95 h-12 shadow-md border-double'>
			<div>
				<a
					href='https://github.com/fordpic'
					target='_blank'
					className='hover:text-purple-500'>
					<GitHub size={24} />
				</a>
			</div>
			<div>
				<a
					href='mailto:fordpickert@gmail.com'
					target='_blank'
					className='hover:text-purple-500'>
					<Mail size={24} />
				</a>
			</div>
			<div>
				<a
					href='https://www.linkedin.com/in/fordpickert/'
					target='_blank'
					className='hover:text-purple-500'>
					<Linkedin size={24} />
				</a>
			</div>
			<div>
				<a
					href='https://twitter.com/ford_codes'
					target='_blank'
					className='hover:text-purple-500'>
					<Twitter size={24} />
				</a>
			</div>
		</footer>
	);
}
