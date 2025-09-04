<template>
  <nav class="flex w-full z-40 justify-between">
    <BaseTitle class="mt-8">RM</BaseTitle>
    <div tabindex="-1" class="flex gap-4 sm:block z-40 mt-9">
      <TheNavbarLink id="navOne" class="opacity-0 sm:mx-6 pointer-events-auto" :to="{ hash: '#description' }">
        Qui suis-je ?</TheNavbarLink
      >
      <TheNavbarLink id="navTwo" class="opacity-0 sm:mx-6" :to="{ hash: '#experience' }">expérience</TheNavbarLink>
      <TheNavbarLink id="navThree" class="opacity-0 sm:mx-6" to="/projects/photographie">projects</TheNavbarLink>
      <TheNavbarLink id="navFour" tabindex="0" class="opacity-0 sm:mx-6" :to="{ hash: '#contact' }"
        >contact
      </TheNavbarLink>
    </div>
  </nav>
</template>
<script setup lang="ts"></script>
