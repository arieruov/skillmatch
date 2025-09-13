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

export const useSavedJobsStore = defineStore('savedJobs', () => {
	const savedJobsData = ref<dataInterface[] | null>(null);

	function setJobs(data: dataInterface[]) {
		savedJobsData.value = data;
	}

	return { savedJobsData, setJobs };
});
