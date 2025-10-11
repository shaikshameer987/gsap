gsap.registerPlugin(EasePack);

var tl = gsap.timeline({ repeat: 5 });
var duration = 2;
function init() {
    tl.set("img, h1", { xPercent: -100 });
    tl.to("img, h1", { x: 800, duration: duration, xPercent: 0, ease: "slow(0.5, 1.2)" }).from(
        "img, h1",
        {
            duration: duration,
            scale: 0,
            opacity: 0.5,
            ease: "slow(0.6, 0.6, true)",
            stagger: 0.2,
        },
        "<"
    );
}

window.addEventListener("load", function (event) {
    gsap.set("#demo", { autoAlpha: 1 });
    init();
});
