<script setup lang="ts">
import { gsap } from 'gsap';

const title = ref<HTMLElement | null>(null);

onMounted(async () => {
  split();
  await handleAnimation();
  document.getElementById('title-11')?.classList.add('shadow-letter');
});

function handleAnimation() {
  return new Promise<void>((resolve) => {
    const tl = gsap.timeline({
      onComplete: resolve,
    });

    tl.to('.fade', {
      opacity: 1,
      scale: 1,
      translateX: 0,
      duration: 0.2,
      stagger: 0.04,
    })
      .to(
        '#mainTitle',
        {
          opacity: 1,
          translateX: 0,
          duration: 0.8,
        },
        '-=2'
      )
      .to(
        '#mainTitle',
        {
          translateY: 0,
          duration: 0.6,
        },
        '-=.4'
      );
  });
}

function split() {
  const text = 'Ruddy';

  text.split('').forEach((w, idx) => {
    if (w.length > 0 && idx !== 8) {
      const html = `<span class="fade scale-110 align-bottom inline-block shadow-alt transition duration-500 opacity-0" id="title-${idx}">${w}</span>`;
      title.value?.insertAdjacentHTML('beforeend', html);
    }
    if (idx === 8) {
      const br = document.createElement('br');
      title.value?.appendChild(br);

      const html = `<span class="fade scale-105 pl-8 md:pl-24 align-bottom inline-block shadow-alt transition duration-500 opacity-0" id="title-${idx}">${w}</span>`;
      title.value?.insertAdjacentHTML('beforeend', html);
    }
  });

  const br = document.createElement('br');
  title.value?.appendChild(br);
}
</script>

<template>
  <h1
    id="mainTitle"
    ref="title"
    class="text-small text-[70px] leading-[4rem] sm:text-[120px] md:text-[155px] lg:text-[185px] sm:leading-[8.5rem] h-48 sm:h-96 text-base-content font-title font-semibold italic bg-clip-text text-clip [&>span:hover]:transition [&>span:hover]:scale-105 [&>span:hover]:!rotate-12 cursor-default select-none -translate-x-60 tracking-tighter lg:col-span-12 lg:col-start-3 flex-nowrap"
  >
    <slot />
  </h1>
  <h2 class="text-[100px] text-white absolute left-1 hidden">Ruddy</h2>
</template>

<style>
@media only screen and (max-width: 340px) {
  .text-small {
    font-size: 54px !important;
  }
}

.shadow-letter {
  text-shadow: 0 0 10px #e3f7d393, 0 0 20px #b0ee9693, 0 0 30px #50794293;
  transition: 0.3s;
}

.shadow-alt:hover {
  text-shadow: 0 0 10px #e3f7d393, 0 0 20px #b0ee9693, 0 0 30px #50794293;
}
</style>
