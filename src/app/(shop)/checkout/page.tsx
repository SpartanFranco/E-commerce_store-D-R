'use client';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { CreditCard } from 'lucide-react';
import Image from 'next/image';
import { Toast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
	firstName: z.string().min(2, 'First name must be at least 2 characters'),
	lastName: z.string().min(2, 'Last name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	address: z.string().min(5, 'Address must be at least 5 characters'),
	city: z.string().min(2, 'City must be at least 2 characters'),
	postalCode: z.string().min(5, 'Invalid postal code'),
	country: z.string().min(1, 'Please select a country'),
	cardNumber: z.string().regex(/^\d{16}$/, 'Invalid card number'),
	cardExpiry: z.string().regex(/^\d{2}\/\d{2}$/, 'Invalid expiry date (MM/YY)'),
	cardCvc: z.string().regex(/^\d{3,4}$/, 'Invalid CVC'),
});

export default function CheckoutPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			address: '',
			city: '',
			postalCode: '',
			country: '',
			cardNumber: '',
			cardExpiry: '',
			cardCvc: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		Toast({
			title: 'Order placed successfully!',
		});
		console.log(values);
	}

	return (
		<div className='container mx-auto py-10'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid grid-cols-1 gap-6 md:grid-cols-2'
				>
					<div className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle>Shipping Information</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='grid grid-cols-2 gap-4'>
									<FormField
										control={form.control}
										name='firstName'
										render={({ field }) => (
											<FormItem>
												<FormLabel>First Name</FormLabel>
												<FormControl>
													<Input
														placeholder='John'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='lastName'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Last Name</FormLabel>
												<FormControl>
													<Input
														placeholder='Doe'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													type='email'
													placeholder='john@example.com'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='address'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Input
													placeholder='123 Main St'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className='grid grid-cols-2 gap-4'>
									<FormField
										control={form.control}
										name='city'
										render={({ field }) => (
											<FormItem>
												<FormLabel>City</FormLabel>
												<FormControl>
													<Input
														placeholder='New York'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='postalCode'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Postal Code</FormLabel>
												<FormControl>
													<Input
														placeholder='10001'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<FormField
									control={form.control}
									name='country'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Country</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder='Select country' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value='us'>United States</SelectItem>
													<SelectItem value='uk'>United Kingdom</SelectItem>
													<SelectItem value='ca'>Canada</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Payment Method</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-center space-x-2'>
									<CreditCard className='h-4 w-4' />
									<span>Credit Card</span>
								</div>
								<FormField
									control={form.control}
									name='cardNumber'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													placeholder='Card Number'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className='grid grid-cols-2 gap-4'>
									<FormField
										control={form.control}
										name='cardExpiry'
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder='MM/YY'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='cardCvc'
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input
														placeholder='CVC'
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Order Summary Card - Same as before */}
					<Card className='h-fit'>
						<CardHeader>
							<CardTitle>Order Summary</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							{cartItems.map((item) => (
								<div
									key={item.id}
									className='flex justify-between'
								>
									<div className='flex gap-2'>
										<Image
											width={150}
											height={150}
											src={item.image}
											alt={item.name}
											className='h-16 w-16 rounded object-cover'
										/>
										<div>
											<p className='font-medium'>{item.name}</p>
											<p className='text-sm text-gray-500'>
												Qty: {item.quantity}
											</p>
										</div>
									</div>
									<p className='font-medium'>${item.price}</p>
								</div>
							))}
							<Separator />
							<div className='space-y-2'>
								<div className='flex justify-between'>
									<span>Subtotal</span>
									<span>$299.97</span>
								</div>
								<div className='flex justify-between'>
									<span>Shipping</span>
									<span>$9.99</span>
								</div>
								<div className='flex justify-between'>
									<span>Tax</span>
									<span>$29.99</span>
								</div>
								<Separator />
								<div className='flex justify-between font-bold'>
									<span>Total</span>
									<span>$339.95</span>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Button
								type='submit'
								className='w-full'
							>
								Place Order
							</Button>
						</CardFooter>
					</Card>
				</form>
			</Form>
		</div>
	);
}

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
