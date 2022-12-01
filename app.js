const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 179;

const currentFrame = (index) => `./best-ball/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
 
  images.push(img);

  
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
 
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
    
    
  },
  onUpdate: render,
});

// gsap.fromTo(
//   ".ball-text",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     scrollTrigger: {
//       scrub: 1,
//       start: "50%",
//       end: "60%",
//     },
//     onComplete: () => {
//       gsap.to(".ball-text", { opacity: 0 });
//     },
//   }
// );

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}


const scrollLogo= document.querySelector('.logo-page #logo')

window.addEventListener('scroll',()=>{
  const currentScroll = window.pageYOffset

  if(currentScroll > 0){
scrollLogo.classList.add('remove')
  }
  if(currentScroll <= 0){
scrollLogo.classList.remove('remove')
  }
})

const scrolltext = document.querySelector('.logo-page .typing-text')

window.addEventListener('scroll',()=>{
  const currentScroll = window.pageYOffset

  if(currentScroll == 0){
    scrolltext.classList.add('remove')
      }
  if(currentScroll > 100){
scrolltext.classList.remove('remove')
  }
  
})

gsap.fromTo(
  ".internship",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "5%",
      end: "20%",
    },
    onComplete: () => {
      gsap.to(".internship", { opacity: 0 });
    },
  }
);
gsap.fromTo(
  ".degree",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "27%",
      end: "35%",
    },
    onComplete: () => {
      gsap.to(".degree", { opacity: 0});
    },
  }


);
gsap.fromTo(
  ".skills",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "50%",
      end: "70%",
    },
    onComplete: () => {
      gsap.to(".skills", { opacity: 0});
    },
  }
);
gsap.fromTo(
  ".tech-icons",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      start: "60%",
      end: "75%",
    },
    onComplete: () => {
      gsap.to(".tech-icons", { opacity: 0});
    },
  }
);