function animatePanel(panel) {
    const tl = gsap.timeline();
    const img = document.querySelector(panel + " img");
    const headings = document.querySelector(panel + " h2");
    const word1 = document.querySelector(panel + " .word1");
    const word2 = document.querySelector(panel + " .word2");

    tl.set(panel, { left: 0 });
    tl.from(img, { x: -150, scale: 0.5, ease: "power1.in" })
        .from(img, { y: 60, ease: "power1" }, "<")
        .from(img, { opacity: 0, duration: 0.2 }, "<")
        .from(word1, { x: -80, opacity: 0 }, "-=0.25")
        .from(word2, { x: 80, opacity: 0 }, "<")
        .from(headings, { opacity: 0, duration: 0.2 }, "<")
        .to(img, { x: 150, scale: 0.5, ease: "power1" }, "+=0.5")
        .to(img, { y: 80, ease: "power1.in" }, "<")
        .to(headings, { y: 20, ease: "power1.in", opacity: 0, duration: 0.2 }, "<")
        .to(img, { opacity: 0, duration: 0.2 }, "-=0.2");

    return tl;
}

const curve = gsap
    .timeline()
    .set(".panel4", { left: 0 })
    .from(".panel4", { opacity: 0, duration: 0.2 })
    .from(".panel4 h2", { y: -150, ease: "power1.in", duration: 0.2 }, "+=0.5")
    .to(
        "#curveTall",
        {
            attr: {
                d: "M49.16 192.62h203.06c-37.09-.62-49.44-48.15-102.22-48.11-55.26.05-82.24 48.11-100.84 48.11z",
            },
            ease: "power1.in",
            duration: 0.1,
        },
        "-=0.1"
    );

const masterAnimation = gsap.timeline();
masterAnimation
    .add(animatePanel(".panel1"))
    .add(animatePanel(".panel2"), "-=0.5")
    .add(animatePanel(".panel3"), "-=0.5")
    .add(curve);
