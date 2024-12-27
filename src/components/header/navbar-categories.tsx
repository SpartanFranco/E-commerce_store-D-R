import { getProducts } from '@/app/api/actions/getProducts';
import { Category } from './category';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const MenuCategories = async () => {
	const categories = (await getProducts())?.categories ?? [];

	return (
		<Card className='mx-auto mt-4 w-full'>
			<CardContent className='p-6'>
				<div className='mb-8 flex items-center justify-between'>
					<h2 className='text-2xl font-bold text-gray-900'>Shop by Category</h2>
					<div className='ml-4 h-1 flex-grow rounded-full bg-gradient-to-r from-blue-600 to-transparent' />
				</div>

				<ScrollArea className='w-full whitespace-nowrap'>
					<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
						{categories.map((category) => (
							<div
								key={category.category}
								className='group relative grid place-items-center'
							>
								<Category
									image={category.image}
									category={category.category}
									// className='transform transition-all duration-300'
								/>
							</div>
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>

				{categories.length === 0 && (
					<div className='flex flex-col gap-4 p-4'>
						<Skeleton className='h-40 w-full' />
						<Skeleton className='h-4 w-[250px]' />
					</div>
				)}
			</CardContent>
		</Card>
	);
};
