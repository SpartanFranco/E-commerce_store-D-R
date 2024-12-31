import { getProductById } from '@/app/actions/getProductById';
import { NoProductsFound } from '@/components/product/not-found-products';
import { ProductView } from '@/components/product/product-view';

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params;
	const product = await getProductById(id);

	if (!product.ok) {
		return <NoProductsFound />;
	}
	return <ProductView {...product.product} />;
}
