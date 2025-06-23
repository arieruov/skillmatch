<script setup lang="ts">
import { ArrowDown } from "lucide-vue-next";

const props = defineProps<{
  label: string;
}>();

const inputValue = defineModel();
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="px-1 font-medium text-slate-700" for="account-type"
      >{{ props.label }}</label
    >
    <div class="relative">
      <select
        class="w-full appearance-none rounded-lg border border-slate-300 px-4 py-3 pr-10 transition placeholder:text-slate-400 hover:cursor-pointer focus:ring-2 focus:ring-violet-400 focus:outline-none"
        id="account-type"
        required
        v-model="inputValue"
      >
        <option value="" disabled>Seleccionar tipo de cuenta</option>
        <option value="user">Usuario</option>
        <option value="enterprise">Empresa</option>
      </select>
      <span class="absolute inset-y-0 right-3 flex items-center">
        <ArrowDown class="h-5 w-5 text-slate-400" />
      </span>
    </div>
  </div>
</template>
