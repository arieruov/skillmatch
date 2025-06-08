<script setup lang="ts">
import { Home, Search, Bookmark, Settings } from "lucide-vue-next";
</script>

<template>
  <aside class="flex h-full w-72 flex-col bg-slate-100 shadow-lg">
    <!-- App name -->
    <div class="px-8 py-6">
      <h1 class="text-2xl font-bold text-violet-600">Skillmatch</h1>
    </div>

    <hr class="mx-6 border-t border-slate-300" />

    <!-- Page Buttons -->
    <nav class="mt-8 flex flex-col gap-2 px-4">
      <button
        class="group flex w-full items-center gap-4 rounded-md px-4 py-2 text-left transition-all duration-150 hover:cursor-pointer hover:bg-slate-200 hover:shadow focus:ring-2 focus:ring-violet-300 focus:outline-none"
      >
        <Home
          class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
        />
        <span
          class="font-medium text-slate-700 transition-colors group-hover:text-violet-700"
        >
          Pagina principal
        </span>
      </button>
      <button
        class="group flex w-full items-center gap-4 rounded-md px-4 py-2 text-left transition-all duration-150 hover:cursor-pointer hover:bg-slate-200 hover:shadow focus:ring-2 focus:ring-violet-300 focus:outline-none"
      >
        <Search
          class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
        />
        <span
          class="font-medium text-slate-700 transition-colors group-hover:text-violet-700"
        >
          Busqueda
        </span>
      </button>
      <button
        class="group flex w-full items-center gap-4 rounded-md px-4 py-2 text-left transition-all duration-150 hover:cursor-pointer hover:bg-slate-200 hover:shadow focus:ring-2 focus:ring-violet-300 focus:outline-none"
      >
        <Bookmark
          class="h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
        />
        <span
          class="font-medium text-slate-700 transition-colors group-hover:text-violet-700"
        >
          Ofertas guardadas
        </span>
      </button>
    </nav>

    <!-- Profile Button -->
    <div class="mt-auto px-4 pb-8">
      <button
        class="group flex w-full items-center gap-4 rounded-md px-4 py-3 transition-all duration-150 hover:cursor-pointer hover:bg-slate-200 hover:shadow focus:shadow focus:ring-2 focus:ring-violet-300 focus:outline-none"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-600 text-lg font-bold text-white shadow"
        >
          U
        </div>
        <div class="flex min-w-0 flex-1 flex-col items-start text-left">
          <p class="truncate font-semibold text-slate-800">Username</p>
          <p class="truncate text-xs text-slate-500">username@email.com</p>
        </div>
        <Settings
          class="ml-2 h-5 w-5 text-violet-600 transition-transform group-hover:scale-110"
        />
      </button>
    </div>
  </aside>
</template>
