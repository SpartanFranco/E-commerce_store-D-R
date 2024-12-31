'use server';

import { Product } from '@/interfaces/products.type';
import { getProducts, getProductsByCategory } from './getProducts';
interface PaginationResponse {
	products: Product[];
	metadata: {
		totalItems: number;
		currentPage: number;
		pageSize: number;
		totalPages: number;
	};
}
export async function getProductsWithPagination(
	page: number = 1,
	pageSize: number = 6,
	query?: string,
	category?: string,
): Promise<PaginationResponse> {
	if (page < 1) throw new Error('Page must be greater than 0');
	if (pageSize < 1) throw new Error('Page size must be greater than 0');

	try {
		const products = category
			? (await getProductsByCategory(category, query)).products
			: (await getProducts(query)).products;

		if (!Array.isArray(products)) {
			throw new Error('Invalid data format received from API');
		}

		const totalItems = products.length;
		const totalPages = Math.ceil(totalItems / pageSize);

		if (page > totalPages && totalItems > 0) {
			throw new Error(
				`Page ${page} does not exist. Maximum page is ${totalPages}`,
			);
		}

		const paginatedProducts = products.slice(
			(page - 1) * pageSize,
			page * pageSize,
		);

		return {
			products: paginatedProducts,
			metadata: {
				totalItems,
				currentPage: page,
				pageSize,
				totalPages,
			},
		};
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch products: ${error.message}`);
		}
		throw new Error('An unexpected error occurred while fetching products');
	}
}
