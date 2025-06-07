<script setup lang="ts">
import { useRouter } from "vue-router";
import HomepageNavbar from "@/components/homepage/Navbar.vue";
import HeroSection from "@/components/homepage/HeroSection.vue";

const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
    <HomepageNavbar />
    <HeroSection />
  </div>
</template>
