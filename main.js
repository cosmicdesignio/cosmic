

//hero section animation
gsap.from("#hero-para", {
  opacity: 0,
  y: 4,
  delay: 0.25,
  stagger: 0.25,
  duration: 1,
  ease: "power2.inOut",
});

gsap.from(".background_video-wrapper", {
  opacity: 0,
  scale: 0.8,
  delay: 1,
  duration: 1,
  ease: "power4.out",
});

/*gsap.from(".heading-text", {
  opacity: 0,
  ease: "power4.inOut",
  duration: 2,
  delay: 0,
  stagger: 0.25,
});*/

gsap.from(".heading-text", {
  opacity: 0,
  ease: "power4.inOut",
  filter: "blur(24px)",
  duration: 2,
  delay: 0,
  stagger: 0.25,
});

gsap.from(".background-video", {
  borderRadius: "10vw",
  duration: 5,
  delay: 0,
  ease: "power4.out",
});

//end of hero section animation

//second section animation text

const firstText = document.querySelector(".heading_first-text");
const secondText = document.querySelector(".heading_second-text");
const textsFirst = [
  "Lovable Products ",
  "Branded Experiences ",
  "Digital Innovation ",
];
const textsSecond = [
  "from vision to launch",
  "that grow your business",
  "to seize opportunities",
];

let currentIndexFirst = 0;
let currentIndexSecond = 0;

function changeText() {
  const newTextFirst = textsFirst[currentIndexFirst];
  const charsFirst = newTextFirst
    .split("")
    .map((char) => `<span style="opacity: 0">${char}</span>`)
    .join("");
  firstText.innerHTML = charsFirst;

  const newTextSecond = textsSecond[currentIndexSecond];
  const charsSecond = newTextSecond
    .split("")
    .map((char) => `<span style="opacity: 0">${char}</span>`)
    .join("");
  secondText.innerHTML = charsSecond;

  const charsToAnimateFirst = firstText.querySelectorAll("span");
  const charsToAnimateSecond = secondText.querySelectorAll("span");

  const tl = gsap.timeline();

  tl.to(charsToAnimateFirst, {
    duration: 1.5,
    opacity: 1,
    ease: "power2.inOut",
    stagger: 0.05,
  });

  tl.to(
    charsToAnimateSecond,
    {
      duration: 1.5,
      opacity: 1,
      ease: "power2.inOut",
      stagger: 0.05,
    },
    "-=1.5",
  ); // Start the second text animation slightly before the first one ends

  tl.to([charsToAnimateFirst, charsToAnimateSecond], {
    duration: 2,
    opacity: 0,
    filter: "blur(24px)",
    ease: "power2.inOut",
    stagger: 0.025,
  }); // Fade out both texts after a short overlap

  tl.call(() => {
    currentIndexFirst = (currentIndexFirst + 1) % textsFirst.length;
    currentIndexSecond = (currentIndexSecond + 1) % textsSecond.length;
    changeText();
  });
}

// Initial animation trigger
changeText();

//End of second section animation text
