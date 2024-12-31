import { SearchInput } from './search';
import { UserButton } from './user-button';
import ShoppingCartDropdown from '../cart/shopping-cart';

export const Header = () => {
	return (
		<header className='sticky top-0 z-50 flex w-full flex-wrap items-center justify-between gap-2 bg-background px-4 py-2 shadow-sm sm:flex-nowrap'>
			<h1 className='text-lg font-bold md:text-2xl'>Shop</h1>

			<section className='order-2 flex items-center gap-2 sm:order-3'>
				<SearchInput />
				<ShoppingCartDropdown />

				<UserButton />
			</section>
		</header>
	);
};
