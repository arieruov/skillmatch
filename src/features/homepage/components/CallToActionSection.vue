<script setup lang="ts">
import { Search, Briefcase } from 'lucide-vue-next';
</script>

<template>
	<section className="py-20 bg-white">
		<div className="max-w-4xl mx-auto text-center px-8">
			<h3 className="text-3xl font-bold text-slate-900 mb-6">
				¿Listo para encontrar tu trabajo ideal?
			</h3>
			<p className="text-lg text-slate-600 mb-8">
				Únete a miles de profesionales que ya encontraron su match perfecto
			</p>
			<div class="flex flex-row justify-center gap-4">
				<button
					class="flex items-center justify-center rounded-lg bg-violet-600 px-8 py-3 font-semibold text-white shadow transition-colors duration-200 hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:outline-none"
				>
					Buscar empleos
					<Search class="ml-2 h-5 w-5" />
				</button>
				<button
					class="flex items-center justify-center rounded-lg border border-violet-600 bg-white px-8 py-3 font-semibold text-violet-600 shadow transition-colors duration-200 hover:cursor-pointer hover:bg-violet-50 focus:ring-2 focus:ring-violet-400 focus:outline-none"
				>
					Publicar oferta
					<Briefcase class="ml-2 h-5 w-5" />
				</button>
			</div>
		</div>
	</section>
</template>
