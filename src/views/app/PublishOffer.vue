<script setup lang="ts">
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import SectionElement from "@/components/layout/SectionElement.vue";
import { Building2, Users, ArrowDown, Target, FileText } from "lucide-vue-next";
</script>

<template>
  <ScreenLayout>
    <div class="mb-8">
      <h1 className="text-3xl font-bold mb-2">Publicar Nueva Oferta</h1>
      <p className="text-slate-600">
        Completa la información para encontrar el candidato perfecto
      </p>
    </div>

    <SectionGroup>
      <SectionElement>
        <!-- Section Header -->
        <div class="mb-4">
          <div class="flex items-center gap-2">
            <Building2 class="h-6 w-6 text-slate-900" />
            <h2 class="text-2xl font-bold text-slate-900">
              Información Básica
            </h2>
          </div>
          <p class="text-md text-slate-600">
            Datos principales de la oferta de trabajo
          </p>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-4 text-sm">
          <div class="flex gap-4">
            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="job-title"
                >Título del puesto *</label
              >
              <input
                class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                type="text"
                id="job-title"
                placeholder="ej: Desarrollador Frontend React"
                required
              />
            </div>

            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="company"
                >Empresa *</label
              >
              <input
                class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                type="text"
                id="company"
                placeholder="ej: TechCorp"
                required
              />
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="location"
                >Ubicación *</label
              >
              <input
                class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                type="text"
                id="location"
                placeholder="ej: Ciudad, Estado, País"
                required
              />
            </div>

            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="company"
                >URL de aplicación*</label
              >
              <input
                class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                type="text"
                id="company"
                placeholder="ej: https://tuempresa.com/aplicar"
                required
              />
            </div>
          </div>
        </div>
      </SectionElement>

      <SectionElement>
        <!-- Section Header -->
        <div class="mb-4">
          <div class="flex items-center gap-2">
            <Users class="h-6 w-6 text-slate-900" />
            <h2 class="text-2xl font-bold text-slate-900">
              Detalles del Empleo
            </h2>
          </div>
          <p class="text-md text-slate-600">
            Especificaciones del puesto de trabajo
          </p>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-4 text-sm">
          <div class="flex gap-4">
            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="job-type"
                >Tpo de empleo *</label
              >
              <div class="relative">
                <select
                  class="w-full appearance-none rounded-lg border border-slate-300 px-4 py-3 pr-10 transition placeholder:text-slate-400 hover:cursor-pointer focus:ring-2 focus:ring-violet-400 focus:outline-none"
                  id="account-type"
                  required
                >
                  <option value="" selected>Seleccionar tipo de empleo</option>
                  <option value="full-time">Tiempo Completo</option>
                  <option value="part-time">Medio Tiempo</option>
                  <option value="contract">Contrato</option>
                  <option value="internship">Prácticas</option>
                  <option value="freelance">Freelance</option>
                </select>
                <span class="absolute inset-y-0 right-3 flex items-center">
                  <ArrowDown class="h-5 w-5 text-slate-400" />
                </span>
              </div>
            </div>

            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="experience"
                >Nivel de experiencia *</label
              >
              <div class="relative">
                <select
                  class="w-full appearance-none rounded-lg border border-slate-300 px-4 py-3 pr-10 transition placeholder:text-slate-400 hover:cursor-pointer focus:ring-2 focus:ring-violet-400 focus:outline-none"
                  id="account-type"
                  required
                >
                  <option value="" selected>Seleccionar nivel</option>
                  <option value="entry-level">Principiante</option>
                  <option value="junior">Junior</option>
                  <option value="intermediate">Intermedio</option>
                  <option value="senior">Senior</option>
                  <option value="lead-manager">Lead / Manager</option>
                </select>
                <span class="absolute inset-y-0 right-3 flex items-center">
                  <ArrowDown class="h-5 w-5 text-slate-400" />
                </span>
              </div>
            </div>

            <div class="flex flex-1 flex-col gap-2">
              <label
                class="px-1 font-medium text-slate-700"
                for="remote-availability"
                >Disponible remoto *</label
              >
              <div class="relative">
                <select
                  class="w-full appearance-none rounded-lg border border-slate-300 px-4 py-3 pr-10 transition placeholder:text-slate-400 hover:cursor-pointer focus:ring-2 focus:ring-violet-400 focus:outline-none"
                  id="remote-availability"
                  required
                >
                  <option value="" selected>Seleccionar disponibilidad</option>
                  <option value="yes">Si</option>
                  <option value="no">No</option>
                </select>
                <span class="absolute inset-y-0 right-3 flex items-center">
                  <ArrowDown class="h-5 w-5 text-slate-400" />
                </span>
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="min-salary"
                >Salario mínimo (MXN) *</label
              >
              <input
                class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                type="text"
                id="min-salary"
                placeholder="ej: 15000"
                required
              />
            </div>

            <div class="flex flex-1 flex-col gap-2">
              <label class="px-1 font-medium text-slate-700" for="max-salary"
                >Salario Máximo (MXN) *</label
              >
              <input
                class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                type="text"
                id="company"
                placeholder="ej: 25000"
                required
              />
            </div>
          </div>
        </div>
      </SectionElement>

      <SectionElement>
        <!-- Section Header -->
        <div class="mb-4">
          <div class="flex items-center gap-2">
            <Target class="h-6 w-6 text-slate-900" />
            <h2 class="text-2xl font-bold text-slate-900">
              Habilidades Requeridas
            </h2>
          </div>
          <p class="text-md text-slate-600">
            Especifica las habilidades necesarias para el puesto
          </p>
        </div>

        <!-- Form Field -->
        <div class="text-sm">
          <div class="flex flex-1 gap-2">
            <input
              class="flex-1 rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              type="text"
              placeholder="Agrega una habilidad (ej: React, Python, Excel...)"
              required
            />
            <button
              class="flex items-center justify-center rounded-md bg-violet-600 px-4 py-3 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
            >
              Agregar
            </button>
          </div>
        </div>
      </SectionElement>

      <SectionElement>
        <!-- Section Header -->
        <div class="mb-4">
          <div class="flex items-center gap-2">
            <FileText class="h-6 w-6 text-slate-900" />
            <h2 class="text-2xl font-bold text-slate-900">
              Descripción del Empleo
            </h2>
          </div>
          <p class="text-md text-slate-600">
            Información detallada sobre el puesto y la empresa
          </p>
        </div>

        <!-- Form Fields -->
        <div class="flex flex-col gap-4 text-sm">
          <div class="flex flex-1 flex-col gap-2">
            <label class="px-1 font-medium text-slate-700" for="description"
              >Descripción breve *</label
            >
            <textarea
              class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="description"
              placeholder="Una descripción corta que aparecerá en las tarjetas de búsqueda..."
              required
            ></textarea>
          </div>

          <div class="flex flex-1 flex-col gap-2">
            <label class="px-1 font-medium text-slate-700" for="aboutCompany"
              >Sobre la empresa *</label
            >
            <textarea
              class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="aboutCompany"
              placeholder="Describe tu empresa, su misión, valores y cultura..."
              required
            ></textarea>
          </div>

          <div class="flex flex-1 flex-col gap-2">
            <label
              class="px-1 font-medium text-slate-700"
              for="responsibilities"
              >Responsabilidades *</label
            >
            <textarea
              class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="responsibilities"
              placeholder="Lista las principales responsabilidades del puesto..."
              required
            ></textarea>
          </div>

          <div class="flex flex-1 flex-col gap-2">
            <label class="px-1 font-medium text-slate-700" for="requirements"
              >Requisitos *</label
            >
            <textarea
              class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
              id="requirements"
              placeholder="Especifica los requisitos mínimos y preferidos..."
              required
            ></textarea>
          </div>
        </div>
      </SectionElement>
    </SectionGroup>
  </ScreenLayout>
</template>
