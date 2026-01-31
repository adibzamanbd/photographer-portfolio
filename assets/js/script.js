const cursor = document.querySelector("#cursor");
const mainCursorCont = document.querySelector(".main-cursor-cont");

// Custom cursor animation
mainCursorCont.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out",
  });
});

const navLinks = document.querySelectorAll("a , .item");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 4,
      duration: 0.25,
      ease: "power3.out",
      delay: 0.01,
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.25,
      ease: "power3.out",
    });
  });
});

// Initialize Shery.js effects
Shery.makeMagnet(".button", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Image hover effects with Shery.js
Shery.imageMasker(".hero-img img", {
  mouseFollower: true,
  text: "Damien",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker(".about-main .image img", {
  mouseFollower: true,
  text: "Photographer",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker(".ser-img-cont img", {
  mouseFollower: true,
  text: "Events",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Smooth scrolling setup
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from(".hero-text .left-text", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".hero-text .right-text", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// Hero image parallax effect
gsap.to(".hero-img img", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: 100,
  scale: 1.1,
  duration: 2,
  ease: "none",
});

// Scroll animation for horizontal scroll items
gsap.to(".scroll-cont .item", {
  x: "-100%",
  scrollTrigger: {
    trigger: ".hero",
    start: "top center",
    end: "bottom center",
    scrub: 2,
  },
  duration: 3,
  ease: "none",
});

// About section animations
gsap.from(".about-text .text", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from(".about-text .button", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

// About main content staggered entrance
gsap.from(".about-main .image img", {
  scrollTrigger: {
    trigger: ".about-main",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1.7)",
});

gsap.from(".introduction", {
  scrollTrigger: {
    trigger: ".sub-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.2,
  ease: "power2.out",
});

gsap.from(".information", {
  scrollTrigger: {
    trigger: ".sub-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  delay: 0.4,
  ease: "power2.out",
});

// Services section animations
gsap.from(".ser-title", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from(".ser-extra", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

// Services content split animation
gsap.from(".ser-text-cont", {
  scrollTrigger: {
    trigger: ".ser-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".ser-img-cont img", {
  scrollTrigger: {
    trigger: ".ser-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// Service boxes staggered animation
gsap.from(".ser-box", {
  scrollTrigger: {
    trigger: ".ser-sub-cont",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});

// Work section animations
gsap.from(".work-title", {
  scrollTrigger: {
    trigger: ".work",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from(".work-info", {
  scrollTrigger: {
    trigger: ".work",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

// Work boxes staggered animation
gsap.from(".work-box", {
  scrollTrigger: {
    trigger: ".work-main-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  stagger: 0.3,
  duration: 1.5,
  ease: "power3.out",
});

// FAQ section animations
gsap.from(".faq-title", {
  scrollTrigger: {
    trigger: ".faq",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  y: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

// FAQ columns animation
gsap.from(".left-faq-col", {
  scrollTrigger: {
    trigger: ".faq-box-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".right-faq-col", {
  scrollTrigger: {
    trigger: ".faq-box-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// FAQ details hover animation
document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      gsap.from(detail.querySelector("p"), {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });
});

// Testimonial section animations
gsap.from(".testimonial-titles", {
  scrollTrigger: {
    trigger: ".testimonial",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  y: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from(".testimonial-review", {
  scrollTrigger: {
    trigger: ".testimonial",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

// Testimonial boxes staggered animation
gsap.from(".testimonial-box", {
  scrollTrigger: {
    trigger: ".testimonial-cont",
    start: "top 70%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "back.out(1.7)",
});

// Footer animations
gsap.from(".footer-top-title h1", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    end: "bottom top",
    scrub: 2,
    toggleActions: "play none none reverse",
  },
  y: 100,
  opacity: 0,
  duration: 2,
  ease: "power3.out",
});

gsap.from(".footer-text", {
  scrollTrigger: {
    trigger: ".footer-center",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: -50,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from(".footer-links", {
  scrollTrigger: {
    trigger: ".footer-center",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 1,
    toggleActions: "play none none reverse",
  },
  x: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Footer links hover animation
document.querySelectorAll(".active-footer-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Animate footer scrolling items
gsap.to(".footer .wrapper .item", {
  x: "-200%",
  scrollTrigger: {
    trigger: ".footer",
    start: "top center",
    end: "bottom center",
    scrub: 3,
  },
  duration: 4,
  ease: "none",
});

// Page load animation sequence
window.addEventListener("load", () => {
  // Initial loading animation
  gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".hero-text", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".hero-img img", {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".scroll-cont .item", {
    x: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    delay: 0.7,
    ease: "power2.out",
  });
});


// Add subtle floating animation to buttons
gsap.to(".button", {
  y: -5,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// Add hover effect to work images
document.querySelectorAll(".work-image img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, {
      scale: 1.05,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

// Text reveal animation for headings
const headings = document.querySelectorAll("h1");
headings.forEach((heading) => {
  heading.style.opacity = "0";
  heading.style.transform = "translateY(20px)";

  ScrollTrigger.create({
    trigger: heading,
    start: "top 85%",
    onEnter: () => {
      gsap.to(heading, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
  });
});

// Add a subtle background animation
gsap.to("body", {
  backgroundPosition: "0% 0%",
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.5,
  },
});
