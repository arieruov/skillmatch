<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
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
} from "@/components/auth/authComponents";

const email = ref("");
const password = ref("");
const router = useRouter();

async function logIn() {
  const apiUrl = `${import.meta.env.VITE_API_URL}/api/auth/login`;

  if (!email.value || !password.value) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const userPayload = {
    email: email.value,
    password: password.value,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al mandar la peticion");
    }

    localStorage.setItem("token", data.token);

    router.push("/app");
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
        title="¡Bienvenido de nuevo!"
        subtitle="¡Te extrañamos! Por favor ingresa los datos de tu cuenta."
      />

      <form class="mb-6 flex flex-col gap-4" @submit.prevent="logIn">
        <BaseInput
          label="Correo"
          id="email"
          type="email"
          placeholder="Ingresa tu correo"
          v-model="email"
        />

        <PasswordInput
          label="Contraseña"
          id="password"
          placeholder="Ingresa tu contraseña"
          v-model="password"
        />

        <AuthButton text="Iniciar sesión" />
      </form>

      <OrDivider />

      <AuthSwitchPrompt
        message="No tienes una cuenta?"
        linkText="Registrate"
        route="/signup"
      />
    </AuthCard>
  </AuthScreenLayout>
</template>
