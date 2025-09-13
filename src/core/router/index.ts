import { createRouter, createWebHistory } from 'vue-router';
import publicRoutes from './public.routes';
import authRoutes from './auth.routes';
import appRoutes from './app.routes';
import { useUserStore } from '@/shared/stores/userStore';

// All routes in the app
const routes = [...publicRoutes, ...authRoutes, ...appRoutes];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// This function is executed everytime before accesing each route in the app
router.beforeEach(async (to, from, next) => {
	const userStore = useUserStore();
	const token = localStorage.getItem('token');

	// All routes inside the app are protected, they require a JWT token
	const isProtected = to.path.startsWith('/app');

	if (isProtected && !token) {
		return next('/login');
	}

	if (isProtected && token && userStore.userData === null) {
		// Trying to retrieve the user info before accesing the app
		try {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/getUserData`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Router: Error al mandar la peticion');
			}

			// Save the user info in the userStore so it can be used inside the app
			userStore.setUser(data.userData);
			return next('/app');
		} catch (error) {
			console.log(error);

			// Remove the JWT from the local storage, so the user will need to login again
			localStorage.removeItem('token');
			return next('/login');
		}
	}

	if ((to.path === '/login' || to.path === '/signup') && token) {
		console.log('Tienes un token de sesión, se te redirigira directamente a la ruta /app');
		return next('/app');
	}

	next();
});

export default router;
