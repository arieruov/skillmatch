const publicRoutes = [
	{
		path: '/',
		name: 'homepage',
		component: () => import('@/features/homepage/views/Homepage.vue'),
	},
];

export default publicRoutes;
