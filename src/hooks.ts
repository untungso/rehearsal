import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies['instead_id'] || crypto.randomUUID();

	const response = await resolve(event);

	if (!cookies['instead_id']) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('instead_id', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};
