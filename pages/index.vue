<script setup lang="ts">
import { useStartAnimation } from '../composables/useStartAnimation';
import CursorPointer from '~/components/pointer/CursorPointer.vue';
import TailedCursor from '~/components/TailedCursor.vue';
import { ref } from 'vue';
import ExperienceTimeline from '~/components/main/experienceTimeline/ExperienceTimeline.vue';

const isProjectListHovered = ref(false);

// Données d'expérience - tu peux les modifier ici
const experience = [
  {
    id: 1,
    date: "2024 - Présent",
    company: "Dascience",
    title: "Alternant Développeur Frontend",
    description: "Développement d'une application web en lien avec l'application mutliplateforme.",
    technologies: ["Nuxt", "Tailwind CSS", "TypeScript", "Git", "i18n"]
  },
  {
    id: 2,  
    date: "2023 - 2024",
    company: "Dascience",
    title: "Alternant Développeur Fullstack Multi-plateforme",
    description: "Développement d'un application multiplateforme pour de la gestion de patient.",
    technologies: ["Dart", "Flutter", "Isar", "Riverpod", "Slang", "Figma", "Git"]
  },
  {
    id: 3,
    date: "2022 - 2023",
    company: "Groupe EOS",
    title: "Alternant Développeur Web",
    description: "Développement de sites vitrines et e-commerce. Maintenance et optimisation de sites existants.",
    technologies: ["WordPress", "JQuery", "Divi", "Figma"]
  }
];

useStartAnimation();
</script>

<template>
    <div class="!bg-red relative max-w-[1440px] w-full flex flex-col items-center">
    <!-- TailedCursor en arrière-plan fixe -->
    <div 
      class="fixed inset-0 w-full h-full z-0"
      :class="{ 'opacity-0': isProjectListHovered }"
    >
      <TailedCursor
        :base-thickness="30"
        :colors="['#ffffff']"
        :speed-multiplier="0.5"
        :max-age="500"
        :enable-fade="false"
        :enable-shader-effect="false"
      />
    </div>
    <div class="relative z-10 w-full">
      <TheNavbar />
      <main class="grid grid-cols-12 min-h-screen w-full flex-nowrap pb-12 sm:pb-32">
        <MainContainer>
          <MainTitle />
          <MainAbout id="description" />
        </MainContainer>
        <MainTechnologies />
        <section id="experience" class="col-span-12 py-20 px-6">
          <div class="max-w-5xl mx-auto">
            <BaseTitle class='relative project-title text-center pb-34 opacity-0 z-10 transition text-5xl'>Experience</BaseTitle>
            <div class="max-w-4xl mx-auto">
              <ExperienceTimeline
                class="border-gray-200 dark:border-gray-700 pt-8"
                :list="experience"
              />
            </div>
          </div>
        </section>
        
        <ProjectList class='pt-16' @mouseenter="isProjectListHovered = true"
          @mouseleave="isProjectListHovered = false" />
      </main>
    <footer class="relative flex flex-col justify-center items-center text-center z-30 h-screen">
      <FooterContact />
      <FooterAuthor id="contact">Portfolio de Ruddy Morel © 2024</FooterAuthor>
    </footer>
    </div>
  </div>
</template>
