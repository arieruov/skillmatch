<script setup lang="ts">
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import JobCard from "@/components/common/JobCard.vue";
</script>

<template>
  <ScreenLayout>
    <div class="mb-8">
      <h1 className="text-3xl font-bold mb-2">Ofertas Guardadas</h1>
      <p className="text-slate-600">Tus ofertas de trabajo favoritas</p>
    </div>
    <SectionGroup>
    </SectionGroup>
  </ScreenLayout>
</template>
