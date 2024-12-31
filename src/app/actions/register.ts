'use server';

import { signIn } from '@/auth.config';

interface UserData {
	username: string;
	email: string;
	password: string;
}

export const registerUser = async (data: UserData) => {
	try {
		const registerResponse = await fetch('https://fakestoreapi.com/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: data.email,
				username: data.username,
				password: data.password,
			}),
		});

		if (!registerResponse.ok) {
			return null;
		}

		await signIn('credentials', {
			username: data.username,
			password: data.password,
			redirect: false,
		});
	} catch (error) {
		console.log({ error });

		return {
			ok: false,
			message: 'No se pudo crear el usuario',
		};
	}
};
