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

  /* 
    El proposito de este bloque de codigo es obtener la informacion del usuario almacenada en la base de datos antes de que acceda a alguna de las rutas protegidas /app/*
    
    La parte fundamental de este bloque se encuentra en la validacion del userStore, dichos datos al no ser persistentes en memoria se vacian con cada nueva entrada al sitio
    por lo que cada vez que el usuario decida entrar a una ruta protegida el router debera de comprobar que los datos del userStorage existan, de no ser asi se hace una
    solicitud al backend para obtener la informacion de su cuenta, del mismo modo del lado del backend se aprovecha para validar el token del usuario y en caso de haber un error
    se elimiara el token del localstorage obligando al usuario a volver a iniciar sesion desde el /login 
  */
  if (isProtected && token && userStore.userData === null) {
    try {
      const response = await fetch("http://localhost:3000/api/user/getUserData", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Router: Error al mandar la peticion");
      }

      userStore.setUser(data.userData);

      return next("/app");
    } catch (error) {
      console.log(error);

      localStorage.removeItem("token");

      return next("/login");
    }
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
