<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { User, TriangleAlert } from 'lucide-vue-next';
import { useUserStore } from '@/shared/stores/userStore';
import { usePublishedJobsStore } from '@/features/jobs/stores/publishedJobsStore';
import ScreenLayout from '@/shared/components/ScreenLayout.vue';
import SectionGroup from '@/shared/components/SectionGroup.vue';
import SectionElement from '@/shared/components/SectionElement.vue';
import SectionHeader from '@/shared/components/SectionHeader.vue';
import PasswordInput from '@/features/auth/components/PasswordInput.vue';

const userStore = useUserStore();
const a = usePublishedJobsStore();
const token = localStorage.getItem('token');
const router = useRouter();
const username = ref(userStore.userData?.username || '');
const email = ref(userStore.userData?.email || '');
const password = ref('');

async function updateProfile() {
	if (!username.value.trim() || !email.value.trim()) {
		alert('Por favor, completa todos los campos obligatorios.');
		return;
	}

	const confirmed = window.confirm(
		'¿Deseas continuar con la actualización de la información tu cuenta?\n ',
	);
	if (!confirmed) return;

	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/updateUserData`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				username: username.value,
				email: email.value,
				password: password.value,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.error || '/user-config: Error al publicar la oferta');

			// @ts-ignore
			error.validToken = data.validToken;
			throw error;
		}

		alert('/user-config: Informacion actualizada exitosamente.');
		console.log(data.userData);
		userStore.setUser(data.userData);
	} catch (error: any) {
		if (error.validToken === false) {
			alert('/user-config: Token Invalido');
			localStorage.removeItem('token');
			userStore.cleanUser();
			router.push('/');
		}

		alert(error.message);
	}
}

async function deleteUser() {
	const confirmed = window.confirm('¿Deseas continuar con la eliminación de tu cuenta?\n ');
	if (!confirmed) return;

	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/deleteUser`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.error || 'UserConfig: Error al publicar la oferta');

			// @ts-ignore
			error.validToken = data.validToken;
			throw error;
		}

		alert(data.message);
		localStorage.removeItem('token');
		userStore.cleanUser();
		router.push('/');
	} catch (error: any) {
		if (error.validToken === false) {
			alert('UserConfig: Token Invalido');
			localStorage.removeItem('token');
			userStore.cleanUser();
			router.push('/');
		}

		alert(error.message);
	}
}

function signOut() {
	localStorage.removeItem('token');
	userStore.cleanUser();
	router.replace('/');
}
</script>

<template>
	<ScreenLayout>
		<div class="mb-8">
			<h1 class="mb-2 text-3xl font-bold text-slate-900">Configuración de Cuenta</h1>
			<p class="text-slate-600">Administra la configuración de tu cuenta</p>
		</div>

		<SectionGroup>
			<SectionElement>
				<SectionHeader title="Información Personal" text="Datos principales de la cuenta"
					><User class="h-6 w-6 text-slate-900"
				/></SectionHeader>

				<div class="flex flex-col gap-4 text-sm">
					<div class="flex flex-col gap-2">
						<label class="px-1 font-medium text-slate-700" for="username"
							>Nombre de Usuario</label
						>
						<input
							class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
							id="username"
							type="text"
							placeholder="Ingresa tu nombre de usuario"
							v-model="username"
						/>
					</div>

					<div class="flex flex-col gap-2">
						<label class="px-1 font-medium text-slate-700" for="email">Correo</label>
						<input
							class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
							id="email"
							type="email"
							placeholder="Ingresa tu correo"
							v-model="email"
						/>
					</div>

					<PasswordInput
						label="Contraseña"
						id="password"
						placeholder="Ingresa tu nueva contraseña"
						v-model="password"
					/>
				</div>
			</SectionElement>

			<SectionElement>
				<SectionHeader title="Zona de peligro" text="Acciones irreversibles para tu cuenta"
					><TriangleAlert class="h-6 w-6 text-red-700"
				/></SectionHeader>

				<div class="flex flex-col gap-2 text-sm">
					<p class="text-red-700">
						Eliminar tu cuenta es una acción permanente. Todos tus datos serán
						eliminados y no podrás recuperarlos.
					</p>

					<button
						class="flex w-fit items-center justify-center rounded-md bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none"
						@click="deleteUser"
					>
						Eliminar cuenta
					</button>
				</div>
			</SectionElement>

			<!-- Buttons -->
			<div class="flex flex-row justify-between gap-4">
				<button
					class="flex items-center justify-center rounded-md bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
					@click="updateProfile"
				>
					Guardar cambios
				</button>
				<button
					class="flex items-center justify-center rounded-md bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none"
					@click="signOut"
				>
					Cerrar Sesión
				</button>
			</div>
		</SectionGroup>
	</ScreenLayout>
</template>
