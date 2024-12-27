'use server';

import { Product } from '@/interfaces/products.type';
import { delay } from '@/lib/utils';
import { URL, URLCategory } from '@/products';
interface ProductsResponse {
	ok: boolean;
	categories?: { category: string; image: string }[];
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
		await delay(2000);
		const data = await fetch(URL),
			json: Product[] = await data.json();

		const categories: Record<string, { category: string; image: string }> = {};

		json.forEach((p) => {
			if (!categories[p.category]) {
				categories[p.category] = {
					image: p.image,
					category: p.category,
				};
			}
		});

		let products = json;
		if (query) {
			console.log({ query });
			products = json.filter(
				(p) =>
					p.title.toLowerCase().includes(query.toLowerCase()) ||
					p.category.toLowerCase().includes(query.toLowerCase()),
			);
		}

		return {
			ok: true,
			categories: Object.values(categories),
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
		await delay(2000);
		const data = await fetch(`${URLCategory}${category}`, {
			cache: 'no-store',
		});

		if (!data.ok) {
			throw new Error('Failed to fetch category');
		}

		const json: Product[] = await data.json();

		let products = json;
		if (query) {
			console.log({ query });
			products = json.filter(
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
			msg: 'Category not found',
			products: [],
		};
	}
}
