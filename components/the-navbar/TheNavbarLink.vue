<script setup lang="ts">
type Props = {
  href?: string;
  to?: string | { hash: string };
};

defineProps<Props>();
</script>
<template>
  <a
    v-if="href"
    :href="href"
    class="under relative text-sm sm:text-base text-base-content hover:text-primary transition outline-none outline-custom overflow-hidden z-40"
    ><slot
  /></a>
  <NuxtLink
    v-else
    :to="to"
    class="under inline-block relative text-sm sm:text-base text-base-content outline-none outline-custom overflow-hidden z-40"
    ><slot
  /></NuxtLink>
</template>

<style scoped>
.under::before {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0px;
  left: 0;
  background-color: #F5F3E8;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.under:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}
</style>
