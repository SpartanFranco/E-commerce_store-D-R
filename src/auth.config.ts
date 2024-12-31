import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
	id: string;
	name: string;

	token: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials): Promise<User | null> {
				try {
					const response = await fetch('https://fakestoreapi.com/auth/login', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							username: credentials?.username,
							password: credentials?.password,
						}),
					});

					const data = await response.json();

					if (response.ok && data.token) {
						return {
							id: '1',
							name: credentials?.username as string,

							token: data.token,
						};
					}
					return null;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: '/auth/sign-in',
		newUser: '/auth/sign-up',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.accessToken = user.token;
			}
			return token;
		},
		async session({ session, token }) {
			session.sessionToken = token.accessToken as string;
			return session;
		},
	},
});
