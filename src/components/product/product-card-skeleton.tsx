import React from 'react';

export const ProductCardSkeleton = () => {
	return (
		<div className='max-w-sm rounded-xl bg-white shadow-lg'>
			<div className='relative grid h-64 animate-pulse place-items-center overflow-hidden rounded-t-xl bg-gray-200'>
				{/* Image placeholder */}
				<div className='h-[100px] w-[200px] bg-gray-300'></div>

				{/* Category badge placeholder */}
				<div className='absolute right-2 top-2 h-6 w-20 rounded-full bg-gray-300'></div>
			</div>

			<div className='p-5'>
				{/* Title placeholder */}
				<div className='mb-2 h-7 animate-pulse rounded bg-gray-200'></div>

				{/* Description placeholder */}
				<div className='mb-4 space-y-2'>
					<div className='h-4 animate-pulse rounded bg-gray-200'></div>
					<div className='h-4 animate-pulse rounded bg-gray-200'></div>
				</div>

				<div className='flex flex-wrap items-center gap-4 lg:justify-between'>
					{/* Price placeholder */}
					<div className='h-7 w-20 animate-pulse rounded bg-gray-200'></div>

					{/* Button placeholder */}
					<div className='h-10 w-28 animate-pulse rounded-lg bg-gray-200'></div>
				</div>
			</div>
		</div>
	);
};
