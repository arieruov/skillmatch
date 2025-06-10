<script setup lang="ts">
import JobCard from "@/components/app/JobCard.vue";
</script>

<template>
  <main class="flex flex-1 flex-col overflow-scroll px-8 py-6">
    <div class="mb-8">
      <h1 className="text-3xl font-bold mb-2">Ofertas de Trabajo</h1>
      <p className="text-slate-600">
        Explora todas las oportunidades disponibles
      </p>
    </div>
    <section class="flex flex-col gap-4">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </section>
  </main>
</template>

Búsqueda por Habilidades

Encuentra ofertas que coincidan con tus habilidades 