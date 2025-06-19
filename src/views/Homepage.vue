<script setup lang="ts">
import Navbar from "@/components/views/homepage/Navbar.vue";
import Hero from "@/components/views/homepage/Hero.vue";
import Features from "@/components/views/homepage/Features.vue";
import HowItWorks from "@/components/views/homepage/HowItWorks.vue";
import CallToAction from "@/components/views/homepage/CallToAction.vue";
import Footer from "@/components/views/homepage/Footer.vue";
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
