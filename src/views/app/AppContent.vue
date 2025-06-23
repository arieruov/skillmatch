<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import Sidebar from "@/components/layout/sidebar/Sidebar.vue";
import { onMounted } from "vue";

const router = useRouter();

onMounted(async () => {
  const sessionToken = localStorage.getItem("token");

  if (!sessionToken) {
    router.push("/");
    return;
  }
});
</script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-slate-100 to-slate-300">
    <Sidebar />
    <RouterView />
  </div>
</template>
