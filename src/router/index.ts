import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "./public.routes";
import authRoutes from "./auth.routes";
import appRoutes from "./app.routes";

const routes = [...publicRoutes, ...authRoutes, ...appRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const isProtected = to.path.startsWith("/app");

  if (isProtected && !token) {
    console.log("No existe un token de sesión");
    return next("/login");
  }

  if ((to.path === "/login" || to.path === "/signup") && token) {
    console.log(
      "Tienes un token de sesión, se te redirigira directamente a la ruta /app",
    );
    return next("/app");
  }

  next();
});

export default router;
