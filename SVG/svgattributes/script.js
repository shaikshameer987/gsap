// gsap.to("#circle1", {
//     attr: { fill: "blue" },
//     duration: 2,
//     scale: 2,
//     transformOrigin: "50% 50%",
// });

const tl = gsap
    .timeline()
    .to("circle", { strokeWidth: 20 })
    .to("circle", { fillOpacity: 0 })
    .to("circle", { strokeOpacity: 0 });
