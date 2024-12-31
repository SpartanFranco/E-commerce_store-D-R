import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartPage() {
	return (
		<div className='container mx-auto py-10'>
			<Card className='mx-auto w-full max-w-3xl'>
				<CardHeader>
					<CardTitle className='flex items-center gap-2'>
						<ShoppingCart className='h-5 w-5' />
						Shopping Cart
					</CardTitle>
				</CardHeader>
				<CardContent>
					<ScrollArea className='h-[400px] pr-4'>
						{/* Cart Items */}
						{cartItems.map((item) => (
							<div
								key={item.id}
								className='flex items-center justify-between py-4'
							>
								<div className='flex items-center gap-4'>
									<Image
										width={150}
										height={100}
										src={item.image}
										alt={item.name}
										className='rounded-md object-cover'
									/>
									<div>
										<h3 className='font-medium'>{item.name}</h3>
										<p className='text-sm text-gray-500'>${item.price}</p>
										<div className='mt-2 flex items-center gap-2'>
											<Button
												variant='outline'
												size='sm'
											>
												-
											</Button>
											<span>{item.quantity}</span>
											<Button
												variant='outline'
												size='sm'
											>
												+
											</Button>
										</div>
									</div>
								</div>
								<Button
									variant='ghost'
									size='icon'
								>
									<Trash2 className='h-4 w-4' />
								</Button>
							</div>
						))}
					</ScrollArea>
				</CardContent>
				<Separator />
				<CardFooter className='flex flex-col gap-4 pt-6'>
					<div className='flex w-full justify-between'>
						<span className='font-medium'>Total:</span>
						<span className='font-bold'>$299.97</span>
					</div>
					<Button className='w-full'>Proceed to Checkout</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

// Sample data - you can replace this with your actual data source
const cartItems = [
	{
		id: 1,
		name: 'Product 1',
		price: 99.99,
		quantity: 1,
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		name: 'Product 2',
		price: 149.99,
		quantity: 1,
		image: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		name: 'Product 3',
		price: 49.99,
		quantity: 1,
		image: 'https://via.placeholder.com/150',
	},
];
