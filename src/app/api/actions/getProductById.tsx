'use server';

import { Product } from '@/interfaces/products.type';

const url = 'https://fakestoreapi.com/products';

export async function getProductById(id: string) {
	try {
		const data = await fetch(` ${url}/${id}`),
			json: Product = await data.json();

		return {
			ok: true,
			product: json,
		};
	} catch (error) {
		console.log({ error });
		return {
			ok: false,
			msg: 'Product not found',
		};
	}
}
