<script setup lang="ts">
import HomepageNavbar from "@/components/HomepageNavbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-gradient-to-br from-slate-100 to-slate-300"
  >
    <HomepageNavbar />

    <section className="py-20 px-8 bg-slate-400">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-bold text-slate-900 mb-6">
          Encuentra el trabajo perfecto
          <span className="text-violet-600 block"
            >basado en tus habilidades</span
          >
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          SkillMatch conecta tu talento con las oportunidades ideales. Filtra
          ofertas de trabajo que realmente coincidan con tus habilidades y
          experiencia.
        </p>
      </div>
    </section>
  </div>
</template>
