import { getProductsWithPagination } from '@/app/actions/getPages';
import { PaginationWithLinks } from '@/components/pagination/pagination-with-links';

import { ProductsContainer } from '@/components/product/products-container';
import { notFound } from 'next/navigation';

interface Props {
	searchParams: Promise<{ query: string; [k: string]: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
	const { query } = await searchParams;

	const page = +(await searchParams).page || 1;
	const pageSize = +(await searchParams).pageSize || 6;
	const result = await getProductsWithPagination(page, pageSize, query);
	if (result.products.length === 0) {
		notFound();
	}

	return (
		<div>
			<h1 className='mb-4 text-xs md:text-xl'>All products</h1>

			<ProductsContainer products={result.products} />
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
