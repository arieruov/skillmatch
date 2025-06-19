<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { EyeClosed, Eye, ArrowLeft } from "lucide-vue-next";

const showPassword = ref(false);
const router = useRouter();

// Toggle password visibility function
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

// Navigation functions
function returnToHomepage() {
  router.push("/");
}

function goToSignUp() {
  router.push("/sign-up");
}

function goToApp() {
  router.push("/app");
}

onMounted(() => {
  // Check if user is already logged in
  const user = localStorage.getItem("user");
  if (user) {
    router.push("/app");
  }
});
</script>

<template>
  <!-- Screen -->
  <div
    class="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300"
  >
    <!-- Return to homepage -->
    <button
      class="absolute top-5 left-10 flex items-center gap-2 font-semibold text-slate-600 transition hover:cursor-pointer hover:underline"
      @click="returnToHomepage"
    >
      <ArrowLeft class="h-5 w-5" />
      <p>Homepage</p>
    </button>

    <!-- App name -->
    <h2 class="mb-8 text-3xl font-bold text-violet-700">Skillmatch</h2>

    <!-- Form container -->
    <div class="w-full max-w-md rounded-2xl bg-white px-16 py-10 shadow-xl">
      <!-- Welcome message -->
      <div class="mb-8 text-center">
        <h3 class="mb-1 text-2xl font-semibold text-slate-800">
          ¡Bienvenido de nuevo!
        </h3>
        <p class="font-light text-slate-500">
          ¡Te extrañamos! Por favor ingresa los datos de tu cuenta.
        </p>
      </div>

      <!-- Form -->
      <form class="mb-6 flex flex-col gap-4">
        <!-- Email -->
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="email"
            >Correo</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            autocomplete="email"
          />
        </div>

        <!-- Password -->
        <div class="mb-4 flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="password"
            >Contraseña</label
          >
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="password"
              placeholder="Ingresa tu contraseña"
              autocomplete="current-password"
            />
            <button
              type="button"
              class="absolute top-0 right-3 bottom-0 text-lg text-slate-400 transition hover:cursor-pointer hover:text-violet-600"
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

        <!-- Sign in button -->
        <button
          type="submit"
          class="rounded-lg bg-violet-600 py-2 font-semibold text-white shadow transition hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none active:bg-violet-800"
          @click="goToApp"
        >
          Acceder
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
        No tienes una cuenta?
        <a
          class="font-semibold text-violet-600 transition hover:cursor-pointer hover:underline"
          @click="goToSignUp"
        >
          Registrate
        </a>
      </p>
    </div>
  </div>
</template>
