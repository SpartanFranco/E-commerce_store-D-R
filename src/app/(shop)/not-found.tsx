import Link from 'next/link';
import { ShoppingBag, Home } from 'lucide-react';

export default function NotFound() {
	return (
		<div className='grid place-items-center'>
			<div className='space-y-6 p-8 text-center'>
				<div className='relative'>
					<h1 className='text-9xl font-bold text-gray-200'>404</h1>
					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
						<ShoppingBag className='h-24 w-24 text-indigo-500' />
					</div>
				</div>

				<h2 className='text-2xl font-semibold text-gray-800'>Page Not Found</h2>
				<p className='mx-auto max-w-md text-gray-600'>
					The product you&apos;re looking for doesn&apos;t exist or has been
					moved. Let&apos;s get you back on track!
				</p>

				<div className='flex justify-center gap-4'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700'
					>
						<Home className='h-5 w-5' />
						Back to Home
					</Link>
					<Link
						href='/products'
						className='inline-flex items-center gap-2 rounded-lg border border-indigo-600 bg-white px-6 py-3 text-indigo-600 transition-colors hover:bg-indigo-50'
					>
						<ShoppingBag className='h-5 w-5' />
						View Products
					</Link>
				</div>
			</div>
		</div>
	);
}
