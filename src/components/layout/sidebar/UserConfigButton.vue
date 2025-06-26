<script setup lang="ts">
import { Settings } from "lucide-vue-next";
import { useRouter } from "vue-router";

const props = defineProps<{
  username: string;
  email: string;
}>();
const router = useRouter();

function goToUserConfig() {
  router.push("/app/user-config");
}
</script>

<template>
  <button
    class="group flex w-full items-center gap-4 rounded-md px-4 py-3 transition-all duration-150 hover:cursor-pointer hover:bg-slate-200 hover:shadow focus:shadow focus:ring-2 focus:ring-violet-300 focus:outline-none"
    @click="goToUserConfig"
  >
    <div
      class="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-600 text-lg font-bold text-white shadow"
    >
      {{ props.username.charAt(0).toUpperCase() }}
    </div>
    <div class="flex min-w-0 flex-1 flex-col items-start text-left">
      <p
        class="w-full truncate overflow-hidden font-semibold text-ellipsis text-slate-800"
      >
        {{ props.username }}
      </p>
      <p
        class="w-full truncate overflow-hidden text-xs text-ellipsis text-slate-500"
      >
        {{ props.email }}
      </p>
    </div>
    <Settings
      class="ml-2 h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
    />
  </button>
</template>
