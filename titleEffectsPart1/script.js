gsap.set("body", { autoAlpha: 1 });

gsap.registerEffect({
    name: "slideIn",
    extendTimeline: true,
    defaults: {
        y: 0,
        x: 0,
        duration: 1,
        ease: "power1",
    },
    effect: (targets, config) => {
        let tl = gsap.timeline();
        tl.from(targets, {
            duration: config.duration,
            ease: config.ease,
            x: config.x,
            opacity: 0,
            y: config.y,
            stagger: {
                each: 0.02,
                ease: "power1",
            },
        });
        return tl;
    },
});

gsap.registerEffect({
    name: "slideOut",
    extendTimeline: true,
    defaults: {
        y: 0,
        x: 0,
        duration: 1,
        ease: "power1",
    },
    effect: (targets, config) => {
        let tl = gsap.timeline();
        tl.to(targets, {
            duration: config.duration,
            ease: config.ease,
            opacity: 0,
            x: config.x,
            y: config.y,
            stagger: {
                each: 0.02,
                ease: "power1",
            },
        });
        return tl;
    },
});

const animation = gsap.timeline({ delay: "0.25" });

const splitText = new SplitText("li", { type: "chars" });

const list = document.querySelectorAll("li");
const animateList = (list) => {
    list.forEach((element) => {
        const splitText = new SplitText(element, { type: "chars" });
        animation
            .slideIn(splitText.chars, { x: 150, duration: 0.75, ease: "power1.out" }, "-=0.25")
            .slideOut(splitText.chars, { x: -150, duration: 0.75, ease: "power1.out" });
    });
};
animateList(list);
