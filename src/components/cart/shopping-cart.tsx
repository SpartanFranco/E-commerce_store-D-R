import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ShoppingCart } from 'lucide-react';

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

export default function ShoppingCartDropdown() {
	// Ejemplo de items en el carrito
	const cartItems: CartItem[] = [
		{ id: 1, name: 'Producto 1', price: 29.99, quantity: 2 },
		{ id: 2, name: 'Producto 2', price: 19.99, quantity: 1 },
	];

	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='icon'
					className='relative'
				>
					<ShoppingCart className='h-4 w-4' />
					<span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
						{cartItems.length}
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Mi Carrito</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{cartItems.map((item) => (
					<DropdownMenuItem
						key={item.id}
						className='flex justify-between'
					>
						<span>
							{item.name} (x{item.quantity})
						</span>
						<span>${(item.price * item.quantity).toFixed(2)}</span>
					</DropdownMenuItem>
				))}
				<DropdownMenuSeparator />
				<DropdownMenuItem className='flex justify-between font-bold'>
					<span>Total:</span>
					<span>${total.toFixed(2)}</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Button className='w-full'>Ir a pagar</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
