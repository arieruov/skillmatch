<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { usePublishedJobsStore } from "@/stores/publishedJobs";
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import EditJobCard from "@/components/edit_offer/EditJobCard.vue";

const token = localStorage.getItem("token");
const router = useRouter();
const userStore = useUserStore();
const publishedJobsStore = usePublishedJobsStore();

onMounted(async () => {
  try {
    const response = await fetch(
      "https://skillmatch-api.onrender.com/api/job/getOffersPublishedByUser",
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

    publishedJobsStore.setJobs(data);
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
      <h1 className="text-3xl font-bold mb-2">Editar Oferta</h1>
      <p className="text-slate-600">Selecciona la oferta que quieras editar</p>
    </div>

    <SectionGroup
      v-if="
        Array.isArray(publishedJobsStore.PublishedJobsData) &&
        publishedJobsStore.PublishedJobsData.length > 0
      "
    >
      <EditJobCard
        v-for="job in publishedJobsStore.PublishedJobsData"
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
