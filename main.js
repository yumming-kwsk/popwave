'use strict';
  gsap.registerPlugin(ScrollTrigger);

gsap.from('.content > div', {
  duration: 1,
  y: -600,
  stagger: 0.1,
  ease: "back.out(1.7)",
  onComplete: floatAnim
});

function floatAnim() {
  gsap.to('.content > div', {
    y: '+=10',
    duration: 1,
    rotation: "+=8",
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: {
      each: 0.2,
      from: "random"
    }
  });
}

const items = document.querySelectorAll('.content > div');

items.forEach(el => {
  el.addEventListener('click', () => {

    gsap.fromTo(el,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      }
    );
  });
});