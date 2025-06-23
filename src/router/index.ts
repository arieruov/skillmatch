import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "./public.routes";
import authRoutes from "./auth.routes";
import appRoutes from "./app.routes";

const routes = [...publicRoutes, ...authRoutes, ...appRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
