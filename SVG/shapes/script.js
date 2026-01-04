// const t1 = gsap.timeline().to("ellipse", {
//     attr: { rx: 200 },
//     duration: 2,
// });

// const t1 = gsap.timeline().to("polygon", {
//     attr: { points: "118.506 128.406 400.682 150.951 328.395 302.497" },
//     repeat: -1,
//     yoyo: true,
//     duration: 2,
// });

const t1 = gsap
    .timeline()
    .to("polyline", {
        attr: { points: "100 200 200 200 300 200" },
        duration: 1,
        ease: "bounce.out",
    })
    .to("polyline", {
        attr: { points: "100 200 200 300 300 200" },
        duration: 1,
        ease: "bounce.out",
    })
    .to("polyline", {
        attr: { points: "200 200 200 100 200 200" },
        duration: 0.5,
        ease: "power3.in",
    });
