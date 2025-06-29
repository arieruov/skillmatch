import { defineStore } from "pinia";
import { ref } from "vue";

interface dataInterface {
  about_company: string;
  application_url: string;
  company: string;
  description: string;
  experience: string;
  id: string;
  job_title: string;
  job_type: string;
  location: string;
  salary: string;
  requirements: string;
  responsabilities: string;
  skills: string;
  user_id: string;
  work_mode: string;
  we_offer: string;
}

export const useJobsStore = defineStore("jobs", () => {
  const jobsData = ref<dataInterface[] | null>(null);

  function setJobs(data: dataInterface[]) {
    jobsData.value = data;
  }

  return { jobsData, setJobs };
});
