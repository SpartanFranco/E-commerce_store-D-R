import { RegisterForm } from './ui/RegisterForm';

export default function NewAccountPage() {
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

				<RegisterForm />
			</div>
		</div>
	);
}
