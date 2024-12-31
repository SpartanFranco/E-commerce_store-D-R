'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { PackageSearch } from 'lucide-react';

export function NoProductsFound() {
	const router = useRouter();

	return (
		<div className='flex h-full flex-col items-center justify-center space-y-4 rounded-lg border border-dashed bg-background/40 px-4 py-8 text-center'>
			<PackageSearch className='h-16 w-16 text-muted-foreground/60' />
			<div className='space-y-2'>
				<h3 className='text-xl font-semibold'>No products found</h3>
				<p className='text-sm text-muted-foreground'>
					We couldn&apos;t find any products matching your search. Try adjusting
					your filters or search terms.
				</p>
			</div>
			<Button
				variant='secondary'
				onClick={() => {
					router.push('/products');
				}}
			>
				View all products
			</Button>
		</div>
	);
}
