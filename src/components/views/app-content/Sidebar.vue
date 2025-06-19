<script setup lang="ts">
import SidebarButton from "../../ui/buttons/SidebarButton.vue";
import UserConfigButton from "../../ui/buttons/UserConfigButton.vue";

const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;
const userType = user?.accountType;
</script>

<template>
  <aside
    class="flex h-full w-72 flex-col border-r border-slate-300 bg-slate-100 shadow-lg"
  >
    <!-- Logo and Title -->
    <div class="px-8 py-6">
      <h2 class="text-2xl font-bold text-violet-600">Skillmatch</h2>
    </div>

    <hr class="mx-6 border-t border-slate-300" />

    <!-- Navigation Buttons -->
    <nav class="mt-8 flex flex-col gap-2 px-4">
      <SidebarButton icon="home" label="Pagina Principal" route="/app" />
      <SidebarButton icon="search" label="Buscar Ofertas" route="/app/search" />
      <SidebarButton
        icon="bookmark"
        label="Ofertas Guardadas"
        route="/app/saved-offers"
      />

      <!-- Conditional Button for Employers -->
      <template v-if="userType === 'enterprise'">
        <!-- Temporal route -->
        <SidebarButton
          icon="briefcase"
          label="Publicar Oferta"
          route="/app/publish-offer"
        />
      </template>
    </nav>

    <!-- User Configuration Button -->
    <div class="mt-auto px-4 pb-8">
      <UserConfigButton
        username="Ariel"
        email="arielornelasfsdfsdfs.v@gmail.com"
      />
    </div>
  </aside>
</template>
