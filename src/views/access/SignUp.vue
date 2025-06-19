<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { EyeClosed, Eye, ArrowLeft, ArrowDown } from "lucide-vue-next";

const router = useRouter();

// Reactive variables for password visibility
const showPassword = ref(false);
const showPasswordConfirm = ref(false);

//  Reactive variables for form inputs
const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const accountType = ref("user"); // Default to "user"

// Toggle password visibility functions
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function togglePasswordConfirmVisibility() {
  showPasswordConfirm.value = !showPasswordConfirm.value;
}

// Navigation functions
function returnToHomepage() {
  router.push("/");
}

function goToSignin() {
  router.push("/sign-in");
}

// Function to create a new user account
// This function sends a POST request to the API to create a new user account
// It validates the form inputs, handles errors, and redirects the user upon success.
// The API endpoint is assumed to be "http://localhost:3000/register"
// Adjust the URL as needed based on your backend setup.
// Use the URL "http://localhost:3000/test-connection" for testing purposes
function createUser() {
  const apiUrl = "http://localhost:3000/test-connection";

  // Validate form inputs
  if (
    !username.value ||
    !email.value ||
    !password.value ||
    !accountType.value
  ) {
    alert("Por favor completa todos los campos.");
    return;
  }

  if (password.value !== passwordConfirm.value) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Prepare user data
  const userData = {
    username: username.value,
    email: email.value,
    password: password.value,
    accountType: accountType.value,
  };

  // Send POST request to the API
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        // Show server-provided error if available
        const errorMsg = data?.error || data?.message || "Error al crear la cuenta. Por favor intenta de nuevo.";
        throw new Error(errorMsg);
      }
      return data;
    })
    .then((data) => {
      // Handle successful account creation
      console.log("Cuenta creada exitosamente:", data);
      alert("Cuenta creada exitosamente. ¡Bienvenido!");

      // Redirect to app page
      router.push("/app");
    })
    .catch((error) => {
      // Handle errors
      console.error("Error al crear la cuenta:", error);
      alert(error.message);
    });
}
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
        <h3 class="mb-1 text-2xl font-semibold text-slate-800">Crear Cuenta</h3>
        <p class="font-light text-slate-500">
          ¡Únete hoy! Por favor completa tus datos para crear una cuenta.
        </p>
      </div>

      <!-- Form -->
      <form class="mb-6 flex flex-col gap-4" @submit.prevent="createUser">
        <!-- Username -->
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="username"
            >Nombre de Usuario</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="text"
            id="username"
            placeholder="Ingresa tu nombre de usuario"
            v-model="username"
            required
          />
        </div>

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
            v-model="email"
            required
          />
        </div>

        <!-- Account Type -->
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="account-type"
            >Tipo de Cuenta</label
          >
          <div class="relative">
            <select
              class="w-full appearance-none rounded-lg border border-slate-300 px-4 py-3 pr-10 transition placeholder:text-slate-400 hover:cursor-pointer focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="account-type"
              v-model="accountType"
              required
            >
              <option value="" disabled>Seleccionar tipo de cuenta</option>
              <option value="user">Usuario</option>
              <option value="enterprise">Empresa</option>
            </select>
            <span class="absolute inset-y-0 right-3 flex items-center">
              <ArrowDown class="h-5 w-5 text-slate-400" />
            </span>
          </div>
        </div>

        <!-- Password -->
        <div class="flex flex-col gap-2">
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
              v-model="password"
              required
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

        <!-- Password Confirmation -->
        <div class="mb-4 flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="password"
            >Confirmar Contraseña</label
          >
          <div class="relative">
            <input
              :type="showPasswordConfirm ? 'text' : 'password'"
              class="w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="password"
              placeholder="Ingresa tu contraseña"
              autocomplete="current-password"
              v-model="passwordConfirm"
              required
            />
            <button
              type="button"
              class="absolute top-0 right-3 bottom-0 text-lg text-slate-400 transition hover:cursor-pointer hover:text-violet-600"
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
        >
          Registrar
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
        Ya tienes una cuenta?
        <a
          class="font-semibold text-violet-600 transition hover:cursor-pointer hover:underline"
          @click="goToSignin"
        >
          Acceder
        </a>
      </p>
    </div>
  </div>
</template>
