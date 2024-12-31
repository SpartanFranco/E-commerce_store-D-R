'use server';

import { signIn } from '@/auth.config';
import { z } from 'zod';
import { loginSchema } from '../schema/formSchemas';
// import {sleep} from "../products/sleep";

export async function authenticate(
	prevState: string | undefined,
	formData: FormData,
) {
	try {
		// sleep(2);

		await signIn('credentials', {
			...Object.fromEntries(formData),
			redirect: false,
		});
		return 'Success';
	} catch (error) {
		return 'CredencialSignin';
	}
}

export const login = async (
	prevState: string | undefined,
	values: z.infer<typeof loginSchema>,
) => {
	try {
		const result = await signIn('credentials', {
			username: values.username,
			password: values.password,
			redirect: false,
		});

		if (result?.error) {
			return 'Invalid credentials';
		}
		return 'Success';
	} catch (error) {
		console.log({ error });
		return 'CredencialSignin';
	}
};
