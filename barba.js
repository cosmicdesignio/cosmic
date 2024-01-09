const animationEnter = (container) => {
  let tl = gsap.timeline();
  tl.fromTo(
    container,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 5,
    },
  );
  return tl;
};

const animationLeave = (container) => {
  let tl = gsap.timeline();
  tl.to(container, {
    opacity: 0,
    duration: 5,
  });
  return tl;
};

barba.init({
  preventRunning: true,
  transition: [
    {
      name: "animation work",
      to: {
        namespace: ["home"],
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container).then(() => {
          this.async();
        });
      },
      once({ next }) {
        animationEnter(next.container).then(() => {
          this.async();
        });
      },
    },
    {
      name: "animation services",
      to: {
        namespace: ["services"],
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container).then(() => {
          this.async();
        });
      },
      once({ next }) {
        animationEnter(next.container).then(() => {
          this.async();
        });
      },
    },
    {
      name: "animation culture",
      to: {
        namespace: ["culture"],
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container).then(() => {
          this.async();
        });
      },
      once({ next }) {
        animationEnter(next.container).then(() => {
          this.async();
        });
      },
    },
    {
      name: "animation journal",
      to: {
        namespace: ["journal"],
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
      once({ next }) {
        animationEnter(next.container);
      },
    },
  ],
});
