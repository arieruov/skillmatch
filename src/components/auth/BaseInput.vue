<script setup lang="ts">
const props = defineProps<{
  label: string;
  id: string;
  type: "text" | "email";
  placeholder: string;
}>();

const inputValue = defineModel();
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="px-1 font-medium text-slate-700" :for="props.id">{{
      props.label
    }}</label>
    <input
      class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
      :id="props.id"
      :type="props.type"
      :placeholder="props.placeholder"
      required
      v-model="inputValue"
    />
  </div>
</template>
