<script setup lang="ts">
const props = defineProps<{ title: string; subtitle: string }>();
</script>

<template>
	<div class="mb-8 text-center">
		<h3 class="mb-1 text-2xl font-semibold text-slate-800">
			{{ props.title }}
		</h3>
		<p class="font-light text-slate-500">
			{{ props.subtitle }}
		</p>
	</div>
</template>
