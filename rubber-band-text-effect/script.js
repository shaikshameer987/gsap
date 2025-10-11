let splitText = new SplitText("h1", { type: "chars" });

gsap.to(splitText.chars, {
    scale: gsap.utils.distribute({
        base: 0.8,
        amount: 1.5,
        from: "center",
        ease: "power",
    }),
    x: gsap.utils.distribute({
        base: -200,
        amount: 400,
        ease: "none",
    }),
    repeat: -1,
    yoyo: true,
});
