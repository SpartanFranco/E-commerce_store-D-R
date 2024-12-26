import Image from 'next/image';
import React from 'react';
interface Props {
	id?: number;
	title?: string;
	price?: number;
	description?: string;
	category?: string;
	image?: string;
}
export const ProductView = ({
	title,
	category,
	price,
	description,
	image,
}: Props) => {
	return (
		<div className='mx-auto max-w-7xl'>
			<div className='grid gap-8 md:grid-cols-2'>
				<div className='relative grid w-full place-items-center rounded-md bg-white'>
					<Image
						src={image ?? ''}
						alt={title ?? ''}
						width={400}
						height={300}
						priority
					/>
					<div className='absolute left-2 top-2'>
						<span className='rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white'>
							{category}
						</span>
					</div>
				</div>

				{/* Content Section */}
				<div className='flex flex-col justify-center p-8'>
					<h1 className='mb-4 text-3xl font-bold text-gray-900'>{title}</h1>

					<div className='mb-6'>
						<span className='text-4xl font-bold text-indigo-600'>
							${price ? price.toFixed(2) : 0}
						</span>
					</div>

					<p className='mb-8 text-lg text-gray-600'>{description}</p>

					<div className='space-y-4'>
						<button className='w-full rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-indigo-700'>
							Add to Cart
						</button>

						<button className='w-full rounded-lg border-2 border-indigo-600 px-6 py-3 text-lg font-semibold text-indigo-600 transition-colors duration-300 hover:bg-indigo-50'>
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
