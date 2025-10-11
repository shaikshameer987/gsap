const progressHolder = document.querySelector(".progressHolder");
const progressBar = document.querySelector(".progressBar");

const tween = gsap.to(progressBar, {
    scaleX: 1,
    ease: "none",
    paused: true,
});

ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    scrub: true,
    endTrigger: "main",
    end: "bottom bottom",
    once: true,
    onLeave: (self) => {
        progressHolder.classList.remove("fixed");
    },
    onUpdate: function (self) {
        if (self.progress > tween.progress()) {
            tween.progress(self.progress);
        }
    },
});
