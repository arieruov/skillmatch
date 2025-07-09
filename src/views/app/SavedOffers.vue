<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useSavedJobsStore } from "@/stores/savedJobs";
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import JobCard from "@/components/common/JobCard.vue";

const token = localStorage.getItem("token");
const router = useRouter();
const userStore = useUserStore();
const savedJobsStore = useSavedJobsStore();

onMounted(async () => {
  try {
    const response = await fetch("https://skillmatch-api.onrender.com/api/job/getAllSavedOffers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.error || "/saved-offers: Error al traer las ofertas",
      );
      // @ts-ignore
      error.validToken = data.validToken;
      throw error;
    }

    savedJobsStore.setJobs(data);
  } catch (error: any) {
    if (error.validToken === false) {
      alert("/publish-offer: Token Invalido");
      localStorage.removeItem("token");
      userStore.cleanUser();
      router.push("/");
    }

    alert(error.message);
  }
});
</script>

<template>
  <ScreenLayout>
    <div class="mb-8">
      <h1 className="text-3xl font-bold mb-2">Ofertas Guardadas</h1>
      <p className="text-slate-600">Tus ofertas de trabajo favoritas</p>
    </div>
    <SectionGroup
      v-if="
        Array.isArray(savedJobsStore.savedJobsData) &&
        savedJobsStore.savedJobsData.length > 0
      "
    >
      <JobCard
        v-for="job in savedJobsStore.savedJobsData"
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
