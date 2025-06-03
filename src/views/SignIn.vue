<script setup lang="ts">
// Inspiration Source: https://www.behance.net/gallery/166907697/Sign-InSign-Up-modal-form-Daily-UI-001?tracking_source=project_owner_other_projects
import { useRouter } from "vue-router";

const router = useRouter();

function returnToHomepage() {
  router.push("/");
}
</script>

<template>
  <!-- Screen -->
  <div
    class="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300"
  >
    <!-- Return to homepage -->
    <button
      class="absolute top-5 left-6 font-semibold text-slate-600 transition hover:underline md:left-10"
      @click="returnToHomepage"
    >
      ← Home page
    </button>

    <!-- App name -->
    <h2
      class="mb-8 text-3xl font-bold tracking-tight text-violet-700 drop-shadow"
    >
      Skillmatch
    </h2>

    <!-- Form container -->
    <div
      class="w-full max-w-md rounded-2xl bg-white px-6 py-10 shadow-xl md:px-16"
    >
      <!-- Welcome message -->
      <div class="mb-8 text-center">
        <h3 class="mb-1 text-2xl font-semibold text-slate-800">
          Welcome Back!
        </h3>
        <p class="font-light text-slate-500">
          We missed you! Please enter your account details.
        </p>
      </div>

      <!-- Form -->
      <form class="mb-6 flex flex-col gap-6">
        <!-- Email -->
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="email"
            >Email</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="email"
            id="email"
            placeholder="Enter your Email"
            autocomplete="email"
          />
        </div>

        <!-- Password -->
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="password"
            >Password</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="password"
            id="password"
            placeholder="Enter your Password"
            autocomplete="current-password"
          />
        </div>

        <!-- Sign in button -->
        <button
          type="submit"
          class="rounded-lg bg-violet-600 py-3 font-semibold text-white shadow transition hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
        >
          Sign in
        </button>
      </form>

      <!-- Divider -->
      <div class="mb-4 flex items-center gap-2">
        <div class="h-px flex-1 bg-slate-200"></div>
        <span class="text-xs text-slate-400">or</span>
        <div class="h-px flex-1 bg-slate-200"></div>
      </div>

      <!-- Sign Up link -->
      <p class="text-center text-slate-600">
        Don't have an account?
        <a
          class="font-semibold text-violet-600 transition hover:underline"
          href="#"
        >
          Sign up
        </a>
      </p>
    </div>
  </div>
</template>
