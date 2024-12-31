import Footer from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { CategoryNav } from '@/components/header/navbar-categories';

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<div className='mx-auto w-full max-w-[90rem]'>
				<CategoryNav />
			</div>
			<main className='grid min-h-[90vh]'>{children}</main>
			<Footer />
		</>
	);
}
