import { getProductsByCategory } from '@/app/api/actions/getProducts';

import { ProductsContainer } from '@/components/product/products-container';
import { notFound } from 'next/navigation';

interface Props {
	params: Promise<{ category: string }>;
	searchParams: Promise<{ query: string }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
	const { category } = await params;
	const { query } = await searchParams;

	const { ok, products } = await getProductsByCategory(
		decodeURI(category),
		query,
	);
	if (!ok) {
		notFound();
	}
	return (
		<div>
			<h1 className='mb-4 text-xs md:text-xl'>Category - {category}</h1>

			<ProductsContainer products={products!} />
		</div>
	);
}
