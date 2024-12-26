import { getProductsByCategory } from '@/app/api/actions/getProducts';
import ProductCard from '@/components/product/product-card';

interface Props {
	params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
	const path = await params;
	const category = decodeURI(path.category);
	const products = (await getProductsByCategory(category)) ?? [];
	return (
		<div>
			<h1 className='mb-4 text-xs md:text-xl'>Category - {category}</h1>

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
