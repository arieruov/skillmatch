<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
	AccountTypeSelector,
	AppName,
	AuthButton,
	AuthCard,
	AuthIntro,
	AuthScreenLayout,
	AuthSwitchPrompt,
	BaseInput,
	OrDivider,
	PasswordInput,
	ReturnToHomepageButton,
} from '@/features/auth/components/authComponents';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const accountType = ref('user');
const router = useRouter();

async function createUser() {
	const apiUrl = `${import.meta.env.VITE_API_URL}/api/auth/register`;

	if (!username.value || !email.value || !password.value || !accountType.value) {
		alert('Por favor completa todos los campos.');
		return;
	}

	if (password.value !== confirmPassword.value) {
		alert('Las contraseñas no coinciden.');
		return;
	}

	const userPayload = {
		username: username.value,
		email: email.value,
		password: password.value,
		accountType: accountType.value,
	};

	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userPayload),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.error || 'Error al mandar la peticion');
		}

		router.push('/login');
	} catch (error) {
		alert(error);
	}
}
</script>

<template>
	<AuthScreenLayout>
		<ReturnToHomepageButton />

		<AppName />

		<AuthCard>
			<AuthIntro
				title="Crear Cuenta"
				subtitle="¡Únete hoy! Por favor completa tus datos para crear una cuenta."
			/>

			<form class="mb-6 flex flex-col gap-4" @submit.prevent="createUser">
				<BaseInput
					label="Nombre de Usuario"
					id="username"
					type="text"
					placeholder="Ingresa tu nombre de usuario"
					v-model="username"
				/>

				<BaseInput
					label="Correo"
					id="email"
					type="email"
					placeholder="Ingresa tu correo"
					v-model="email"
				/>

				<AccountTypeSelector label="Tipo de Cuenta" v-model="accountType" />

				<PasswordInput
					label="Contraseña"
					id="password"
					placeholder="Ingresa tu contraseña"
					v-model="password"
				/>

				<PasswordInput
					label="Confirmar Contraseña"
					id="confirmPassword"
					placeholder="Ingresa tu contraseña"
					v-model="confirmPassword"
				/>

				<AuthButton text="Registrar" />
			</form>

			<OrDivider />

			<AuthSwitchPrompt
				message="Ya tienes una cuenta?"
				linkText="Iniciar sesión"
				route="/login"
			/>
		</AuthCard>
	</AuthScreenLayout>
</template>
