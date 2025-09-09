<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  Building2,
  MapPin,
  DollarSign,
  Heart,
  ExternalLink,
} from "lucide-vue-next";
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import { useUserStore } from "@/stores/user";

interface JobOffer {
  job_title: string;
  company: string;
  location: string;
  application_url: string;
  job_type: string;
  experience: string;
  work_mode: string;
  salary: string;
  skills: string;
  description: string;
  about_company: string;
  responsabilities: string;
  requirements: string;
  we_offer: string;
  user_id: string;
}

const token = localStorage.getItem("token");
const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const jobId = route.params.id;
const favorite = ref(false);
const jobData = ref<JobOffer | null>(null);

const skills = computed(() =>
  jobData.value?.skills
    ? jobData.value?.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [],
);

async function saveOffer() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/job/saveOffer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          offerId: jobId,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.error || "/job-details: Error al guardar la oferta",
      );

      // @ts-ignore
      error.validToken = data.validToken;
      throw error;
    }

    console.log(data.message);
    favorite.value = data.isSaved;
  } catch (error: any) {
    if (error.validToken === false) {
      alert("/publish-offer: Token Invalido");
      localStorage.removeItem("token");
      userStore.cleanUser();
      router.push("/");
    }

    alert(error.message);
  }
}

onMounted(async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/job/getOffer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          offerId: jobId,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.error || "/job-details: Error al publicar la oferta",
      );

      // @ts-ignore
      error.validToken = data.validToken;
      throw error;
    }

    jobData.value = data;
    favorite.value = data.isSaved;
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
    <SectionGroup v-if="jobData">
      <section
        class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm"
      >
        <div class="flex justify-between">
          <div>
            <h1 class="mb-4 text-2xl font-bold text-slate-900">
              {{ jobData?.job_title }}
            </h1>

            <div class="mb-2 flex items-center gap-4 text-sm text-slate-600">
              <div class="flex items-center gap-1">
                <Building2 class="h-4 w-4" />
                <p>{{ jobData?.company }}</p>
              </div>

              <div class="flex items-center gap-1">
                <MapPin class="h-4 w-4" />
                <p>{{ jobData?.location }}</p>
              </div>

              <div class="flex items-center gap-1">
                <DollarSign class="h-4 w-4" />
                <p>{{ jobData?.salary }}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <p>
                {{
                  jobData?.job_type +
                  " • " +
                  jobData?.work_mode +
                  " • " +
                  jobData?.experience
                }}
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <button
              class="group flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-slate-100 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
              @click="saveOffer"
            >
              <Heart
                class="h-4 w-4 transition group-hover:scale-110"
                :class="{ 'fill-violet-500': favorite }"
              />
              Guardar
            </button>

            <a
              class="flex items-center justify-center gap-2 rounded-md bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
              :href="jobData?.application_url"
              target="_blank"
            >
              <ExternalLink class="h-4 w-4" />
              Ir a la oferta
            </a>
          </div>
        </div>
      </section>

      <!-- Required Skills -->
      <section
        class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm transition"
      >
        <h2 class="mb-4 text-2xl font-bold text-slate-900">
          Habilidades Requeridas
        </h2>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-500 shadow-sm"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- Job Information -->
      <section
        class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm transition"
      >
        <h2 class="mb-4 text-2xl font-bold text-slate-900">
          Descripción de la oferta
        </h2>

        <div class="flex flex-col gap-4">
          <div>
            <h3 class="mb-2 text-lg font-bold text-slate-700">
              Sobre la empresa
            </h3>
            <pre class="font-sans whitespace-pre-wrap text-slate-600">{{
              jobData?.about_company
            }}</pre>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-bold text-slate-700">
              Responsabilidades
            </h3>
            <pre class="font-sans whitespace-pre-wrap text-slate-600">{{
              jobData?.responsabilities
            }}</pre>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-bold text-slate-700">Requisitos</h3>
            <pre class="font-sans whitespace-pre-wrap text-slate-600">{{
              jobData?.requirements
            }}</pre>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-bold text-slate-700">Ofrecemos</h3>
            <pre class="font-sans whitespace-pre-wrap text-slate-600">{{
              jobData?.responsabilities
            }}</pre>
          </div>
        </div>
      </section>
    </SectionGroup>
  </ScreenLayout>
</template>
