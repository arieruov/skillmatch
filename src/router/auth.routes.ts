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
  {
    path: "/auth-loading",
    name: "auth-loading",
    component: () => import("@/views/auth/AuthLoading.vue"),
  },
];

export default authRoutes;
