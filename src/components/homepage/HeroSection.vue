<script setup lang="ts">
import { Search, ArrowRight } from "lucide-vue-next";

const skills = [
  "Excel",
  "Python",
  "Marketing Digital",
  "Diseño Gráfico",
  "SQL",
  "React",
  "Ventas",
  "Contabilidad",
];
</script>

<template>
  <section class="bg-slate-400 px-8 py-20">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-6xl font-bold text-slate-900 mb-6">
        Encuentra el trabajo perfecto
        <span className="text-violet-600 block">basado en tus habilidades</span>
      </h2>
      <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
        SkillMatch conecta tu talento con las oportunidades ideales. Filtra
        ofertas de trabajo que realmente coincidan con tus habilidades y
        experiencia.
      </p>

      <!-- Search Bar -->
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex gap-4 p-2 bg-white rounded-lg shadow-lg">
          <div class="relative flex-1">
            <Search
              class="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="¿Qué habilidades tienes? (ej: Excel, Python, Marketing...)"
              class="w-full rounded-md border border-gray-200 bg-gray-50 py-3 pr-4 pl-10 text-gray-700 transition focus:ring-2 focus:ring-violet-400 focus:outline-none"
            />
          </div>
          <button
            class="flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white shadow transition hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
          >
            Buscar empleos
            <ArrowRight class="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Popular Skills -->
      <div class="mb-12">
        <p class="mb-4 text-sm font-medium text-slate-600">
          Habilidades populares:
        </p>
        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="cursor-pointer rounded-lg bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 shadow-sm transition hover:bg-violet-200 hover:text-violet-900"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
