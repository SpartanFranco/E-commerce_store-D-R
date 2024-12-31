'use client';
import { Button } from '../ui/button';
import { LogOutIcon } from 'lucide-react';
import { logout } from '@/app/actions';
export const ButtonLogout = () => {
	return (
		<Button
			className='flex w-full gap-3'
			variant={'ghost'}
			onClick={logout}
		>
			<LogOutIcon />
			Logout
		</Button>
	);
};
