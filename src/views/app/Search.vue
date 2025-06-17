<script setup lang="ts">
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import JobCard from "@/components/app/JobCard.vue";
import { Search } from "lucide-vue-next";
</script>

<template>
  <ScreenLayout>
    <div class="mb-8">
      <h1 className="text-3xl font-bold mb-2">Búsqueda por Habilidades</h1>
      <p className="text-slate-600">
        Encuentra ofertas que coincidan con tus habilidades
      </p>
    </div>

    <div className="mb-8">
      <div
        className=" border border-slate-300 flex gap-4 p-2 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg transition"
      >
        <div class="relative flex-1">
          <Search
            class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="¿Qué habilidades tienes? (ej: Excel, Python, Marketing...)"
            class="w-full rounded-md border border-slate-200 bg-slate-50 py-3 pr-4 pl-10 text-slate-700 transition focus:ring-2 focus:ring-violet-400 focus:outline-none"
          />
        </div>
        <button
          class="flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white shadow transition hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
        >
          Buscar
        </button>
      </div>
    </div>

    <SectionGroup>
      <JobCard
        name="Empleo"
        company="Compañia"
        location="Mexico"
        date="Today"
        salary="15,000 MXN"
        shift="Tiempo completo"
        modality="Remoto"
        experience="Sin experiencia"
        description="lorem ipsum"
        :skills="[
          'Excel',
          'Python',
          'Marketing Digital',
          'Diseño Gráfico',
          'SQL',
          'React',
          'Ventas',
          'Contabilidad',
        ]"
      />
    </SectionGroup>
  </ScreenLayout>
</template>
