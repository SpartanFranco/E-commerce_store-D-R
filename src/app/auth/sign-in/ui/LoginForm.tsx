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

import { useActionState, useEffect } from 'react';
import { login } from '@/app/actions';
import { loginSchema } from '@/app/schema/formSchemas';

export function LoginForm() {
	const [state, formAction, isPending] = useActionState(login, undefined);
	useEffect(() => {
		if (state === 'Success') {
			window.location.replace('/');
		}
	}, [state]);
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});
	const onSubmit = (values: z.infer<typeof loginSchema>) => {
		formAction(values);
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
									placeholder='username'
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
				{state === 'CredencialSignin' && (
					<p className='text-red-600'>{state}</p>
				)}

				<Button
					type='submit'
					className='w-full bg-white text-purple-600 hover:bg-white/90'
					disabled={isPending}
				>
					Sign In
				</Button>
			</form>
		</Form>
	);
}
