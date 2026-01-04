const curve = document.querySelector("#curve");
gsap.set(".demo", { opacity: 1 });

const tl = gsap
    .timeline()
    .fromTo(curve, { drawSVG: 0 }, { drawSVG: true, ease: "none", duration: 2 })
    .to(curve, { drawSVG: "100% 100%", ease: "none", duration: 2 });
