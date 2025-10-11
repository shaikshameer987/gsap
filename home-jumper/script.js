var tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.from(".hole", { scale: 0, repeat: 1, yoyo: true });
tl.fromTo(".herman", { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, 0.2);
tl.to(".herman", { y: -5, ease: "power1.in" }, ">");
tl.to(".herman", {
    scaleY: 0.8,
    scaleX: 1.3,
    transformOrigin: "50% 100%",
    duration: 0.2,
});
tl.to(".shadow", { opacity: 1, duration: 0.2 }, 0.7);
tl.to(".shadow", { scaleX: 0.7, ease: "power1.in" }, ">");
