<script setup lang="ts">
import { AuthIntro, AuthScreenLayout } from "@/components/auth/authComponents";
</script>

<template>
  <AuthScreenLayout>
    <AuthIntro
      title="Validando tu información"
      subtitle="Por favor espera mientras verificamos tu sesión y recuperamos tus datos de usuario."
    />
  </AuthScreenLayout>
</template>
