if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

barba.init({
  transitions: [
    {
      name: "fade-transition",
      leave(data) {
        // Add your animation timeline using GSAP here
        gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
        return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
      },
      enter(data) {
        // Add your animation timeline using GSAP here
        gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
      },
    },
  ],
});
