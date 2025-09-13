<script setup lang="ts">
const props = defineProps<{ title: string; text: string }>();
</script>

<template>
	<div class="mb-4">
		<div class="flex items-center gap-2">
			<!-- Icon -->
			<slot></slot>
			<h2 class="text-2xl font-bold text-slate-900">{{ props.title }}</h2>
		</div>

		<p class="text-md text-slate-600">
			{{ props.text }}
		</p>
	</div>
</template>
