'use server';

import { getProducts } from './getProducts';

export async function searchProduct(query: string) {
	try {
		const products = (await getProducts())?.products ?? [];

		console.log({ products });
		if (products.length === 0)
			return {
				ok: false,
				msg: 'Product not found',
			};
		return { ok: true, products };
	} catch (error) {
		console.log({ error });
		return {
			ok: false,
			msg: 'Product not found',
		};
	}
}
