'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function FeaturedSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className='relative min-h-screen bg-gradient-to-b from-background to-primary/5 px-4 py-12'>
			<div className='container mx-auto max-w-7xl'>
				{/* Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='mb-12 text-center'
				>
					<Badge
						variant='outline'
						className='mb-4'
					>
						New Season Collection
					</Badge>
					<h1 className='mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-4xl font-bold text-transparent md:text-6xl'>
						Elevate Your Style
					</h1>
					<p className='mx-auto max-w-2xl text-muted-foreground'>
						Discover our latest collection of premium fashion pieces designed
						for the modern lifestyle.
					</p>
				</motion.div>

				{/* Featured Products Grid */}
				<div
					className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
					ref={ref}
				>
					{products.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<Card className='group overflow-hidden'>
								<CardContent className='relative p-0'>
									<div className='relative aspect-[4/5] overflow-hidden'>
										<Image
											src={product.image}
											alt={product.name}
											fill
											className='object-cover transition-transform duration-300 group-hover:scale-110'
										/>
										<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
									</div>
									<motion.div
										initial={false}
										whileHover={{ y: 0 }}
										className='absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0'
									>
										<h3 className='mb-2 text-xl font-semibold text-white'>
											{product.name}
										</h3>
										<p className='mb-4 text-white/80'>{product.price}</p>
										<Button
											className='w-full'
											variant='secondary'
										>
											View Details
										</Button>
									</motion.div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Features Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					className='grid grid-cols-1 gap-6 md:grid-cols-3'
				>
					{features.map((feature, index) => (
						<Card
							key={index}
							className='bg-card/50 backdrop-blur'
						>
							<CardContent className='p-6 text-center'>
								<feature.icon className='mx-auto mb-4 h-12 w-12 text-primary' />
								<h3 className='mb-2 font-semibold'>{feature.title}</h3>
								<p className='text-sm text-muted-foreground'>
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					className='mt-16 text-center'
				>
					<Button
						size='lg'
						className='mr-4'
					>
						Shop Now
					</Button>
					<Button
						size='lg'
						variant='outline'
					>
						View Lookbook
					</Button>
				</motion.div>
			</div>
		</section>
	);
}

const products = [
	{
		id: 1,
		name: 'Summer Collection',
		price: '$129.99',
		image: '/images/product-1.jpg',
	},
	{
		id: 2,
		name: 'Autumn Essentials',
		price: '$149.99',
		image: '/images/product-2.jpg',
	},
	{
		id: 3,
		name: 'Winter Classics',
		price: '$199.99',
		image: '/images/product-3.jpg',
	},
];

const features = [
	{
		title: 'Free Worldwide Shipping',
		description: 'On all orders over $150',
		icon: ({ className }: { className?: string }) => (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={className}
			>
				<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
			</svg>
		),
	},
	{
		title: '24/7 Customer Support',
		description: 'Always here to help you',
		icon: ({ className }: { className?: string }) => (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={className}
			>
				<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
			</svg>
		),
	},
	{
		title: 'Secure Payments',
		description: '100% protected payments',
		icon: ({ className }: { className?: string }) => (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={className}
			>
				<rect
					width='18'
					height='11'
					x='3'
					y='11'
					rx='2'
					ry='2'
				/>
				<path d='M7 11V7a5 5 0 0 1 10 0v4' />
			</svg>
		),
	},
];
