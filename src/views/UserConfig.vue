<template>
  <main class="flex flex-1 flex-col px-8 py-6">
    <div class="mb-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Configuración de Cuenta
      </h1>
      <p className="text-slate-600">Configuración de Cuenta</p>
    </div>

    <!-- Personal Info Section -->
    <section
      class="mb-6 flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm"
    >
      <h2 class="mb-6 text-2xl font-bold text-slate-900">
        Información Personal
      </h2>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="username"
            >Nombre de Usuario</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="text"
            id="username"
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>
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
      </div>
    </section>

    <!-- Preferences Section -->
    <section
      class="mb-8 flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm"
    >
      <h2 class="mb-6 text-2xl font-bold text-slate-900">
        Preferencias de Búsqueda
      </h2>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="location"
            >Ubicación preferida</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="text"
            id="location"
            placeholder="Guadalajara, Jalisco"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="pay"
            >Salario mínimo</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="text"
            id="pay"
            placeholder="MXN 10,000"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="px-1 font-medium text-slate-700" for="type"
            >Tipo de trabajo</label
          >
          <input
            class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
            type="text"
            id="type"
            placeholder="Tiempo completo"
          />
        </div>
      </div>
    </section>

    <!-- Buttons -->
    <div class="flex flex-row gap-4">
      <button
        class="flex items-center justify-center rounded-md bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
      >
        Guardar cambios
      </button>
      <button
        class="flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-slate-100 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
      >
        Cancelar
      </button>
    </div>
  </main>
</template>
