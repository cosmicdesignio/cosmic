barba.init({
  transitions: [
    {
      name: "fade-transition",
      leave(data) {
        // Add your animation timeline using GSAP here
        gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        return gsap
          .to(data.current.container, { opacity: 0, duration: 0.5 })
          .then(() => data.current.container.remove());
      },
      enter(data) {
        // Add your animation timeline using GSAP here
        gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
      },
    },
  ],
});
