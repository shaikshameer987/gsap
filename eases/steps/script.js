gsap.set(".wrapper", { scale: 1 });

let animation = gsap
    .timeline()

    .to("img", { duration: 1, x: -2250, ease: "steps(15)", repeat: 100 })
    .timeScale(1);
