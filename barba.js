//Barba JS start here

// ENTER FIRST
const animationOneEnter = (container) => {
  let tl = gsap.timeline();
  tl.fromTo(
    container,
    {
      xPercent: 100,
      opacity: 0,
    },
    {
      xPercent: 0,
      opacity: 1,
    },
  );
  return tl;
};

// LEAVE FIRST
const animationOneLeave = (container) => {
  let tl = gsap.timeline();
  tl.to(container, {
    xPercent: -100,
    opacity: 0,
  });
  return tl;
};

// ONCE
const animationOnce = (container) => {
  const headingChars = container.querySelectorAll("h1");

  let tl = gsap.timeline();
  tl.from(headingChars, {
    yPercent: 100,
    opacity: 0,
    stagger: { each: 0.1, duration: 0.3, ease: "power2.in" },
  });

  return tl;
};

// ENTER FIRST
const animationTwoEnter = (container) => {
  let tl = gsap.timeline();
  tl.fromTo(
    container,
    {
      xPercent: 100,
      opacity: 0,
    },
    {
      xPercent: 0,
      opacity: 1,
    },
  );
  return tl;
};

// LEAVE FIRST
const animationTwoLeave = (container) => {
  let tl = gsap.timeline();
  tl.to(container, {
    xPercent: -100,
    opacity: 0,
  });
  return tl;
};

// ENTER FIRST
const animationThreeEnter = (container) => {
  let tl = gsap.timeline();
  tl.fromTo(
    container,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "bounce",
      duration: 0.7,
    },
  );
  return tl;
};

// LEAVE FIRST
const animationThreeLeave = (container) => {
  let tl = gsap.timeline();
  tl.to(container, {
    scale: 2,
    opacity: 0,
  });
  return tl;
};

// barba
barba.init({
  preventRunning: true,
  transitions: [
    // beginning of first rule
    {
      name: "Animation One",
      to: {
        namespace: ["services"],
      },
      leave: ({ current }) => animationOneLeave(current.container),

      enter({ next }) {
        animationOneEnter(next.container);
      },
      once({ next }) {
        animationOneEnter(next.container);
      },
    },
    {
      name: "Animation Two",
      to: {
        namespace: ["culture"],
      },
      leave: ({ current }) => animationTwoLeave(current.container),

      enter({ next }) {
        console.log("enter");
        animationTwoEnter(next.container);
      },
      once({ next }) {
        console.log("enter");
        animationTwoEnter(next.container);
      },
    },
    {
      name: "Animation Three",
      to: {
        namespace: ["journal"],
      },
      leave: ({ current }) => animationThreeLeave(current.container),

      enter({ next }) {
        console.log("enter");
        animationThreeEnter(next.container);
      },
      once({ next }) {
        console.log("enter");
        animationThreeEnter(next.container);
      },
    },
    {
      name: "Animation Four",
      to: {
        namespace: ["home"],
      },
      once({ next }) {
        console.log("once");
        animationFourEnter(next.container);
      },
      leave: ({ current }) => animationFourLeave(current.container),

      enter({ next }) {
        console.log("enter");
        animationFourEnter(next.container);
      },
    },
  ],
});
