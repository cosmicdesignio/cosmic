barba.init({
  transitions: [
    {
      name: "fade-transition",
      leave(data) {
        gsap.to(".navbar-header_link", {
          opacity: 0,
          duration: 1,
          ease: "power4.in",
        });
        gsap.to(".link", {
          opacity: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power4.in",
        });
        gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
      },
      enter(data) {
        // Add your animation timeline using GSAP here
        gsap.from(".navbar-header_link", {
          opacity: 0,
          duration: 1,
          ease: "power4.in",
        });
        gsap.from(".link", {
          opacity: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power4.in",
        });
        gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
      },
    },
  ],
});
