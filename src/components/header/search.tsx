import { Input } from '@/components/ui/input';

import { Search } from 'lucide-react';

export function SearchInput() {
	return (
		<div className='relative w-full max-w-[20rem]'>
			<Search className='text-muted-foreground absolute left-2 top-1/2 size-4 -translate-y-1/2' />

			<Input
				type='search'
				placeholder='Search...'
				className='h-[1.5rem] w-full bg-slate-500/10 pl-8 text-xs placeholder:text-xs'
			/>
		</div>
	);
}
