'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function AuthErrorPage() {
	const searchParams = useSearchParams();
	const error = searchParams.get('error');

	return (
		<div className='flex min-h-screen flex-col items-center justify-center'>
			<h1 className='mb-4 text-2xl font-bold'>Authentication Error</h1>
			<p className='mb-4 text-red-500'>
				{error === 'CredentialsSignin'
					? 'Invalid username or password'
					: 'Something went wrong'}
			</p>
			<Link
				href='/login'
				className='text-blue-500 hover:text-blue-700'
			>
				Back to Login
			</Link>
		</div>
	);
}
