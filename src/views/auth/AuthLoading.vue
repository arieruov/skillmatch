<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { AuthIntro, AuthScreenLayout } from "@/components/auth/authComponents";

const router = useRouter();

onMounted(async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
  }

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

    console.log(data.userData);
    router.push("/app");
  } catch (error) {
    alert(error);
  }
});
</script>

<template>
  <AuthScreenLayout>
    <AuthIntro
      title="Validando tu información"
      subtitle="Por favor espera mientras verificamos tu sesión y recuperamos tus datos de usuario."
    />
  </AuthScreenLayout>
</template>
