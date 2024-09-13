<template>
  <div
    ref="pointer"
    class="fixed pointer-events-none z-50 w-3 h-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ffe6ed] rounded-full flex items-center justify-center opacity-0 invisible mix-blend-exclusion transition-opacity duration-300 ease-in-out"
    :class="{ 'opacity-0': !isPointerInWindow }"
  >
    <svg
      ref="pointerArrow"
      aria-label="arrow for indicating link"
      class="w-[22.5%] h-auto origin-center scale-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 7H17V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { gsap } from 'gsap';

const pointer = ref(null);
const pointerArrow = ref(null);
const isPointerInWindow = ref(true);
const isHovering = ref(false);

watch(isPointerInWindow, (val) => {
  if (val) pointer.value.classList.remove('opacity-0');
  else pointer.value.classList.add('opacity-0');
});

watch(isHovering, (val) => {
  const duration = 0.3;
  const ease = 'back.out';
  const hoveringSize = 7;
  const idleSize = 1;

  if (val) {
    gsap.to(pointer.value, {
      scale: hoveringSize,
      duration,
      ease,
    });
    gsap.fromTo(pointerArrow.value, { scale: 0, rotate: 0 }, { scale: 1, rotate: -45, delay: 0.075, duration, ease });
  } else {
    gsap.to(pointer.value, {
      scale: idleSize,
      duration,
      ease,
    });
    gsap.to(pointerArrow.value, {
      scale: 0,
      duration,
      ease,
    });
  }
});

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('ontouchstart' in document.documentElement || prefersReducedMotion) {
    return;
  }

  gsap.to(pointer.value, {
    delay: 1,
    autoAlpha: 1,
    onComplete: () => {
      document.addEventListener('pointermove', pointermoveHandler);
      document.addEventListener('pointerover', pointeroverHandler);
      document.addEventListener('pointerout', pointeroutHandler);
    },
  });
});

const pointeroutHandler = (ev) => {
  if (!ev.toElement && !ev.relatedTarget) isPointerInWindow.value = false;
};

const pointeroverHandler = () => {
  if (isPointerInWindow.value) return;
  isPointerInWindow.value = true;
};

const pointermoveHandler = ({ clientX, clientY }) => {
  const pointerSize = gsap.getProperty(pointer.value, 'width');

  const x = clientX - window.innerWidth / 2 - pointerSize / 2;
  const y = clientY - window.innerHeight / 2 - pointerSize / 2;

  gsap.to(pointer.value, {
    x,
    y,
    opacity: isPointerInWindow.value ? 1 : 0,
    duration: 0.4,
    ease: 'power2.out(1.5)',
  });
};

defineExpose({
  toggleHovering: (val) => {
    if (typeof val === 'boolean') isHovering.value = val;
    else isHovering.value = !isHovering.value;
  },
});
</script>
