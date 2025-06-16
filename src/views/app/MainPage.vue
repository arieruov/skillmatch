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
      <JobCard
        name="Empleo"
        company="Compañia"
        location="Gyadalajara, Jalisco, Mexico"
        date="01/01/2025"
        salary="15,000 MXN"
        shift="Tiempo completo"
        modality="Remoto"
        experience="Sin experiencia"
        description="Descripcion de la oferta"
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
    </section>
  </main>
</template>
