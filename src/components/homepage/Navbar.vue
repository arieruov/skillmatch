<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToSignIn() {
  router.push("/login");
}

function goToSignUp() {
  router.push("/signup");
}
</script>

<template>
  <header class="flex items-center justify-between bg-white px-8 py-4">
    <h2 class="text-2xl font-bold text-violet-700">Skillmatch</h2>
    <div class="flex gap-4">
      <button
        @click="goToSignIn"
        class="rounded-lg border-2 border-violet-600 bg-white px-4 py-2 font-semibold text-violet-600 shadow transition hover:cursor-pointer hover:bg-violet-50 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-100"
      >
        Iniciar sesión
      </button>
      <button
        @click="goToSignUp"
        class="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white shadow transition hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
      >
        Registrarse
      </button>
    </div>
  </header>
</template>
