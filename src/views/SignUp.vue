<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { EyeClosed, Eye } from "lucide-vue-next";

// State for password visibility
const showPassword = ref(false);
const showPasswordConfirm = ref(false);

const router = useRouter();

function returnToHomepage() {
  router.push("/");
}

function goToSignin() {
  router.push("/signin");
}

function goToApp() {
  router.push("/app");
}

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function togglePasswordConfirmVisibility() {
  showPasswordConfirm.value = !showPasswordConfirm.value;
}
</script>

<template>
  <!-- Screen -->
  <div
    class="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300"
  >
    <!-- Return to homepage -->
    <button
      class="absolute top-5 left-10 font-semibold text-slate-600 transition hover:underline"
      @click="returnToHomepage"
    >
      ← Home page
    </button>

    <!-- App name -->
    <h2 class="mb-8 text-3xl font-bold text-violet-700">Skillmatch</h2>

    <!-- Form container -->
    <div class="w-full max-w-md rounded-2xl bg-white px-16 py-10 shadow-xl">
      <!-- Welcome message -->
      <div class="mb-8 text-center">
        <h3 class="mb-1 text-2xl font-semibold text-slate-800">
          Create Account
        </h3>
        <p class="font-light text-slate-500">
          Join us today! Please fill in your details to create an account.
        </p>
      </div>

      <!-- Form -->
      <form class="mb-6 flex flex-col gap-4">
        <!-- Username -->
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="username"
            >Username</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="text"
            id="username"
            placeholder="Enter your Username"
          />
        </div>

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
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="password"
              placeholder="Enter your Password"
              autocomplete="current-password"
            />
            <button
              type="button"
              class="absolute top-1/2 right-3 -translate-y-1/2 text-lg text-slate-400 transition hover:text-violet-600"
              @click="togglePasswordVisibility"
              tabindex="-1"
            >
              <span v-if="showPassword">
                <Eye />
              </span>
              <span v-else>
                <EyeClosed />
              </span>
            </button>
          </div>
        </div>

        <!-- Password Confirmation -->
        <div class="mb-4 flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="password"
            >Confirm Password</label
          >
          <div class="relative">
            <input
              :type="showPasswordConfirm ? 'text' : 'password'"
              class="w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="password"
              placeholder="Enter your Password"
              autocomplete="current-password"
            />
            <button
              type="button"
              class="absolute top-1/2 right-3 -translate-y-1/2 text-lg text-slate-400 transition hover:text-violet-600"
              @click="togglePasswordConfirmVisibility"
              tabindex="-1"
            >
              <span v-if="showPasswordConfirm">
                <Eye />
              </span>
              <span v-else>
                <EyeClosed />
              </span>
            </button>
          </div>
        </div>

        <!-- Sign in button -->
        <button
          type="submit"
          class="rounded-lg bg-violet-600 py-2 font-semibold text-white shadow transition hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
          @click="goToApp"
        >
          Sign up
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
        Already have an account?
        <a
          class="font-semibold text-violet-600 transition hover:underline"
          @click="goToSignin"
        >
          Sign in
        </a>
      </p>
    </div>
  </div>
</template>
