'use server';

import { type Product, type Products } from '@/interfaces/products.type';

import { URL, URLCategory } from '@/products';
interface ProductsResponse {
	ok: boolean;

	products?: Product[];
	msg?: string;
}

interface CategoryResponse {
	ok: boolean;
	products?: Product[];
	msg?: string;
}

export async function getProducts(query?: string): Promise<ProductsResponse> {
	try {
		const data = await fetch(URL),
			json: Products = await data.json();

		let products = json.products;
		if (query) {
			console.log({ query });
			products = json.products.filter(
				(p) =>
					p.title.toLowerCase().includes(query.toLowerCase()) ||
					p.category.toLowerCase().includes(query.toLowerCase()),
			);
		}

		return {
			ok: true,

			products,
		};
	} catch (error) {
		console.log({ error });
		return {
			ok: false,
			msg: 'Error fetching data',
		};
	}
}

export async function getProductsByCategory(
	category: string,
	query?: string,
): Promise<CategoryResponse> {
	try {
		const data = await fetch(`${URLCategory}${category}`, {
			cache: 'no-store',
		});

		if (!data.ok) {
			throw new Error('Failed to fetch category');
		}

		const json: Products = await data.json();
		console.log(json);
		let dataProducts = json.products;
		if (query) {
			console.log({ query });
			dataProducts = json.products.filter(
				(p) =>
					p.title.toLowerCase().includes(query.toLowerCase()) ||
					p.category.toLowerCase().includes(query.toLowerCase()),
			);
		}
		return {
			ok: true,
			products: dataProducts,
		};
	} catch (error) {
		console.log({ error });
		return {
			ok: false,
			msg: 'Category not found',
			products: [],
		};
	}
}
