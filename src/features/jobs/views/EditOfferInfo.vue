<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Building2, Users, ArrowDown, Target, FileText } from 'lucide-vue-next';
import ScreenLayout from '@/shared/components/ScreenLayout.vue';
import SectionGroup from '@/shared/components/SectionGroup.vue';
import SectionElement from '@/shared/components/SectionElement.vue';
import SectionHeader from '@/shared/components/SectionHeader.vue';
import { useUserStore } from '@/shared/stores/userStore';

const token = localStorage.getItem('token');
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const jobId = route.params.id;

const jobTitle = ref('');
const company = ref('');
const location = ref('');
const applicationUrl = ref('');
const jobType = ref('');
const experience = ref('');
const workMode = ref('');
const salary = ref('');
const skillInput = ref('');
const description = ref('');
const aboutCompany = ref('');
const responsabilities = ref('');
const requirements = ref('');
const weOffer = ref('');

async function publishOffer() {
	if (
		!jobTitle.value.trim() ||
		!company.value.trim() ||
		!location.value.trim() ||
		!applicationUrl.value.trim() ||
		!jobType.value.trim() ||
		!experience.value.trim() ||
		!workMode.value.trim() ||
		!salary.value.trim() ||
		!skillInput.value.trim() ||
		!description.value.trim() ||
		!aboutCompany.value.trim() ||
		!responsabilities.value.trim() ||
		!requirements.value.trim() ||
		!weOffer.value.trim()
	) {
		alert('Por favor, completa todos los campos obligatorios.');
		return;
	}

	const confirmed = window.confirm('¿Estás seguro de que deseas modificar esta oferta?\n ');

	if (!confirmed) return;

	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/api/job/editOffer`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				offerId: jobId,
				jobTitle: jobTitle.value,
				company: company.value,
				location: location.value,
				applicationUrl: applicationUrl.value,
				jobType: jobType.value,
				experience: experience.value,
				workMode: workMode.value,
				salary: salary.value,
				skills: skillInput.value,
				description: description.value,
				aboutCompany: aboutCompany.value,
				responsabilities: responsabilities.value,
				requirements: requirements.value,
				weOffer: weOffer.value,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			if (data.validToken === false) {
				alert('Hubo un error con la sesion actual, ingresa nuevamente para continuar');

				localStorage.removeItem('token');
				userStore.cleanUser();
				router.push('/');
			}

			throw new Error(data.error || 'Error al intentar modificar la oferta actual');
		}

		alert('Oferta modificada exitosamente.');
		router.push('/app');
	} catch (error) {
		alert(error);
	}
}

async function deleteOffer() {
	const confirmed = window.confirm('¿Estás seguro de que deseas eliminar esta oferta?\n ');

	if (!confirmed) return;

	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/api/job/deleteOffer`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				offerId: jobId,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			if (data.validToken === false) {
				alert('Hubo un error con la sesion actual, ingresa nuevamente para continuar');

				localStorage.removeItem('token');
				userStore.cleanUser();
				router.push('/');
			}

			throw new Error(data.error || 'Error al intentar eliminar la oferta actual');
		}

		alert('Oferta eliminada exitosamente.');
	} catch (error) {
		alert(error);
	}
}

onMounted(async () => {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/api/job/getOffer`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				offerId: jobId,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			if (data.validToken === false) {
				alert('Hubo un error con la sesion actual, ingresa nuevamente para continuar');

				localStorage.removeItem('token');
				userStore.cleanUser();
				router.push('/');
			}

			throw new Error(
				data.error || 'Error al intentar obtener las oferta de la base de datos',
			);
		}

		jobTitle.value = data.job_title;
		company.value = data.company;
		location.value = data.location;
		applicationUrl.value = data.application_url;
		jobType.value = data.job_type;
		experience.value = data.experience;
		workMode.value = data.work_mode;
		salary.value = data.salary;
		skillInput.value = data.skills;
		description.value = data.description;
		aboutCompany.value = data.about_company;
		responsabilities.value = data.responsabilities;
		requirements.value = data.requirements;
		weOffer.value = data.we_offer;
	} catch (error) {
		alert(error);
	}
});
</script>

<template>
	<ScreenLayout>
		<div class="mb-8">
			<h1 class="mb-2 text-3xl font-bold">Editar oferta</h1>
			<p class="text-slate-600">
				Modifica los datos de la oferta laboral según los cambios que desees realizar.
			</p>
		</div>

		<SectionGroup>
			<SectionElement>
				<SectionHeader
					title="Información Básica"
					text="Datos principales de la oferta de trabajo"
					><Building2 class="h-6 w-6 text-slate-900"
				/></SectionHeader>

				<!-- Form Fields -->
				<div class="flex flex-col gap-4 text-sm">
					<div class="flex gap-4">
						<div class="flex flex-1 flex-col gap-2">
							<label class="px-1 font-medium text-slate-700" for="job-title"
								>Título del puesto *</label
							>
							<input
								class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
								id="job-title"
								type="text"
								placeholder="ej: Desarrollador Frontend React"
								required
								v-model="jobTitle"
							/>
						</div>

						<div class="flex flex-1 flex-col gap-2">
							<label class="px-1 font-medium text-slate-700" for="company"
								>Empresa *</label
							>
							<input
								class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
								id="company"
								type="text"
								placeholder="ej: TechCorp"
								required
								v-model="company"
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
								id="location"
								type="text"
								placeholder="ej: Ciudad, Estado, País"
								required
								v-model="location"
							/>
						</div>

						<div class="flex flex-1 flex-col gap-2">
							<label class="px-1 font-medium text-slate-700" for="application-url"
								>URL de aplicación*</label
							>
							<input
								class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
								type="text"
								id="application-url"
								placeholder="ej: https://tuempresa.com/aplicar"
								required
								v-model="applicationUrl"
							/>
						</div>
					</div>
				</div>
			</SectionElement>

			<SectionElement>
				<SectionHeader
					title="Detalles del Empleo"
					text="Especificaciones del puesto de trabajo"
					><Users class="h-6 w-6 text-slate-900"
				/></SectionHeader>

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
									id="job-type"
									required
									v-model="jobType"
								>
									<option value="" selected>Seleccionar tipo de empleo</option>
									<option value="Tiempo Completo">Tiempo Completo</option>
									<option value="Medio Tiempo">Medio Tiempo</option>
									<option value="Contrato">Contrato</option>
									<option value="Practicas">Prácticas</option>
									<option value="Freelance">Freelance</option>
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
									id="experience"
									required
									v-model="experience"
								>
									<option value="" selected>Seleccionar nivel</option>
									<option value="Nivel de entrada">Nivel de entrada</option>
									<option value="Junior">Junior</option>
									<option value="Intermedio">Intermedio</option>
									<option value="Senior">Senior</option>
								</select>
								<span class="absolute inset-y-0 right-3 flex items-center">
									<ArrowDown class="h-5 w-5 text-slate-400" />
								</span>
							</div>
						</div>

						<div class="flex flex-1 flex-col gap-2">
							<label class="px-1 font-medium text-slate-700" for="work-mode"
								>Modo de trabajo *</label
							>
							<div class="relative">
								<select
									class="w-full appearance-none rounded-lg border border-slate-300 px-4 py-3 pr-10 transition placeholder:text-slate-400 hover:cursor-pointer focus:ring-2 focus:ring-violet-400 focus:outline-none"
									id="work-mode"
									required
									v-model="workMode"
								>
									<option value="" selected>Seleccionar disponibilidad</option>
									<option value="Presencial">Presencial</option>
									<option value="Hibrido">Hibrido</option>
									<option value="Remoto">Remoto</option>
								</select>
								<span class="absolute inset-y-0 right-3 flex items-center">
									<ArrowDown class="h-5 w-5 text-slate-400" />
								</span>
							</div>
						</div>
					</div>

					<div class="flex">
						<div class="flex flex-1 flex-col gap-2">
							<label class="px-1 font-medium text-slate-700" for="salary"
								>Salario (MXN) *</label
							>
							<input
								class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
								type="text"
								id="salary"
								placeholder="ej: 15000"
								required
								v-model="salary"
							/>
						</div>
					</div>
				</div>
			</SectionElement>

			<SectionElement>
				<SectionHeader
					title="Habilidades Requeridas"
					text="Especifica las habilidades necesarias para el puesto"
					><Target class="h-6 w-6 text-slate-900"
				/></SectionHeader>

				<!-- Form Field -->
				<div class="text-sm">
					<div class="flex flex-1 gap-2">
						<input
							class="flex-1 rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
							type="text"
							placeholder="Agrega una habilidad (ej: React, Python, Excel...)"
							required
							v-model="skillInput"
						/>
					</div>
				</div>
			</SectionElement>

			<SectionElement>
				<SectionHeader
					title="Descripción del Empleo"
					text="Información detallada sobre el puesto y la empresa"
					><FileText class="h-6 w-6 text-slate-900"
				/></SectionHeader>

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
							v-model="description"
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
							v-model="aboutCompany"
						></textarea>
					</div>

					<div class="flex flex-1 flex-col gap-2">
						<label class="px-1 font-medium text-slate-700" for="responsabilities"
							>Responsabilidades *</label
						>
						<textarea
							class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
							id="responsabilities"
							placeholder="Lista las principales responsabilidades del puesto..."
							required
							v-model="responsabilities"
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
							v-model="requirements"
						></textarea>
					</div>

					<div class="flex flex-1 flex-col gap-2">
						<label class="px-1 font-medium text-slate-700" for="weOffer"
							>Ofrecemos *</label
						>
						<textarea
							class="rounded-lg border border-slate-300 px-4 py-3 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
							id="weOffer"
							placeholder="Describe los beneficios, prestaciones y lo que tu empresa ofrece a los empleados..."
							required
							v-model="weOffer"
						></textarea>
					</div>
				</div>
			</SectionElement>
		</SectionGroup>

		<div class="mt-4 mb-32 flex justify-between">
			<button
				class="flex items-center justify-center rounded-md bg-violet-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
				@click="publishOffer"
			>
				Editar oferta
			</button>
			<button
				class="flex items-center justify-center rounded-md bg-red-600 px-4 py-2 font-semibold text-white shadow-sm transition-colors duration-200 hover:cursor-pointer hover:bg-red-700 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none"
				@click="deleteOffer"
			>
				Eliminar oferta
			</button>
		</div>
	</ScreenLayout>
</template>
