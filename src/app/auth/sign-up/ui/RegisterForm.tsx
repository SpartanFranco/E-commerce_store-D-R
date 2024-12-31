'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { Input } from '@/components/ui/input';
import { registerUser } from '@/app/actions';
import { registerSchema } from '@/app/schema/formSchemas';

export function RegisterForm() {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
		},
	});
	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		await registerUser(values);
		window.location.replace('/');
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-4'
			>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-white'>Name</FormLabel>
							<FormControl>
								<Input
									placeholder='Username'
									{...field}
									className='border-white/30 bg-white/20 text-white placeholder:text-gray-300'
								/>
							</FormControl>
							<FormMessage className='text-red-300' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-white'>Email</FormLabel>
							<FormControl>
								<Input
									placeholder='your@email.com'
									{...field}
									className='border-white/30 bg-white/20 text-white placeholder:text-gray-300'
								/>
							</FormControl>
							<FormMessage className='text-red-300' />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-white'>Password</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Enter your password'
									{...field}
									className='border-white/30 bg-white/20 text-white placeholder:text-gray-300'
								/>
							</FormControl>
							<FormMessage className='text-red-300' />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					className='w-full bg-white text-purple-600 hover:bg-white/90'
				>
					Sign In
				</Button>
			</form>
		</Form>
	);
}
