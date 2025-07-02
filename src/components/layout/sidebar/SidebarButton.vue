<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  Home,
  Search,
  Bookmark,
  Briefcase,
  Leaf,
  SquarePen,
} from "lucide-vue-next";

const props = defineProps<{
  icon: "home" | "search" | "bookmark" | "briefcase" | "square_pen" | "default";
  label: string;
  route: string;
  isActive: boolean;
}>();
const router = useRouter();

function navigate() {
  router.push(props.route);
}
</script>

<template>
  <button
    class="group flex w-full items-center gap-4 rounded-md px-4 py-2 text-left transition-all duration-150 hover:cursor-pointer hover:bg-slate-200 hover:shadow focus:ring-2 focus:ring-violet-300 focus:outline-none"
    :class="props.isActive ? 'border-2 border-violet-500 shadow-md' : ''"
    @click="navigate"
  >
    <Home
      v-if="props.icon === 'home'"
      class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
    />
    <Search
      v-else-if="props.icon === 'search'"
      class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
    />
    <Bookmark
      v-else-if="props.icon === 'bookmark'"
      class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
    />
    <Briefcase
      v-else-if="props.icon === 'briefcase'"
      class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
    />
    <SquarePen
      v-else-if="props.icon === 'square_pen'"
      class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
    />
    <Leaf
      v-else-if="props.icon === 'default'"
      class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
    />
    <span
      class="font-medium text-slate-700 transition-colors group-hover:text-violet-700"
    >
      {{ props.label }}
    </span>
  </button>
</template>
