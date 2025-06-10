<script setup lang="ts">
import { Building2, MapPin, Clock, DollarSign, Heart } from "lucide-vue-next";
import { ref } from "vue";

const favorite = ref(false);
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

function toggleFavorite() {
  favorite.value = !favorite.value;
}
</script>

<template>
  <section
    class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm"
  >
    <h2 class="mb-2 text-xl font-bold text-slate-900">Empleo</h2>

    <div class="mb-8">
      <div class="mb-2 flex items-center gap-4 text-sm text-slate-600">
        <div class="flex items-center gap-1">
          <Building2 class="h-4 w-4" />
          <p>Compañia</p>
        </div>
        <div class="flex items-center gap-1">
          <MapPin class="h-4 w-4" />
          <p>Ubicacion</p>
        </div>
        <div class="flex items-center gap-1">
          <Clock class="h-4 w-4" />
          <p>Fecha</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <DollarSign className="h-4 w-4" />
        <p>Salario • Tipo de empleo</p>
      </div>
    </div>

    <button
      class="group absolute top-4 right-4 rounded-lg p-2 text-violet-500 transition hover:cursor-pointer hover:bg-slate-200"
      @click="toggleFavorite"
    >
      <Heart
        class="h-4 w-4 transition group-hover:scale-110"
        :class="{ 'fill-violet-500': favorite }"
      />
    </button>

    <div class="flex max-w-5xl flex-col gap-4">
      <p class="text-sm text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat
        labore provident necessitatibus ipsa commodi repudiandae perferendis
        illum rerum nam iste eveniet praesentium, deleniti dignissimos
        laudantium eligendi sed tempora veniam!
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in skills"
          :key="skill"
          class="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-500 shadow-sm"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
