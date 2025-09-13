<script setup lang="ts">
const props = defineProps<{ text: string }>();
</script>

<template>
	<button
		type="submit"
		class="rounded-lg bg-violet-600 py-2 font-semibold text-white shadow transition hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
	>
		{{ props.text }}
	</button>
</template>
