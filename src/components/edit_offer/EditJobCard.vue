<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { Building2, MapPin, DollarSign } from "lucide-vue-next";

const router = useRouter();

const props = defineProps<{
  id?: string;
  jobTitle?: string;
  company?: string;
  location?: string;
  salary?: string;
  jobType?: string;
  workMode?: string;
  experience?: string;
  description?: string;
  skills?: string;
}>();

const skillList = computed(() =>
  props.skills
    ? props.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [],
);

function goToJob() {
  router.push(`/app/edit-offer-info/${props.id}`);
}
</script>

<template>
  <section
    class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm transition hover:scale-[101%] hover:cursor-pointer hover:shadow-lg"
    @click="goToJob"
  >
    <h2 class="mb-4 text-xl font-bold text-slate-900">{{ props.jobTitle }}</h2>

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
          <DollarSign class="h-4 w-4" />
          <p>{{ props.salary }}</p>
        </div>
      </div>

      <p className="text-sm text-slate-600">
        {{ props.jobType + " • " + props.workMode + " • " + props.experience }}
      </p>
    </div>

    <div class="flex max-w-5xl flex-col gap-4">
      <p class="text-sm whitespace-pre-line text-slate-500">
        {{ props.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in skillList"
          :key="skill"
          class="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-500 shadow-sm"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>
