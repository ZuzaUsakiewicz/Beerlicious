import gsap from "gsap";

export const aboutIntro = (element) => {
  gsap.from(element, {
    duration: 2,
    delay: 2,
    autoAlpha: 0,
    ease: "power3.out",
  });
};
