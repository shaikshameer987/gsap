gsap.registerPlugin(SplitText);
const animation = gsap.timeline();
function init() {
    const taglineSplit = new SplitText(".tagline_text", { type: "chars, words" });
    animation
        .from(".logo", { width: 0, duration: 0.8, ease: "power1.in" })
        .from(taglineSplit.words, { yPercent: -100, stagger: 0.05, duration: 0.3 });

    ScrollTrigger.create({
        trigger: ".ad_wrapper",
        animation: animation,
        start: "top 0",
        end: "+=700px",
        pin: true,
        scrub: true,
        pinSpacing: true,
    });
}

window.addEventListener("load", init);
