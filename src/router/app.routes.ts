const appRoutes = [
  {
    path: "/app",
    component: () => import("@/views/app/AppContent.vue"),
    children: [
      {
        path: "",
        name: "main-page",
        component: () => import("@/views/app/MainPage.vue"),
      },
      {
        path: "search",
        name: "search",
        component: () => import("@/views/app/Search.vue"),
      },
      {
        path: "saved-offers",
        name: "saved-offers",
        component: () => import("@/views/app/SavedOffers.vue"),
      },
      {
        path: "user-config",
        name: "user-config",
        component: () => import("@/views/app/UserConfig.vue"),
      },
      {
        path: "job-details/:id",
        name: "job-details",
        component: () => import("@/views/app/JobDetails.vue"),
        props: true,
      },
      {
        path: "publish-offer",
        name: "publish-offer",
        component: () => import("@/views/app/PublishOffer.vue"),
      },
      {
        path: "edit-offer",
        name: "edit-offer",
        component: () => import("@/views/app/EditOffer.vue"),
      },
      {
        path: "edit-offer-info/:id",
        name: "edit-offer-info",
        component: () => import("@/views/app/EditOfferInfo.vue"),
        props: true,
      },
    ],
  },
];

export default appRoutes;
