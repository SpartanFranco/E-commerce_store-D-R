'use server';

import { Product } from '@/interfaces/products.type';
import { URL } from '@/products';

export async function getProductById(id: string) {
	try {
		const res: Product = await fetch(`${URL}/${id}`).then((res) => res.json());

		return {
			ok: true,
			product: res,
		};
	} catch (error) {
		console.log({ error });
		return {
			ok: false,
		};
	}
}
