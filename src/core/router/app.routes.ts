const appRoutes = [
	{
		path: '/app',
		component: () => import('@/features/jobs/views/AppContent.vue'),
		children: [
			{
				path: '',
				name: 'main-page',
				component: () => import('@/features/jobs/views/MainPage.vue'),
			},
			{
				path: 'search',
				name: 'search',
				component: () => import('@/features/jobs/views/Search.vue'),
			},
			{
				path: 'saved-offers',
				name: 'saved-offers',
				component: () => import('@/features/jobs/views/SavedOffers.vue'),
			},
			{
				path: 'user-config',
				name: 'user-config',
				component: () => import('@/features/user/views/UserConfig.vue'),
			},
			{
				path: 'job-details/:id',
				name: 'job-details',
				component: () => import('@/features/jobs/views/JobDetails.vue'),
				props: true,
			},
			{
				path: 'publish-offer',
				name: 'publish-offer',
				component: () => import('@/features/jobs/views/PublishOffer.vue'),
			},
			{
				path: 'edit-offer',
				name: 'edit-offer',
				component: () => import('@/features/jobs/views/EditOffer.vue'),
			},
			{
				path: 'edit-offer-info/:id',
				name: 'edit-offer-info',
				component: () => import('@/features/jobs/views/EditOfferInfo.vue'),
				props: true,
			},
		],
	},
];

export default appRoutes;
