import NextAuth from 'next-auth';

declare module 'next-auth' {
	interface User {
		id: string;
		name: string;
		email: string;
		image: string;
		token: string;
	}

	interface Session {
		user: User;
	}

	interface JWT {
		id: string;

		token: string;
	}
}
