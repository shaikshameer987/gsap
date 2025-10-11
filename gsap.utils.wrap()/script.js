function init() {
    gsap.set(".wrapper", { autoAlpha: 1 });
    let split = new SplitText("h1", { type: "chars" });
    let chars = split.chars;
    let animation = gsap.timeline();

    animation
        .from(chars, {
            y: gsap.utils.wrap([-100, 100]),
            color: gsap.utils.wrap(["green", "red", "yellow"]),
            opacity: 0,
            stagger: 0.05,
        })
        .to(chars, { y: gsap.utils.wrap([-50, -50, -50, 50, 50, 50]) });
}

window.addEventListener("load", init);
