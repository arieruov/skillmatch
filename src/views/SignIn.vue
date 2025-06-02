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
    class="min-h-screen flex justify-center items-center flex-col relative bg-slate-200"
  >
    <!-- Return to homepage -->
    <button
      class="absolute top-5 left-10 hover:cursor-pointer font-semibold"
      @click="returnToHomepage"
    >
      Home page
    </button>
    <!-- App name -->
    <h2 class="font-semibold mb-5">Skillmatch</h2>

    <!-- Form container -->
    <div class="bg-white py-8 px-16 rounded-2xl">
      <!-- Welcome message -->
      <div class="text-center mb-6">
        <h3 class="font-semibold">Welcome Back!</h3>
        <p class="font-light">
          We missed you! Please enter your account details.
        </p>
      </div>

      <!-- Inputs container -->
      <div class="flex flex-col gap-4 mb-6">
        <!-- Inputs -->
        <div class="flex flex-col gap-1">
          <label class="px-4" for="email">Email</label>
          <input
            class="px-4 py-2 border-1 rounded-lg"
            type="email"
            id="email"
            placeholder="Enter your Email"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="px-4" for="password">Password</label>
          <input
            class="px-4 py-2 border-1 rounded-lg"
            type="password"
            id="password"
            placeholder="Enter your Password"
          />
        </div>
      </div>

      <!-- Sign in button -->
      <div class="flex flex-col gap-4">
        <button
          class="bg-violet-500 text-white font-semibold hover:cursor-pointer py-2 rounded-lg"
        >
          Sign in
        </button>
        <p class="text-center">
          Don't have an account?
          <a class="text-violet-500 font-semibold hover:cursor-pointer"
            >Sign up</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
