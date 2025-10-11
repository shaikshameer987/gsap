function init() {
    gsap.registerEffect({
        name: "rainbow",
        extendTimeline: true,
        defaults: { y: -100, colors: ["aqua", "yellow", "blue"] },
        effect: (targets, config) => {
            const splitText = new SplitText(targets, { type: "chars" });
            const tl = gsap.timeline();
            tl.from(splitText.chars, { opacity: 0, y: config.y, stagger: 0.05 });
            tl.to(splitText.chars, { color: gsap.utils.wrap(config.colors), stagger: 0.05 }, 0);
            return tl;
        },
    });
    // gsap.effects.rainbow("h1");
    // gsap.effects.rainbow("h2");
    const animation = gsap.timeline();
    animation.rainbow("h1").rainbow("h2", { y: 50, colors: ["red", "yellow", "pink", "green"] }, 0);
}

window.addEventListener("load", init);
