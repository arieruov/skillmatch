<script setup lang="ts">
import { Target, Users, Briefcase } from 'lucide-vue-next';
</script>

<template>
	<section className="py-20 bg-white">
		<div className="max-w-7xl mx-auto px-8">
			<div className="text-center mb-16">
				<h3 className="text-3xl font-bold text-slate-900 mb-4">
					¿Por qué elegir Skillmatch?
				</h3>
				<p className="text-lg text-slate-600 max-w-2xl mx-auto">
					Nuestra plataforma revoluciona la búsqueda de empleo al enfocarse en lo que
					realmente importa: tus habilidades.
				</p>
			</div>

			<!-- Cards container -->
			<div className="grid grid-cols-3 gap-8">
				<!-- Target Card -->
				<div
					class="group rounded-xl border border-slate-100 bg-white p-8 text-center shadow-md transition-shadow duration-300 hover:border-indigo-200 hover:shadow-xl"
				>
					<div
						class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50 transition-colors group-hover:bg-indigo-100"
					>
						<Target class="h-7 w-7 text-indigo-600" />
					</div>
					<h3
						class="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-700"
					>
						Matching Inteligente
					</h3>
					<p class="text-base text-slate-600">
						Solo ve ofertas que coincidan con tus habilidades específicas. No más tiempo
						perdido en empleos irrelevantes.
					</p>
				</div>

				<!-- User Card -->
				<div
					class="group rounded-xl border border-green-100 bg-white p-8 text-center shadow-md transition-shadow duration-300 hover:border-green-200 hover:shadow-xl"
				>
					<div
						class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-green-50 transition-colors group-hover:bg-green-100"
					>
						<Users class="h-7 w-7 text-green-600" />
					</div>
					<h3
						class="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-green-700"
					>
						Para Candidatos y Empresas
					</h3>
					<p class="text-base text-slate-600">
						Busca empleos o publica ofertas. Una plataforma completa para conectar
						talento con oportunidades.
					</p>
				</div>

				<!-- Briefcase Card -->
				<div
					class="group rounded-xl border border-purple-100 bg-white p-8 text-center shadow-md transition-shadow duration-300 hover:border-purple-200 hover:shadow-xl"
				>
					<div
						class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-purple-50 transition-colors group-hover:bg-purple-100"
					>
						<Briefcase class="h-7 w-7 text-purple-600" />
					</div>
					<h3
						class="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-purple-700"
					>
						Guarda y Organiza
					</h3>
					<p class="text-base text-slate-600">
						Guarda ofertas interesantes para revisar después. Mantén tu búsqueda de
						empleo organizada y eficiente.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
