<script setup lang="ts">
import { useStartAnimation } from '../composables/useStartAnimation';
import CursorPointer from '~/components/pointer/CursorPointer.vue';

useStartAnimation();
</script>

<template>
  <div class="!bg-red relative max-w-[1440px] w-full flex flex-col items-center">
    <CursorPointer />
    <TheNavbar />
    <main class="grid grid-cols-12 min-h-screen w-full flex-nowrap pb-12 sm:pb-32">
      <MainContainer>
        <MainTitle />
        <MainAbout id="description" />
      </MainContainer>

      <MainTechnologies />
      <ProjectList />
    </main>
    <footer id="contact" class="relative flex flex-col justify-center items-center text-center z-30 h-screen">
      <FooterContact />
      <FooterAuthor>Portfolio de Ruddy Morel © 2024</FooterAuthor>
    </footer>
  </div>
</template>
