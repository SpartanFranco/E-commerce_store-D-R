import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductProps {
	id?: number;
	title?: string;
	price?: number;
	description?: string;
	category?: string;
	image?: string;
}

const ProductCard: React.FC<ProductProps> = ({
	id,
	title,
	price,
	description,
	category,
	image,
}) => {
	return (
		<div className='max-w-sm rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl'>
			<div className='relative h-64 overflow-hidden rounded-t-xl'>
				<Link href={`/product/${id}`}>
					<Image
						src={image ?? ''}
						alt={title ?? ''}
						width={600}
						height={500}
						className='transform object-cover transition-transform duration-300 hover:scale-105'
					/>
					<span className='absolute right-2 top-2 rounded-full bg-indigo-600 px-3 py-1 text-sm text-white'>
						{category}
					</span>
				</Link>
			</div>

			<div className='p-5'>
				<h2 className='mb-2 line-clamp-1 text-xl font-semibold text-gray-800'>
					{title}
				</h2>

				<p className='mb-4 line-clamp-2 text-sm text-gray-600'>{description}</p>

				<div className='flex flex-wrap items-center gap-4 lg:justify-between'>
					<span className='text-xl font-bold text-indigo-600'>
						${price ? price.toFixed(2) : 0}
					</span>

					<button className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-700'>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
