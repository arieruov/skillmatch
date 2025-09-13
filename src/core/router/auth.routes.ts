const authRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/features/auth/views/LogIn.vue'),
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('@/features/auth/views/SignUp.vue'),
	},
];

export default authRoutes;
