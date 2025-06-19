<script setup lang="ts">
import ScreenLayout from "@/components/layout/ScreenLayout.vue";
import SectionGroup from "@/components/layout/SectionGroup.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  Building2,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  ExternalLink,
} from "lucide-vue-next";

const route = useRoute();
const jobName = route.params.id;
const favorite = ref(false);
const skills = [
  "Excel",
  "Python",
  "Marketing Digital",
  "Diseño Gráfico",
  "SQL",
  "React",
  "Ventas",
  "Contabilidad",
];

function toggleFavorite() {
  favorite.value = !favorite.value;
}
</script>

<template>
  <ScreenLayout>
    <SectionGroup>
      <!-- Job header -->
      <section
        class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm"
      >
        <div class="flex justify-between">
          <div>
            <h1 class="mb-4 text-2xl font-bold text-slate-900">
              {{ jobName }}
            </h1>

            <div class="mb-2 flex items-center gap-4 text-sm text-slate-600">
              <div class="flex items-center gap-1">
                <Building2 class="h-4 w-4" />
                <p>Compañia</p>
              </div>
              <div class="flex items-center gap-1">
                <MapPin class="h-4 w-4" />
                <p>Ubicacion</p>
              </div>
              <div class="flex items-center gap-1">
                <Clock class="h-4 w-4" />
                <p>Fecha publicacion</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600">
              <DollarSign className="h-4 w-4" />
              <p>Salario • Horario • Modalidad • Experiencia</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <button
              class="group flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-slate-100 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
              @click="toggleFavorite"
            >
              <Heart
                class="h-4 w-4 transition group-hover:scale-110"
                :class="{ 'fill-violet-500': favorite }"
              />
              Guardar
            </button>
            <button
              class="flex items-center justify-center gap-2 rounded-md bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
            >
              <ExternalLink class="h-4 w-4" />
              Ir a la oferta
            </button>
          </div>
        </div>
      </section>

      <!-- Required Skills -->
      <section
        class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm transition"
      >
        <h2 class="mb-4 text-xl font-bold text-slate-900">
          Habilidades Requeridas
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-500 shadow-sm"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <!--  -->
      <section
        class="relative flex flex-col rounded-lg border border-slate-300 bg-slate-50 p-6 shadow-sm transition"
      >
        <h2 class="mb-4 text-xl font-bold text-slate-900">
          Descripcion de la oferta
        </h2>
        <pre class="font-sans whitespace-pre-wrap text-slate-600">
      Sobre la empresa
  
      TechCorp es una empresa líder en desarrollo de software con más de 10 años de experiencia en el mercado. Trabajamos con clientes de todo el mundo creando soluciones innovadoras.
      Descripción del puesto
  
      Estamos buscando un Desarrollador Frontend React apasionado para unirse a nuestro equipo de desarrollo. Serás responsable de crear interfaces de usuario atractivas y funcionales utilizando las últimas tecnologías web.
      Responsabilidades
  
          Desarrollar componentes React reutilizables y mantenibles
          Colaborar con el equipo de diseño para implementar interfaces de usuario
          Optimizar aplicaciones para máxima velocidad y escalabilidad
          Participar en revisiones de código y mantener estándares de calidad
          Trabajar en metodologías ágiles con el equipo de desarrollo
  
      Requisitos
  
          3+ años de experiencia en desarrollo frontend
          Experiencia sólida con React y JavaScript ES6+
          Conocimiento de HTML5, CSS3 y preprocesadores CSS
          Experiencia con herramientas de build (Webpack, Vite)
          Conocimiento de Git y metodologías de desarrollo colaborativo
  
      Beneficios
  
          Salario competitivo y revisiones anuales
          Trabajo remoto flexible
          Seguro médico privado
          Presupuesto para formación y conferencias
          Ambiente de trabajo colaborativo y dinámico
        </pre>
      </section>
    </SectionGroup>
  </ScreenLayout>
</template>
