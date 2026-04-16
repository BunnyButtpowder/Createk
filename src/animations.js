import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initPageAnimations({ fast = false } = {}) {
  // Kill previous ScrollTriggers for clean page transitions
  ScrollTrigger.getAll().forEach(st => st.kill());

  const dur = fast ? 0.3 : 0.8;
  const staggerDur = fast ? 0.2 : 0.6;
  const staggerGap = fast ? 0.04 : 0.1;
  const yOffset = fast ? 15 : 40;
  const xOffset = fast ? 25 : 60;

  // Reveal animations (bottom-up)
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: yOffset },
      {
        opacity: 1, y: 0,
        duration: dur,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0,
      }
    );
  });

  // Reveal from left
  document.querySelectorAll('.reveal-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -xOffset },
      {
        opacity: 1, x: 0,
        duration: dur,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Reveal from right
  document.querySelectorAll('.reveal-right').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: xOffset },
      {
        opacity: 1, x: 0,
        duration: dur,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Scale reveal
  document.querySelectorAll('.reveal-scale').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, scale: fast ? 0.95 : 0.9 },
      {
        opacity: 1, scale: 1,
        duration: dur,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Stagger children
  document.querySelectorAll('[data-stagger]').forEach(container => {
    const children = container.children;
    gsap.fromTo(children,
      { opacity: 0, y: fast ? 10 : 30 },
      {
        opacity: 1, y: 0,
        duration: staggerDur,
        stagger: staggerGap,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Parallax images
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.3;
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Counter animation
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';

    gsap.fromTo(el,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          el.textContent = prefix + Math.round(gsap.getProperty(el, 'innerText')) + suffix;
        },
      }
    );
  });

  // Refresh ScrollTrigger after content loaded
  ScrollTrigger.refresh();
}

export function initHeroAnimation() {
  const tl = gsap.timeline();

  tl.fromTo('.hero-title',
    { opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power4.out' }
  )
  // .fromTo('.hero-subtitle',
  //   { opacity: 0, y: 30 },
  //   { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
  //   '-=0.4'
  // )
  .fromTo('.hero-badge',
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
    '-=0.2'
  )
  .fromTo('.hero-cta',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.3'
  );

  return tl;
}

export function animateImageHover() {
  document.querySelectorAll('.img-hover-zoom').forEach(el => {
    const img = el.querySelector('img');
    if (!img) return;

    el.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.05, duration: 0.4, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, duration: 0.4, ease: 'power2.out' });
    });
  });
}
