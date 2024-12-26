import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserButton() {
	return (
		<Avatar className='size-6 md:size-10'>
			<AvatarImage
				src='https://github.com/shadcn.png'
				alt='@shadcn'
			/>
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
}
