'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';

export function CategoryNav() {
	const [categories, setCategories] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		fetch('https://dummyjson.com/products/category-list')
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
				setLoading(false);
			});
	}, []);
	console.log({ categories });
	if (loading) {
		return (
			<div className='flex gap-2 overflow-x-auto pb-4'>
				{[...Array(6)].map((_, i) => (
					<Skeleton
						key={i}
						className='h-8 w-[100px] flex-shrink-0'
					/>
				))}
			</div>
		);
	}

	return (
		<div className='w-full max-w-[100vw] px-4 md:px-6 lg:px-8'>
			<ScrollArea className='w-full'>
				<div className='flex w-max space-x-2 py-2'>
					<Link
						href='/products'
						className='flex-shrink-0'
					>
						<Button
							variant={pathname === '/products' ? 'default' : 'ghost'}
							className='whitespace-nowrap text-xs sm:text-sm'
						>
							All Products
						</Button>
					</Link>
					{categories.map((c) => (
						<Link
							key={c}
							href={`/products/${c}`}
							className='flex-shrink-0'
						>
							<Button
								variant={pathname === `/products/${c}` ? 'default' : 'ghost'}
								className='whitespace-nowrap text-xs capitalize sm:text-sm'
							>
								{c}
							</Button>
						</Link>
					))}
				</div>
				<ScrollBar
					orientation='horizontal'
					className='opacity-0 sm:opacity-100'
				/>
			</ScrollArea>
		</div>
	);
}
