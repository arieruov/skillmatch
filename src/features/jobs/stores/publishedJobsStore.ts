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

export const usePublishedJobsStore = defineStore('publishedJobs', () => {
	const PublishedJobsData = ref<dataInterface[] | null>(null);

	function setJobs(data: dataInterface[]) {
		PublishedJobsData.value = data;
	}

	return { PublishedJobsData, setJobs };
});
