function init() {
    const duration = 0.8;
    const numTargets = 3;
    const repeatDelay = duration * (numTargets - 1);
    const animation = gsap.timeline();
    gsap.set(".demo", { autoAlpha: 1 });
    gsap.set(".demo div", { transformOrigin: "50% 50% -30" });
    animation.from(".demo div", {
        y: 90,
        rotateX: "-45",
        opacity: 0,
        duration: 0.8,
        stagger: {
            each: duration,
            repeat: -1,
            repeatDelay: repeatDelay,
        },
    });
    animation.to(
        ".demo div",
        {
            y: -90,
            rotateX: "45",
            opacity: 0,
            duration: 0.8,
            stagger: {
                each: duration,
                repeat: -1,
                repeatDelay: repeatDelay,
            },
        },
        duration
    );
}

init();
