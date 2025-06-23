const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/LogIn.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/auth/SignUp.vue"),
  },
];

export default authRoutes;
