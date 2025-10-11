var tl = gsap.timeline({ repeat: 5 });
var duration = 2;
function init() {
    tl.fromTo(
        "h1",
        { scale: 0 },
        { duration: duration, scale: 6, ease: "slow(0.5, 0.8)", stagger: duration }
    ).from(
        "h1",
        { duration: duration, opacity: 0, ease: "slow(0.5, 0.8, true)", stagger: duration },
        "<"
    );
}

window.addEventListener("load", function (event) {
    gsap.set("#demo", { autoAlpha: 1 });
    init();
});
