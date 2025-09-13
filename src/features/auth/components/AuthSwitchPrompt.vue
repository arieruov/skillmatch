<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
	message: string;
	linkText: string;
	route: '/login' | '/signup';
}>();

const router = useRouter();

function navigate() {
	router.push(props.route);
}
</script>

<template>
	<p class="text-center text-slate-600">
		{{ props.message }}
		<a
			class="font-semibold text-violet-600 transition hover:cursor-pointer hover:underline"
			@click="navigate"
		>
			{{ props.linkText }}
		</a>
	</p>
</template>
