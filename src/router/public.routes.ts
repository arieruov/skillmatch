const publicRoutes = [
  {
    path: "/",
    name: "homepage",
    component: () => import("@/views/Homepage.vue"),
  },
];

export default publicRoutes;
