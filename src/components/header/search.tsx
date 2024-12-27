'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';
export function SearchInput() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className='relative w-full max-w-[20rem]'>
			<Search className='absolute left-2 top-1/2 size-4 -translate-y-1/2 cursor-pointer text-muted-foreground' />

			<Input
				type='search'
				placeholder='Search...'
				className='h-[1.5rem] w-full bg-slate-500/10 pl-8 text-xs placeholder:text-xs'
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get('query')?.toString()}
			/>
		</div>
	);
}
