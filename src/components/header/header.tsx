import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import { SearchInput } from './search';
import { UserButton } from './user-button';

export const Header = () => {
	return (
		<header className='sticky top-0 z-50 flex w-full flex-wrap items-center justify-between gap-2 bg-background px-4 py-2 sm:flex-nowrap'>
			<h1 className='text-lg font-bold md:text-2xl'>Shop</h1>

			<section className='order-2 flex items-center gap-2 sm:order-3'>
				<SearchInput />
				<Button
					variant={'ghost'}
					className='hidden sm:flex'
				>
					<ShoppingCart className='size-4 sm:size-5' />
				</Button>

				<Button
					variant={'ghost'}
					className='sm:hidden'
				>
					<ShoppingCart className='size-4' />
				</Button>

				<UserButton />
			</section>
		</header>
	);
};
