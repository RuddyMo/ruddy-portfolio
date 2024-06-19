<template>
  <a
    class="badge w-full sm:w-48 relative hover:text-base-100 border-base-content text-base-content text-xl rounded-3xl cursor-pointer h-12 border flex justify-center items-center font-bold transition overflow-hidden z-10 outline-custom"
  >
    <slot />
  </a>
</template>

<style scoped>
.badge::before {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #dec783;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.badge:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.3s ease-out;
}
</style>
