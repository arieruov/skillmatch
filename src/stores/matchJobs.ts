import { defineStore } from "pinia";
import { ref } from "vue";

interface dataInterface {
  id: string;
  job_title: string;
  company: string;
  location: string;
  salary: string;
  job_type: string;
  work_mode: string;
  experience: string;
  description: string;
  skills: string;
  similarity: number;
}

export const useMatchJobsStore = defineStore("matchJobs", () => {
  const matchJobsData = ref<dataInterface[] | null>(null);

  function setJobs(data: dataInterface[]) {
    matchJobsData.value = data;
  }

  return { matchJobsData, setJobs };
});
