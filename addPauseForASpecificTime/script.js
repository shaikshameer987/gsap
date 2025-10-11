let tl = gsap
    .timeline()
    .to(".red", { duration: 2, x: 300 })
    .addPause(">", gsap.delayedCall, [1, () => tl.play()])
    .to(".blue", { duration: 2, x: 300 });
