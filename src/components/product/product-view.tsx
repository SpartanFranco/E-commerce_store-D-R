'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star } from 'lucide-react';

interface Props {
	id?: number;
	title?: string;
	price?: number;
	description?: string;
	category?: string;
	images?: string[];
}
export const ProductView = ({
	title,
	category,
	price,
	description,
	images,
}: Props) => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className='mx-auto max-w-7xl'
			>
				<Card className='p-6'>
					<div className='lg:grid lg:grid-cols-2 lg:gap-x-8'>
						{/* Product Image */}
						<motion.div
							whileHover={{ scale: 1.02 }}
							className='relative aspect-square overflow-hidden rounded-lg bg-white shadow-xl'
						>
							<Image
								src={images?.[0] ?? ''}
								width={700}
								height={400}
								alt='Product Name'
								className='size-full object-cover object-center'
								priority
							/>
							<Badge
								className='absolute left-4 top-4'
								variant='secondary'
							>
								New Arrival
							</Badge>
						</motion.div>

						{/* Product Details */}
						<CardContent className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								<div className='mb-4 flex items-center gap-2'>
									<Badge variant='outline'>In Stock</Badge>
									<div className='flex items-center'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 text-yellow-400'
											/>
										))}
									</div>
								</div>

								<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
									{title}
								</h1>

								<div className='mt-3'>
									<p className='text-3xl tracking-tight text-gray-900'>
										${price}
									</p>
									<p className='text-sm text-gray-500'>
										Free shipping on all orders
									</p>
								</div>

								<Separator className='my-6' />

								<div className='space-y-6 text-base text-gray-700'>
									<p>{description}</p>
								</div>

								<div className='mt-6 space-y-4'>
									<Button
										size='lg'
										className='w-full'
										asChild
									>
										<motion.button
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											Add to Cart
										</motion.button>
									</Button>

									<Button
										variant='outline'
										size='lg'
										className='w-full'
									>
										Add to Wishlist
									</Button>
								</div>

								<Separator className='my-6' />

								{/* Product Features */}
								<div className='mt-4'>
									<h3 className='mb-4 font-medium'>Key Features</h3>
									<ul className='space-y-2'>
										{[
											'Premium Materials',
											'Handcrafted',
											'Lifetime Warranty',
											'Free Shipping',
										].map((feature) => (
											<motion.li
												key={feature}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												className='flex items-center text-gray-600'
											>
												<svg
													className='mr-2 h-5 w-5 text-green-500'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
												{feature}
											</motion.li>
										))}
									</ul>
								</div>
							</motion.div>
						</CardContent>
					</div>
				</Card>
			</motion.div>
		</div>
	);
};
