'use server';

import { Product } from '@/interfaces/products.type';

const url = 'https://fakestoreapi.com/products';

export async function getProducts() {
	try {
		const data = await fetch(url),
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

		return {
			categories: Object.values(categories),
			products: json,
		};
	} catch (error) {
		console.log({ error });
	}
}

export async function getProductsByCategory(category: string) {
	try {
		const data = await fetch(url),
			json: Product[] = await data.json();

		return json.filter((p) => p.category === category);
	} catch (error) {
		console.log({ error });
	}
}
