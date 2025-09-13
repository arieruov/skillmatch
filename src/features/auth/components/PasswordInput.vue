<script setup lang="ts">
import { ref } from 'vue';
import { EyeClosed, Eye } from 'lucide-vue-next';

const props = defineProps<{
	label: string;
	id: string;
	placeholder: string;
}>();

const showPassword = ref(false);
const inputValue = defineModel();

function togglePasswordVisibility() {
	showPassword.value = !showPassword.value;
}
</script>

<template>
	<div class="mb-4 flex flex-col gap-2">
		<label class="px-1 font-medium text-slate-700" :for="props.id">{{ props.label }}</label>

		<div class="relative">
			<input
				class="w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-400 focus:outline-none"
				:id="props.id"
				:type="showPassword ? 'text' : 'password'"
				:placeholder="props.placeholder"
				required
				v-model="inputValue"
			/>
			<button
				type="button"
				class="absolute top-0 right-3 bottom-0 text-lg text-slate-400 transition hover:cursor-pointer hover:text-violet-600"
				@click="togglePasswordVisibility"
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
</template>
