import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useStartAnimation() {
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const mm = gsap.matchMedia();

    mm.add('(min-width: 641px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#mainTitle',
            start: 'bottom 500px',
            scrub: 1,
          },
        })
        .to('#mainTitle', {
          xPercent: 5,
          opacity: 0,
        });
    });

    mm.add('(min-width: 641px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#mainTitle',
            start: 'top 100px',
            scrub: 1,
          },
        })
        .to('#mainTitle', {
          xPercent: 10,
          opacity: 0,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#subOne',
            start: 'top 100px',
            scrub: 1,
            endTrigger: '#subTwo',
          },
        })
        .to('#subOne', {
          opacity: 0,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#subTwo',
            start: 'top 100px',
            scrub: 1,
          },
        })
        .to('#subTwo', {
          opacity: 0,
        });
    });

    mm.add('(min-width: 641px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.footer-title',
            start: 'bottom bottom',
            scrub: 1,
          },
        })
        .to('.circle', { width: '220vw', height: '220vh' });
    });

    mm.add('(min-width: 1920px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.footer-title',
            start: 'bottom bottom',
            scrub: 1,
          },
        })
        .to('.circle', { width: '5000px', height: '5000px' });
    });

    mm.add('(max-width: 640px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.footer-title',
            start: 'bottom bottom',
            scrub: 1,
          },
        })
        .to('.circle', { width: '1200px', height: '1750px' });
    });

    mm.add('(max-width: 2640px)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#mainTitle',
            start: 'top 100px',
            scrub: 1,
          },
        })
        .to('#mainTitle', {
          xPercent: 10,
          opacity: 0,
        });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#subTwo',
            start: 'top 100px',
            scrub: 1,
          },
        })
        .to('#subTwo', {
          opacity: 0,
        });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#subTwo',
          start: 'bottom bottom',
        },
      })
      .to('.project-title', {
        opacity: 1,
        duration: 0.3,
        stagger: 0.3,
      })
      .to('.project', {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      });

    tl.to('#headSubOne', { opacity: 1, duration: 0.4, delay: 0.8 })
      .to(['#headSubTwo', '#navOne', '#navTwo', '#navThree', '#navFour'], { opacity: 1, duration: 0.5 }, '-=0.3')
      .to('#headSubThree', { opacity: 1, duration: 0.4 }, '-=0.3')
      .to('#headDivider', { x: 0, duration: 0.5, ease: Power2.easeOut }, '-=0.8')
      .to('#subOne', { opacity: 1, duration: 0.5 }, '-=.8');
  });
}
