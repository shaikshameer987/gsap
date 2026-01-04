const tween = gsap.to(".emoji > g", {
    ease: "none",
    duration: 3,
    rotation: 360,
    transformOrigin: "50% 50%",
});

restart.addEventListener("click", () => tween.restart());
