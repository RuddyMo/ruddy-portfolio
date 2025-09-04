<script setup lang="ts">
import { gsap, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBreakpoints } from '../../../composables/useBreakpoints';

const srcImage = ref();
const showImage = ref(false);
const target = ref();
const image = ref();
const { lgAndSmaller } = getBreakpoints();

const { elementY: yMouse, elementX, elementWidth } = useMouseInElement(target);
const { elementWidth: imgWidth, elementHeight: imgHeight, elementX: xMouseImg } = useMouseInElement(image);

const distanceFromCenter = computed(() => Math.round(elementX.value - elementWidth.value / 2) / 100);
const power = computed(() => xMouseImg.value - imgWidth.value / 2);

gsap.registerPlugin(ScrollTrigger);

function handleShowMobile(e: ScrollTrigger) {
  const projectName = e?.trigger?.id;
  e.trigger?.setAttribute('mouse', '1');

  handleSwitchImage([`/img/${projectName}.webp`, `/img/${projectName}-mobile.webp`]);
  showImage.value = true;

  gsap.timeline().to('.image', {
    duration: 0.3,
    height: '280px',
    position: 'fixed',
    top: '25%',
    right: '-40px',
    filter: `sepia(40%)`,
    opacity: '40%',
    rotate: 8,
    maxHeight: '280px',
  });
}

function handleHideMobile(e: ScrollTrigger) {
  e.trigger?.removeAttribute('mouse');

  if (e.trigger?.id !== 'countries') return;
  handleHideImage();
}

function handleHideLeaveBackMobile(e: ScrollTrigger) {
  e.trigger?.removeAttribute('mouse');

  if (e.trigger?.id !== 'medical') return;
  handleHideImage();
}

function handleShowImage() {
  if (lgAndSmaller.value) return;

  showImage.value = true;

  gsap.timeline().to('.image', {
    duration: 0.5,
    x: elementX.value - imgWidth.value / 2,
    y: yMouse.value - imgHeight.value / 2,
    maxHeight: '600px',
    height: '600px',
    opacity: '50%',
  });
}

function handleSwitchImage(src: string[]) {
  lgAndSmaller.value ? (srcImage.value = src[1]) : (srcImage.value = src[0]);
}

function handleMoveImage() {
  if (lgAndSmaller.value) return;

  gsap.to('.image', {
    duration: 1,
    translateX: elementX.value - imgWidth.value / 2,
    translateY: yMouse.value - imgHeight.value / 3,
    rotate: distanceFromCenter.value * 3,
    filter: `brightness(${Math.abs(power.value / 10) + 80}%) sepia(40%)`,
    ease: Power1.easeOut,
  });
}

function handleHideImage() {
  showImage.value = false;
  hideImage();
}

function hideImage() {
  gsap.timeline().to('.image', {
    duration: 0.5,
    maxHeight: 0,
    rotate: 0,
    height: 0,
  });
}

onMounted(() => {
  if (process.client && lgAndSmaller.value) {
    nextTick(() => {
      const projectsGSAP = gsap.utils.toArray('.project');

      projectsGSAP.forEach((project) => {
        gsap.to('.project', {
          scrollTrigger: {
            trigger: project as HTMLElement,
            start: 'center center',
            end: '+=130',
            toggleClass: 'textIsActive',
            onEnter: handleShowMobile,
            onLeave: handleHideMobile,
            onEnterBack: handleShowMobile,
            onLeaveBack: handleHideLeaveBackMobile,
            scrub: true,
          },
        });
      });
    });
  }
});
</script>

<template>
  <section class="relative col-span-12 flex flex-col w-full">
    <BaseTitle
      :class="{ '!opacity-0': showImage }"
      class="relative project-title text-center pb-28 opacity-0 z-10 transition"
      ><span class="anchor absolute -top-32"></span>Selected projects</BaseTitle
    >
    <div
      id="projects"
      ref="target"
      @mouseleave="handleHideImage"
      @mouseenter="handleShowImage"
      @mousemove="handleMoveImage"
      @click="handleHideImage"
    >
      <ProjectLink
        id="photographie"
        :to="{ path: 'projects/photographie' }"
        :is-show-image="showImage"
        @mouseenter="handleSwitchImage(['/img/sitephoto.webp', '/img/sitephoto-mobile.webp'])"
      >
        Photographie
        <template #desc> Site vitrine pour photographe </template>
      </ProjectLink>
      <ProjectLink
        id="medical"
        :to="{ path: 'projects/medical' }"
        :is-show-image="showImage"
        @mouseenter="handleSwitchImage(['/img/medical.webp', '/img/medical-mobile.webp'])"
      >
        Médicale
        <template #desc> Gestionnaire de patient avancé </template>
      </ProjectLink>
      <ProjectLink
        id="emmaPierre"
        :is-show-image="showImage"
        :to="'projects/emmaPierre'"
        @mouseenter="handleSwitchImage(['/img/emmaPierre.webp', '/img/emmaPierre-mobile.webp'])"
      >
        Emma Pierre
        <template #desc>Site e-commerce</template>
      </ProjectLink>
    </div>
    <img
      ref="image"
      :src="srcImage"
      alt="Project presentation"
      class="image right-0 top-1/2 lg:right-auto lg:top-auto absolute w-64 sm:w-[448px] object-cover rounded-xl opacity-0 pointer-events-none select-none z-10"
    />
  </section>
</template>
