<template>
  <a
    class="badge relative p-4 md:p-8 lg:p-12 w-full text-xl md:text-3xl lg:text-5xl cursor-pointer uppercase border-base-100 h-12 border rounded-[48px] text-base-100 flex justify-center items-center font-bold text-x transition overflow-hidden z-10 outline-custom hover:text-base-content"
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
  background-color: #A77864;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.badge:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  transition: transform 0.3s ease-out;
}
</style>
