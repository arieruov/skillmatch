import { defineStore } from 'pinia';
import { ref } from 'vue';

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
}

export const useJobsStore = defineStore('jobs', () => {
	const jobsData = ref<dataInterface[] | null>(null);

	function setJobs(data: dataInterface[]) {
		jobsData.value = data;
	}

	return { jobsData, setJobs };
});
