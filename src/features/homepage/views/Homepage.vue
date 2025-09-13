<script setup lang="ts">
import {
	Navbar,
	HeroSection,
	FeaturesSection,
	HowItWorksSection,
	CallToActionSection,
	FooterSection,
} from '../components/homepageComponents';
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
		<Navbar />
		<HeroSection />
		<FeaturesSection />
		<HowItWorksSection />
		<CallToActionSection />
		<FooterSection />
	</div>
</template>
