<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import SidebarButton from "./SidebarButton.vue";
import UserConfigButton from "./UserConfigButton.vue";

const userStore = useUserStore();
const accountType = computed(() => userStore.userData?.["account-type"] ?? "");
const username = computed(() => userStore.userData?.username ?? "");
const email = computed(() => userStore.userData?.email ?? "");
</script>

<template>
  <aside
    class="flex h-full w-72 flex-col border-r border-slate-300 bg-slate-100 shadow-lg"
  >
    <div class="px-8 py-6">
      <h2 class="text-2xl font-bold text-violet-600">Skillmatch</h2>
    </div>

    <hr class="mx-6 border-t border-slate-300" />

    <nav class="mt-8 flex flex-col gap-2 px-4">
      <SidebarButton icon="home" label="Pagina Principal" route="/app" />
      <SidebarButton icon="search" label="Buscar Ofertas" route="/app/search" />
      <SidebarButton
        icon="bookmark"
        label="Ofertas Guardadas"
        route="/app/saved-offers"
      />

      <template v-if="accountType === 'enterprise'">
        <SidebarButton
          icon="briefcase"
          label="Publicar Oferta"
          route="/app/publish-offer"
        />
      </template>
    </nav>

    <div class="mt-auto px-4 pb-8">
      <UserConfigButton :username="username" :email="email" />
    </div>
  </aside>
</template>
