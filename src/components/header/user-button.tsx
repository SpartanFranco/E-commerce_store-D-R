import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ButtonLogout } from './button-logout';

export function UserButton() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar className='size-6 md:size-10'>
					<AvatarImage
						src='https://github.com/shadcn.png'
						alt='@shadcn'
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Profile</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<ButtonLogout />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
