<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { useJobsStore } from "@/stores/jobs";
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import JobCard from "@/components/common/JobCard.vue";

const token = localStorage.getItem("token");
const router = useRouter();
const userStore = useUserStore();
const jobsStore = useJobsStore();

onMounted(async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/job/getAllOffers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.error || "/app: Error al traer las ofertas");
      // @ts-ignore
      error.validToken = data.validToken;
      throw error;
    }

    jobsStore.setJobs(data);
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
      <h1 className="text-3xl font-bold mb-2">Ofertas de Trabajo</h1>
      <p className="text-slate-600">
        Explora todas las oportunidades disponibles
      </p>
    </div>

    <SectionGroup
      v-if="Array.isArray(jobsStore.jobsData) && jobsStore.jobsData.length > 0"
    >
      <JobCard
        v-for="job in jobsStore.jobsData"
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
