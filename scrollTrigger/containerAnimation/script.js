const races = document.querySelector(".races");
console.log(races.offsetWidth);

function getScrollAmount() {
    let racesWidth = races.scrollWidth;
    return -(racesWidth - window.innerWidth / 2);
}

const tween = gsap.fromTo(
    races,
    { x: () => window.innerWidth },
    {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
    }
);

ScrollTrigger.create({
    trigger: ".racesWrapper",
    start: "top 20%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true,
});

const sections = gsap.utils.toArray(".races div");

sections.forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        containerAnimation: tween,
        animation: gsap.to(section.querySelector("h2"), { scale: 0.5, opacity: 0 }),
        scrub: true,
        start: "left 20%",
        markers: true,
    });
});
