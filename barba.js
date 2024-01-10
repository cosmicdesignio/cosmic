barba.init({
  transitions: [
    {
      name: "fade-transition",
      leave(data) {
        const tl = gsap.timeline();
        tl.to(".navbar-header_link", {
          opacity: 0,
          duration: 1,
          ease: "power4.in",
        });
        tl.to(".link", {
          opacity: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power4.in",
        });
        tl.to(data.current.container, {
          opacity: 0,
          delay: 2,
          duration: 0.5,
        });
      },
      enter(data) {
        const tl = gsap.timeline();

        tl.to(".navbar-header_link", {
          opacity: 1,
          duration: 1,
          ease: "power4.in",
        });
        tl.to(".link", {
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power4.in",
        });
        tl.from(data.next.container, { opacity: 0, duration: 0.5 });
      },
    },
  ],
});
