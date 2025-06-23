<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ArrowDown } from "lucide-vue-next";
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
} from "@/components/auth/authComponents";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const accountType = ref("user");
const router = useRouter();

async function createUser() {
  const apiUrl = "http://192.168.1.226:3000/register";

  // Validamos que los inputs no esten vacios
  if (
    !username.value ||
    !email.value ||
    !password.value ||
    !accountType.value
  ) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Verificamos que la contraseña coincide
  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Preparamos los datos del usuario para ser enviados
  const userPayload = {
    username: username.value,
    email: email.value,
    password: password.value,
    accountType: accountType.value,
  };

  try {
    // Mandamos la peticion con los datos del usuario
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userPayload),
    });

    const data = await response.json();

    // En caso de que el servidr nos arrojara un error, arrojamos una excepcion
    if (!response.ok) {
      throw new Error(data.error || "Error al mandar la peticion");
    }

    // Mostramos el mensaje que manda el servidor cuando la peticion se completó exitosamente
    console.log(data.message);

    // Redirijimos al usuario a la pantalla de ligin para que ingrese sus credenciales
    router.push("/login");
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

      <!-- Sign Up link -->
      <AuthSwitchPrompt
        message="Ya tienes una cuenta?"
        linkText="Iniciar sesión"
        route="/login"
      />
    </AuthCard>
  </AuthScreenLayout>
</template>
