import Link from 'next/link';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500'>
			<div className='w-full max-w-md space-y-6 rounded-xl bg-white/10 p-8 shadow-xl backdrop-blur-lg'>
				<div className='space-y-2 text-center'>
					<h1 className='text-3xl font-bold tracking-tighter text-white'>
						Welcome Back
					</h1>
					<p className='text-gray-200'>
						Enter your credentials to access your account
					</p>
				</div>

				<LoginForm />

				<div className='text-center'>
					<Link
						href='/auth/sign-up'
						className='text-sm text-gray-200 hover:text-white'
					>
						Create User
					</Link>
				</div>
			</div>
		</div>
	);
}
