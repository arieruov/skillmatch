<script setup lang="ts">
import { useRouter } from "vue-router";
import Navbar from "@/components/homepage/Navbar.vue";
import Hero from "@/components/homepage/Hero.vue";
import Features from "@/components/homepage/Features.vue";
import HowItWorks from "@/components/homepage/HowItWorks.vue";
import CallToAction from "@/components/homepage/CallToAction.vue";
import Footer from "@/components/homepage/Footer.vue";

const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <CallToAction />
    <Footer />
  </div>
</template>
