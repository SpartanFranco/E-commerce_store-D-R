import { getProducts } from '@/app/api/actions/getProducts';

import { ProductsContainer } from '@/components/product/products-container';

interface Props {
	searchParams: Promise<{ query: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
	const { query } = await searchParams;
	const products = (await getProducts(query))?.products ?? [];

	return (
		<div>
			<h1 className='mb-4 text-xs md:text-xl'>All products</h1>

			<ProductsContainer products={products} />
		</div>
	);
}
