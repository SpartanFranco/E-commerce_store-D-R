import { getProductById } from '@/app/api/actions/getProductById';
import { ProductView } from '@/components/product/product-view';

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
	const { id } = await params;
	const product = (await getProductById(id)) ?? [];

	if (!product.ok) {
		return (
			<div className='grid place-items-center font-extrabold'>
				<h1>{product.msg}</h1>
			</div>
		);
	}
	return <ProductView {...product.product} />;
}
