<script setup lang="ts">
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import JobCard from "@/components/common/JobCard.vue";
import { useMatchJobsStore } from "@/stores/matchJobs";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const token = localStorage.getItem("token");
const router = useRouter();
const matchJobsStore = useMatchJobsStore();
const userStore = useUserStore();
const skills = ref("");

async function getMatchOffers() {
  if (!skills.value || skills.value.trim() === "") {
    alert("Por favor ingresa al menos una habilidad.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/job/matchJobs", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ skills: skills.value }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.error || "Search: Error al traer las ofertas",
      );
      // @ts-ignore
      error.validToken = data.validToken;
      throw error;
    }

    matchJobsStore.setJobs(data.jobs);
    console.log(data.jobs);
    console.log(matchJobsStore.matchJobsData);
  } catch (error: any) {
    if (error.validToken === false) {
      alert("Search: Token Invalido");
      localStorage.removeItem("token");
      userStore.cleanUser();
      router.push("/");
    }

    alert(error.message);
  }
}
</script>

<template>
  <ScreenLayout>
    <div class="mb-8">
      <h1 class="mb-2 text-3xl font-bold">Búsqueda por Habilidades</h1>
      <p class="text-slate-600">
        Encuentra ofertas que coincidan con tus habilidades
      </p>
    </div>

    <form class="mb-8" @submit.prevent="getMatchOffers">
      <div
        class="flex gap-4 rounded-lg border border-slate-300 bg-slate-50 p-2 shadow-sm transition hover:shadow-lg"
      >
        <div class="relative flex-1">
          <Search
            class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400"
          />
          <input
            class="w-full rounded-md border border-slate-200 bg-slate-50 py-3 pr-4 pl-10 text-slate-700 transition focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="text"
            placeholder="¿Qué habilidades tienes? (ej: Excel, Python, Marketing...)"
            v-model="skills"
          />
        </div>
        <button
          class="flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white shadow transition hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
          type="submit"
        >
          Buscar
        </button>
      </div>
    </form>

    <SectionGroup
      v-if="
        Array.isArray(matchJobsStore.matchJobsData) &&
        matchJobsStore.matchJobsData.length > 0
      "
    >
      <JobCard
        v-for="job in matchJobsStore.matchJobsData"
        :key="job.id"
        :id="job.id"
        :jobTitle="job.job_title"
        :company="job.company"
        :location="job.location"
        :salary="job.salary"
        :jobType="job.job_type"
        :workMode="job.work_mode"
        :experience="job.experience"
        :description="job.description"
        :skills="job.skills"
      />
    </SectionGroup>
  </ScreenLayout>
</template>
