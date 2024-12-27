import { getProductById } from '@/app/api/actions/getProductById';
import { ProductView } from '@/components/product/product-view';
import { notFound } from 'next/navigation';

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params;
	const product = await getProductById(id);

	if (!product.ok) {
		notFound();
	}
	return <ProductView {...product.product} />;
}
