import { MenuCategories } from '@/components/header/navbar-categories';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<div className='grid w-full grid-cols-1 gap-3 rounded-md bg-slate-300/40 p-6 px-8 sm:grid-cols-2'>
				<div className='flex flex-col items-center justify-center gap-3'>
					<h1 className='max-w-[20rem] text-2xl md:text-4xl'>
						Shop computers & accesories
					</h1>
					<p className='max-w-[18rem] text-xs md:text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
						sapiente atque voluptatum neque reiciendis.
					</p>
					<Button
						variant={'outline'}
						className='h-[2rem] w-[5rem] border-blue-900 p-2 text-xs lg:size-fit'
					>
						<Link href={'/products'}>All products</Link>
					</Button>
				</div>

				<div className='flex items-end gap-2 md:justify-center'>
					<div className='h-fit w-[7rem] flex-col rounded-sm bg-white p-3 text-xs md:size-fit'>
						<p className='text-gray-500'>sakdk sadasld sad</p>
						<h2 className='w-[80%] font-semibold'>20l 213143 black woiaed</h2>
						<section className='flex'>
							<Star size={10} />
							<Star size={10} />
							<Star size={10} />
							<Star size={10} />
						</section>
						<h3>$124.00 </h3>
					</div>
					<div className='h-[10rem] w-[8rem] bg-violet-600/30'>Image</div>
				</div>
			</div>
			<MenuCategories />
		</div>
	);
}
