<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import Sidebar from "@/components/app/Sidebar.vue";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  // Check if user is already logged in
  const user = localStorage.getItem("user");
  if (!user) {
    router.push("/sign-in");
  }
});
</script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-slate-100 to-slate-300">
    <Sidebar />
    <RouterView />
  </div>
</template>
