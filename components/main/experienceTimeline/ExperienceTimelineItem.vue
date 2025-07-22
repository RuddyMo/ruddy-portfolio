<template>
	<li ref="root" class="relative pl-16">
		<!-- Point de la timeline - en dehors de la zone de hover -->
		<div
			v-bind="$attrs"
			class="absolute left-[16px] top-6 h-5 w-5 rounded-full border bg-white dark:bg-gray-800 z-10"
		/>
		
		<!-- Zone de contenu avec hover séparée -->
		<div 
			class="hover:border-primary transition-all duration-200 rounded-md border border-transparent p-4 hover:bg-base-200/10 dark:hover:bg-base-100/50"
			@mouseover="handleMouseOver"
			@mouseleave="handleMouseLeave"
		>
			<ExperienceTimelineContent
				:isNull="isNull"
				:isSelected="isSelected"
				:item="item"
			/>
		</div>
	</li>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ExperienceTimelineContent from './ExperienceTimelineContent.vue';

interface ExperienceItem {
	id?: string | number;
	date: string;
	title: string;
	company: string;
	description: string;
	technologies: string[];
}

defineOptions({
	inheritAttrs: false,
});

const props = defineProps<{
	isVisible?: HTMLElement | null;
	item: ExperienceItem;
	isLast?: boolean;
}>();

const emit = defineEmits<{
	showThis: [element: HTMLElement];
	showAll: [];
}>();

const root = ref<HTMLElement | null>(null);

const handleMouseOver = () => {
	if (root.value) {
		emit('showThis', root.value);
	}
};

const handleMouseLeave = () => {
	emit('showAll');
};

const isNull = computed(() => {
	return props.isVisible == null;
});

const isSelected = computed(() => {
	return props.isVisible === root.value;
});
</script>
