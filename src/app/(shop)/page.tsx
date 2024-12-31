import { auth } from '@/auth.config';
import { AutoCarousel } from '@/components/caurosel-auto';

import { redirect } from 'next/navigation';

export default async function HomePage() {
	const session = await auth();

	if (!session?.user) {
		redirect('/auth/sign-in');
	}
	console.log({ session });
	return (
		<div>
			<AutoCarousel />
		</div>
	);
}
