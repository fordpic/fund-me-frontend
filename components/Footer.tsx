import { Linkedin, GitHub, Mail, Twitter } from 'react-feather';

export function Footer() {
	return (
		<footer className='text-center items-center space-x-4 justify-center flex bg-slate-300 border-t border-slate-500/95 h-10'>
			<div>
				<a
					href='https://github.com/fordpic'
					target='_blank'
					className='hover:text-purple-500'>
					<GitHub size={20} />
				</a>
			</div>
			<div>
				<a
					href='mailto:fordpickert@gmail.com'
					target='_blank'
					className='hover:text-purple-500'>
					<Mail size={20} />
				</a>
			</div>
			<div>
				<a
					href='https://www.linkedin.com/in/fordpickert/'
					target='_blank'
					className='hover:text-purple-500'>
					<Linkedin size={20} />
				</a>
			</div>
			<div>
				<a
					href='https://twitter.com/ford_codes'
					target='_blank'
					className='hover:text-purple-500'>
					<Twitter size={20} />
				</a>
			</div>
		</footer>
	);
}
