gsap.defaults({ ease: "none", duration: 1 });

let tl = gsap
    .timeline({
        scrollTrigger: {
            trigger: ".demoWrapper",
            start: "top 25%",
            end: "+=100",
            toggleActions: "restart none none reverse",
            markers: true,
        },
    })

    .from(".background", { y: 50 })
    .from(".middleground", { y: 150 }, 0)
    .from(".foreground", { y: 250 }, 0)
    .from(".text", { y: 500 }, 0);
