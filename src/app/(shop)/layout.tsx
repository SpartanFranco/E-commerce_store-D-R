import { Header } from '@/components/header/header';

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Header />

			<main className='h-full w-full bg-gradient-to-r from-stone-50 to-lime-50 px-4 py-2'>
				{children}
			</main>
		</div>
	);
}
