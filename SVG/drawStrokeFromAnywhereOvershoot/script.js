const curve = document.querySelector("#curve");
gsap.set(".demo", { opacity: 1 });

const tl = gsap.timeline();
tl.fromTo(curve, { drawSVG: "100% 100%" }, { drawSVG: "150% 50%", duration: 1 }).fromTo(
    curve,
    { drawSVG: true },
    { drawSVG: "50% 50%", duration: 1 }
);
