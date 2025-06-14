<script setup lang="ts">
import { Building2, MapPin, Clock, DollarSign, Heart } from "lucide-vue-next";
import { ref } from "vue";

const props = defineProps<{
  name?: string;
  company?: string;
  location?: string;
  date?: string;
  salary?: string;
  shift?: string;
  modality?: string;
  experience?: string;
  description?: string;
  skills?: string[];
}>();

const favorite = ref(false);

function toggleFavorite() {
  favorite.value = !favorite.value;
}
</script>

<template>
  <section
    class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm transition hover:scale-[101%] hover:cursor-pointer hover:shadow-lg"
  >
    <h2 class="mb-2 text-xl font-bold text-slate-900">{{ props.name }}</h2>

    <div class="mb-8">
      <div class="mb-2 flex items-center gap-4 text-sm text-slate-600">
        <div class="flex items-center gap-1">
          <Building2 class="h-4 w-4" />
          <p>{{ props.company }}</p>
        </div>
        <div class="flex items-center gap-1">
          <MapPin class="h-4 w-4" />
          <p>{{ props.location }}</p>
        </div>
        <div class="flex items-center gap-1">
          <Clock class="h-4 w-4" />
          <p>{{ "Publicado el " + props.date }}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <DollarSign className="h-4 w-4" />
        <p>
          {{
            props.salary +
            " • " +
            props.shift +
            " • " +
            props.modality +
            " • " +
            props.experience
          }}
        </p>
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
      <p class="text-sm whitespace-pre-line text-slate-500">
        {{ props.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in props.skills"
          :key="skill"
          class="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-500 shadow-sm"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
