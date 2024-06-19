<script setup lang="ts">
type Props = {
  isShowImage: boolean;
};

defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="under project relative mt-12 lg:mt-0 sm:p-0 h-24 lg:h-48 [&>*]:text-base-content [&>*]:duration-700 flex flex-col md:flex-row justify-center md:justify-between s, lg:items-center transition cursor-pointer w-full lg:px-32 opacity-0 z-20 object-top outline-custom"
    :class="{
      'lg:[&>*]:text-hide-content lg:[&>*]:opacity-10 lg:[&>*]:hover:text-base-content lg:[&>*]:hover:opacity-100 ':
        isShowImage,
    }"
  >
    <ProjectTitle>
      <slot />
    </ProjectTitle>
    <ProjectDescription>
      <slot name="desc" />
    </ProjectDescription>
  </NuxtLink>
</template>

<style scoped>
.textIsActive > * {
  color: #e3f7d3 !important;
  opacity: 100 !important;
  transition: all 0.3s;
}
.under::before {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #e3f7d3;
  transform-origin: bottom right;
  transition: transform 0.45s ease-out;
}
@media only screen and (min-width: 641px) {
  .under:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
    transition: transform 0.45s ease-out;
  }
}
.under[mouse]::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.25s ease-out;
}
</style>
