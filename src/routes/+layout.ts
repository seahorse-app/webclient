import type { LayoutServerData } from './$types';

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	birthDate: string;
}

async function fetchUser(): Promise<User> {
	console.log('fetching user');
	// TODO: add real host url via env var
	let resp = await fetch('http://127.0.0.1:3000/user/profile', { credentials: 'same-origin ', });
	return (await resp.json()) as User;
}
// @ts-ignore
export const load: LayoutServerData = async () => {
    let user = {};
	try {
		user = await fetchUser();
	} catch {
        console.log('failed to fetch user');
	}
	console.log(user);
	return {
		user
	};
};
