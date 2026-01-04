const curve = document.querySelector("#curve");
let length = curve.getTotalLength();
console.log(length);

gsap.set(curve, {
    strokeDasharray: length,
    strokeDashoffset: length,
});

const tl = gsap
    .timeline()
    .to("line", { strokeDashoffset: -400, duration: 2 })
    .to(curve, { strokeDashoffset: 0, duration: 1 }, 0)
    .to(curve, { strokeDashoffset: -length, duration: 1 });

GSDevTools.create({ animation: tl });

gsap.config({ trialWarn: false });
