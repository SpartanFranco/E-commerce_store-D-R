'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const slides = [
	{
		id: 1,
		title: 'Summer Collection',
		description: 'Discover our latest summer styles',
		image: '/images/slide1.jpg',
		price: '$99.99',
		badge: 'New Arrival',
	},
	{
		id: 2,
		title: 'Autumn Essentials',
		description: 'Get ready for the cool season',
		image: '/images/slide2.jpg',
		price: '$129.99',
		badge: 'Best Seller',
	},
	{
		id: 3,
		title: 'Winter Specials',
		description: 'Cozy and stylish winter wear',
		image: '/images/slide3.jpg',
		price: '$149.99',
		badge: 'Limited Edition',
	},
];

export function AutoCarousel() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='relative min-h-screen bg-gradient-to-br from-background to-primary/5'>
			<div className='container mx-auto px-4 py-16'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={current}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5 }}
						className='relative'
					>
						<Card className='overflow-hidden'>
							<CardContent className='p-0'>
								<div className='grid gap-0 md:grid-cols-2'>
									{/* Image Section */}
									<div className='relative aspect-square md:aspect-auto'>
										<Image
											src={slides[current].image}
											alt={slides[current].title}
											fill
											className='object-cover'
											priority
										/>
										<div className='absolute left-4 top-4'>
											<Badge variant='secondary'>{slides[current].badge}</Badge>
										</div>
									</div>

									{/* Content Section */}
									<div className='flex flex-col justify-center space-y-6 p-8'>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.2 }}
										>
											<h2 className='mb-4 text-3xl font-bold md:text-4xl'>
												{slides[current].title}
											</h2>
											<p className='mb-6 text-muted-foreground'>
												{slides[current].description}
											</p>
											<p className='mb-8 text-2xl font-bold text-primary'>
												{slides[current].price}
											</p>

											<div className='flex gap-4'>
												<Button size='lg'>Shop Now</Button>
												<Button
													variant='outline'
													size='lg'
												>
													Learn More
												</Button>
											</div>
										</motion.div>

										{/* Carousel Indicators */}
										<div className='mt-8 flex justify-center gap-2'>
											{slides.map((_, index) => (
												<button
													key={index}
													onClick={() => setCurrent(index)}
													className={`h-3 w-3 rounded-full transition-colors ${
														index === current ? 'bg-primary' : 'bg-primary/20'
													}`}
												/>
											))}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
