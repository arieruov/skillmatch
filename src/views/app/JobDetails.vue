<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const jobName = route.params.id;
</script>

<template>
  <h1>{{ jobName }}</h1>
</template>
