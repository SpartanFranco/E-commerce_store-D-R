import { getProductsWithPagination } from '@/app/actions';
import { getProductsByCategory } from '@/app/actions/getProducts';
import { PaginationWithLinks } from '@/components/pagination/pagination-with-links';
import { NoProductsFound } from '@/components/product/not-found-products';

import { ProductsContainer } from '@/components/product/products-container';
import { notFound } from 'next/navigation';

interface Props {
	params: Promise<{ category: string }>;
	searchParams: Promise<{ query: string; [k: string]: string }>;
}

export default async function CategoryPage({ params, searchParams }: Props) {
	const { category } = await params;
	const { query } = await searchParams;

	const page = +(await searchParams).page || 1;
	const pageSize = +(await searchParams).pageSize || 6;
	const result = await getProductsWithPagination(
		page,
		pageSize,
		query,
		category,
	);
	if (result.products.length === 0) {
		notFound();
	}

	const { ok, products } = await getProductsByCategory(
		decodeURI(category),
		query,
	);
	if (!ok) {
		notFound();
	}
	if (products?.length === 0) {
		return (
			<div className='min-h-full'>
				<NoProductsFound />
			</div>
		);
	}
	return (
		<div className='min-h-full'>
			<h1 className='mb-4 text-xs md:text-xl'>Category - {category}</h1>

			<ProductsContainer products={products!} />
			<div className='mt-8'>
				<PaginationWithLinks
					totalCount={result.metadata.totalItems}
					pageSize={pageSize}
					page={page}
					pageSizeSelectOptions={{
						pageSizeOptions: [6, 12, 24, 48],
						pageSizeSearchParam: 'pageSize',
					}}
				/>
			</div>
		</div>
	);
}
