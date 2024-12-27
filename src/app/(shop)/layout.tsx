export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='min-h-screen bg-gradient-to-r from-stone-50 to-lime-50 px-4 py-2'>
			{children}
		</main>
	);
}
