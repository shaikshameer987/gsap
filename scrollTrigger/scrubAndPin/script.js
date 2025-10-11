gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".third",
        pin: true,
        scrub: 2,
        start: "top 0",
        end: "bottom 0",
        // pinSpacing: false,
    },
});

timeline.to("h1", {
    xPercent: -100,
});
