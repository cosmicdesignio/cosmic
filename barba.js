const animationEnter = () => {
  let tl = gsap.timeline();
  tl.fromTo(
    ["#hero-heading-1", "#hero-heading-2", "#hero-heading-3"],
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    },
  );
  return tl;
};

const animationLeave = () => {
  let tl = gsap.timeline();
  tl.to(["#hero-heading-1", "#hero-heading-2", "#hero-heading-3"], {
    opacity: 0,
    duration: 1,
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
        animationEnter(next.container);
      },
      once({ next }) {
        animationEnter(next.container);
      },
    },
    {
      name: "animation services",
      to: {
        namespace: ["services"],
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
      once({ next }) {
        animationEnter(next.container);
      },
    },
    {
      name: "animation culture",
      to: {
        namespace: ["culture"],
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
      once({ next }) {
        animationEnter(next.container);
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
