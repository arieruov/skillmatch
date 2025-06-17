<script setup lang="ts">
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import JobCard from "@/components/app/JobCard.vue";
</script>

<template>
  <ScreenLayout>
    <div class="mb-8">
      <h1 className="text-3xl font-bold mb-2">Ofertas Guardadas</h1>
      <p className="text-slate-600">Tus ofertas de trabajo favoritas</p>
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
