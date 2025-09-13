<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ArrowLeft } from 'lucide-vue-next';

const router = useRouter();

function returnToHomepage() {
	router.push('/');
}
</script>

<template>
	<button
		class="absolute top-5 left-10 flex items-center gap-2 font-semibold text-slate-600 transition hover:cursor-pointer hover:underline"
		@click="returnToHomepage"
	>
		<ArrowLeft class="h-5 w-5" />
		<p>Homepage</p>
	</button>
</template>
