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
			<span class="transition-self hover:text-primary underline underline-offset-2 transition-colors font-bold text-light-content">
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
				class="px-3 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium border border-primary/30"
			>
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
</script>