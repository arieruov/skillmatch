<script setup lang="ts">
import SidebarButton from "./SidebarButton.vue";
import UserConfigButton from "./UserConfigButton.vue";

const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;
const userType = user?.accountType;
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

      <template v-if="userType === 'enterprise'">
        <SidebarButton
          icon="briefcase"
          label="Publicar Oferta"
          route="/app/publish-offer"
        />
      </template>
    </nav>

    <div class="mt-auto px-4 pb-8">
      <UserConfigButton
        username="Ariel"
        email="arielornelasfsdfsdfs.v@gmail.com"
      />
    </div>
  </aside>
</template>
