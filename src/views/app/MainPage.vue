<script setup lang="ts">
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import JobCard from "@/components/common/JobCard.vue";
</script>

<template>
  <ScreenLayout>
    <div class="mb-8">
      <h1 className="text-3xl font-bold mb-2">Ofertas de Trabajo</h1>
      <p className="text-slate-600">
        Explora todas las oportunidades disponibles
      </p>
    </div>
    <SectionGroup>
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
    </SectionGroup>
  </ScreenLayout>
</template>
