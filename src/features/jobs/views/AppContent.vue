<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from '@/shared/components/sidebar/Sidebar.vue';
</script>

<template>
	<div class="flex h-screen bg-gradient-to-br from-slate-100 to-slate-300">
		<Sidebar />
		<RouterView />
	</div>
</template>
