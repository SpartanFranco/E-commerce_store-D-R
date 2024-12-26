import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
	image: string;
	category: string;
}

export const Category = ({ image, category }: Props) => {
	return (
		<Link
			href={`/products/${category}`}
			className='flex size-fit flex-col gap-2'
		>
			<Image
				src={image}
				width={100}
				height={100}
				className='h-[8rem] self-center md:h-[14rem] md:w-[10rem]'
				alt={image}
			/>
			{category}
		</Link>
	);
};
