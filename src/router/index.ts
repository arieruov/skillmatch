import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "./public.routes";
import authRoutes from "./auth.routes";
import appRoutes from "./app.routes";
import { useUserStore } from "@/stores/user";

const routes = [...publicRoutes, ...authRoutes, ...appRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  const isProtected = to.path.startsWith("/app");
  const userStore = useUserStore();

  // Se quiere acceder a la ruta protegida de /app y derivadas sin un token de sesion
  if (isProtected && !token) {
    return next("/login");
  }

  // Se quiere acceder a la ruta /app
  if (isProtected && token && userStore.userData === null) {
    try {
      const response = await fetch("http://localhost:3000/user/getUserData", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al mandar la peticion");
      }

      userStore.setUser(data.userData);

      return next("/app");
    } catch (error) {
      console.log(`${error} (router)`);
      localStorage.removeItem("token");
      return next("/login");
    }
  }

  // Se accede a las rutas de auth con un token existente, por lo que se manda a la ruta  /app directamente
  if ((to.path === "/login" || to.path === "/signup") && token) {
    console.log(
      "Tienes un token de sesión, se te redirigira directamente a la ruta /app",
    );
    return next("/app");
  }

  next();
});

export default router;
