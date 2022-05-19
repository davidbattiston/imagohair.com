import { api } from '$lib/ghost';

export const get = async () => {
	return await api.settings
		.browse()
		.then((settings) => {
			return {
				status: 200,
				body: settings
			};
		})
		.catch((err) => {
			console.error(err);
		});
};
