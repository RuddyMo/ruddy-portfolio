<template>
	<div class="relative">
		<div class="absolute left-[26px] top-0 bottom-0 w-px bg-base-content/30 dark:bg-base-content/20"></div>
		
		<ol class="relative space-y-8">
			<ExperienceTimelineItem
				v-for="(data, index) in list"
				:key="(data as any).id || (data as any).company || index"
				class="border-base-content bg-base-content dark:border-base-content dark:bg-base-content"
				:isVisible="visibleElement"
				@showThis="showThis"
				@showAll="showAll"
				:item="data"
			/>
		</ol>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExperienceTimelineItem from './ExperienceTimelineItem.vue';

interface ExperienceItem {
	id?: string | number;
	company: string;
	title: string;
	date: string;
	description: string;
	technologies: string[];
}

defineProps<{
	list: ExperienceItem[];
}>();

const visibleElement = ref<HTMLElement | null>(null);

function showThis(arg: HTMLElement) {
	visibleElement.value = arg;
}

function showAll() {
	visibleElement.value = null;
}
</script>
