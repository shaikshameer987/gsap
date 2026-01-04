const curve = document.querySelector("#curve");
gsap.set(".demo", { opacity: 1 });

const tl = gsap
    .timeline()
    .fromTo(
        curve,
        { drawSVG: "0% 10%" },
        { drawSVG: "100% 110%", ease: "none", duration: 3, repeat: 10 }
    );

GSDevTools.create({ animation: tl });

gsap.config({ trialWarn: false });
