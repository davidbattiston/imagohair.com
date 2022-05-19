import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
export const api = new GhostContentAPI({
	url: 'https://content.boxturtle.agency',
	key: '7f1857b1657a402bc71f57c83c',
	version: 'v4'
});
