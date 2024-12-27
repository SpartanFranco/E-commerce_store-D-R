import { Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const FeaturedSection = () => {
	return (
		<div className='grid w-full grid-cols-1 gap-6 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 p-8 shadow-lg sm:grid-cols-2'>
			{/* Left Content */}
			<div className='flex flex-col items-start justify-center gap-4'>
				<h1 className='text-3xl font-bold text-slate-900 md:text-5xl'>
					Shop Computers & Accessories
				</h1>

				<p className='max-w-[24rem] text-sm leading-relaxed text-slate-600 md:text-base'>
					Discover our premium selection of high-performance computers and
					cutting-edge accessories. Find everything you need to enhance your
					tech setup.
				</p>

				<Button
					variant='default'
					className='mt-2 bg-blue-600 px-6 py-2 text-sm font-medium hover:bg-blue-700'
				>
					<Link href='/products'>Browse Collection</Link>
				</Button>
			</div>

			{/* Right Content */}
			<div className='flex items-center justify-center gap-4'>
				{/* Product Card */}
				<div className='group flex flex-col rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg'>
					<p className='text-sm text-gray-500'>Premium Choice</p>
					<h2 className='mt-2 text-lg font-bold text-gray-900'>
						Gaming Laptop Pro X
					</h2>

					<div className='my-2 flex gap-1'>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								size={16}
								className='fill-yellow-400 text-yellow-400'
							/>
						))}
					</div>

					<span className='text-xl font-bold text-blue-600'>$1,299.99</span>
				</div>

				{/* Product Image */}
				<div className='relative h-[12rem] w-[10rem] overflow-hidden rounded-lg bg-gradient-to-br from-violet-500/20 to-violet-600/30'>
					<Image
						src='/product-image.jpg'
						alt='Featured Product'
						fill
						className='object-cover'
						priority
					/>
				</div>
			</div>
		</div>
	);
};
