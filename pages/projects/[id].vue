<script setup lang="ts">
import { getBreakpoints } from '../../composables/useBreakpoints';
const route = useRoute();
const router = useRouter();

const { lgAndSmaller } = getBreakpoints();

interface Project {
  title: string;
  description: string;
  tech: string;
  live: string;
  code: string;
  images: string[];
  id: number;
}

const projects: Record<string, Project> = {
  medical: {
    title: 'Médicale',
    description: `Réalisation d'une application multiplateforme confidentiel pour la gestion des patients. Possibilité de créer un rapport PDF en direct avec les données du patient.`,
    tech: 'Flutter, Isar, Riverpod, Slang',
    live: '',
    code: 'https://github.com/RuddyMo',
    images: ['/img/medical.webp', '/img/medical-mobile.webp'],
    id: 0,
  },
  emmaPierre: {
    title: 'EmmaPierre',
    description: `Réalisation d'un site Web pour un client. Le site est un site e-commerce pour une boutique de bijoux fait main. Fait dans le cadre de mes études`,
    tech: 'HTML, Tailwind, Flowbite',
    live: 'https://emmapierre.netlify.app/view/index.html/',
    code: 'https://github.com/RuddyMo/EmmaPierre',
    images: ['/img/emmaPierre.webp', '/img/emmaPierre-mobile.webp'],
    id: 1,
  },
};
const name = route.params.id as string;

const handleCalcNextProject = () => {
  const currentProjectId = projects[name].id;

  const nextProjectId = (currentProjectId + 1) % Object.keys(projects).length === 0 ? 0 : currentProjectId + 1;

  return Object.keys(projects)[nextProjectId];
};
</script>

<template>
  <div
    class="relative sm:text-lg top-0 left-0 bg-base-100 [&>*]:text-base-content sm:h-screen flex flex-col gap-2 sm:gap-6 sm:p-24 w-full max-w-[1440px] overflow-y-auto"
  >
    <div class="relative under-line">
      <div class="relative flex w-full justify-between py-2 sm:py-4">
        <NuxtLink
          tabindex="0"
          class="under relative inline-block outline-none outline-custom cursor-pointer"
          @click="router.back()"
          @keyup.enter="router.back()"
          >Retour</NuxtLink
        >
        <NuxtLink class="under hidden relative sm:inline-block outline-none outline-custom" :to="{ path: '/' }"
          >Ruddy Morel</NuxtLink
        >
        <NuxtLink
          class="under relative inline-block outline-none outline-custom"
          :to="{ path: `/projects/${handleCalcNextProject()}` }"
          :replace="true"
          >Suivant</NuxtLink
        >
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-between gap-4 sm:gap-12">
      <img
        class="relative max-h-36 lg:w-1/2 sm:max-h-[80vh] object-cover"
        :src="lgAndSmaller ? projects[name].images[1] : projects[name].images[0]"
        alt="Project presentation "
      />
      <div>
        <div class="flex flex-col justify-between items-center">
          <div class="flex flex-col gap-6 sm:gap-8">
            <p class="flex flex-wrap max-w-prose">{{ projects[name].description }}</p>
            <p class="flex flex-wrap max-w-prose italic">{{ projects[name].tech }}</p>
            <div class="flex flex-row gap-4 pb-8">
              <BaseBadgeSlim :href="projects[name].code"> Code</BaseBadgeSlim>
              <BaseBadgeSlim :href="projects[name].live">Live</BaseBadgeSlim>
            </div>
          </div>
          <h2
            class="uppercase absolute text-[44px] sm:text-8xl lg:text-9xl sm:left-1/4 sm:absolute bottom-16 sm:right-64 flex justify-center"
          >
            {{ projects[name].title }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.under-line::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0px;
  left: 0;
  background-color: #e3f7d3;
  transition: all 0.3s;
}

.under::before {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0px;
  left: 0;
  background-color: #e3f7d3;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.under:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}

.badge::before {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #e3f7d3;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.badge:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.3s ease-out;
}
</style>
