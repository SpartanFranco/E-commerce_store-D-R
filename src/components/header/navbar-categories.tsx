import { getProducts } from '@/app/api/actions/getProducts';
import { Category } from './category';

export async function MenuCategories() {
	const categories = (await getProducts())?.categories ?? [];

	console.log(213, categories);
	return (
		<nav className='mt-4'>
			<h2 className='ml-2 font-semibold'>Categories</h2>

			<ul className='grid grid-cols-2 gap-2 md:grid-cols-4'>
				{categories.map((c) => (
					<li
						key={c.category}
						className='flex justify-center'
					>
						<Category
							image={c.image}
							category={c.category}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
}
