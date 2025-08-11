<template>
	<div
		class="transition-everything duration-200"
		:class="{
			'opacity-40 dark:opacity-60': !isNull && !isSelected,
			'translate-x-2': isSelected,
		}"
	>
		<time
			class="transition-self mb-3 text-base font-medium leading-none text-hide-content"
			:class="{
				'text-primary': isSelected,
			}"
		>
			{{ item.date }}
		</time>
		<h3
			class="transition-self text-wrap text-xl font-bold text-base-content mb-3"
		>
			{{ item.title }} chez 
			<span class="transition-self hover:text-hover-content underline underline-offset-2 transition-colors font-bold text-light-content">
				{{ item.company }}
			</span>
		</h3>
		<p
			class="transition-self mb-4 text-base font-normal text-base-content/80 sm:mr-24 md:mr-48 lg:mr-auto lg:w-10/12 leading-relaxed"
		>
			{{ item.description }}
		</p>
		<div
			class="flex-l mb-4 flex select-none flex-row flex-wrap place-items-center items-center gap-2"
		>
			<span
				v-for="stackItem in item.technologies"
				:key="stackItem"
				class="px-3 py-2 bg-hover-content/20 text-base-content rounded-lg text-sm font-medium border border-hover-content/30 flex items-center gap-2"
			>
				<img 
					:src="getTechIcon(stackItem)" 
					:alt="`${stackItem} icon`"
					class="w-4 h-4"
				/>
				{{ stackItem }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
interface ExperienceItem {
	date: string;
	title: string;
	company: string;
	description: string;
	technologies: string[];
}

defineProps<{
	isSelected: boolean;
	isNull: boolean;
	item: ExperienceItem;
}>();

// Fonction pour mapper les technologies aux icônes SVG
const getTechIcon = (techName: string): string => {
	const techMap: { [key: string]: string } = {
		'Nuxt': '/img/tech/nuxt.svg',
		'Tailwind CSS': '/img/tech/tailwind.svg',
		'TypeScript': '/img/tech/typescript.svg',
		'Git': '/img/tech/git.svg',
		'i18n': '/img/tech/i18n.svg',
		'Dart': '/img/tech/dart.svg',
		'Flutter': '/img/tech/flutter.svg',
		'Isar': '/img/tech/isar.svg',
		'Riverpod': '/img/tech/riverpod.svg',
		'Slang': '/img/tech/slang.svg',
		'Figma': '/img/tech/figma.svg',
		'WordPress': '/img/tech/wordpress.svg',
		'JQuery': '/img/tech/jquery.svg',
		'Divi': '/img/tech/divi.svg'
	};
	
	// Retourne l'icône correspondante ou une icône par défaut
	return techMap[techName] || '/img/tech/default.svg';
};
</script>