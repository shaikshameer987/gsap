gsap.set("svg", { opacity: 1 });
const tl = gsap
    .timeline()
    .from("ellipse", {
        scale: 0,
        duration: 1,
        stagger: 0.2,
        transformOrigin: "50% 50%",
        ease: "power2.inOut",
    })
    .from(
        "#text > path",
        {
            scale: 0,
            stagger: 0.05,
            transformOrigin: "50% 50%",
            ease: "back",
        },
        "-=0.4"
    );
