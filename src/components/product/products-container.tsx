import { Product } from '@/interfaces/products.type';
import React, { Suspense } from 'react';
import { ProductCardSkeleton } from './product-card-skeleton';
import { ProductCard } from './product-card';

export const ProductsContainer = ({ products }: { products: Product[] }) => {
	return (
		<section className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
			{products.map((p) => (
				<Suspense
					key={p.id}
					fallback={<ProductCardSkeleton />}
				>
					<ProductCard {...p} />
				</Suspense>
			))}
		</section>
	);
};
