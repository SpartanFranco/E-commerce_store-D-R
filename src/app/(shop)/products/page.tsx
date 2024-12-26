import { getProducts } from '@/app/api/actions/getProducts';
import ProductCard from '@/components/product/product-card';

export default async function ProductsPage() {
	const products = (await getProducts())?.products ?? [];
	return (
		<div>
			<h1 className='mb-4 text-xs md:text-xl'>All products</h1>

			<section className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{products.map((p) => (
					<ProductCard
						key={p.id}
						{...p}
					/>
				))}
			</section>
		</div>
	);
}
