const races = document.querySelector(".races");

function getScrollAmount() {
    let racesWidth = races.scrollWidth;
    let lastItemWidth = document.querySelector(".races div:last-of-type h2").offsetWidth;
    let windowWidth = window.innerWidth;
    console.log("windowWidth: ", windowWidth, "// lastItemWidth: ", lastItemWidth);
    let padding = windowWidth / 2 - lastItemWidth / 2;
    return -(racesWidth - window.innerWidth) - padding;
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

const maps = gsap.utils.toArray(".map");

sections.forEach((section, index) => {
    const map = maps[index];
    const ellipse = map.querySelector("ellipse");
    const track = map.querySelector(".track");
    const highlight = map.querySelector(".highlight");
    const mapAni = gsap
        .timeline({ paused: true })

        .from([ellipse, track], {
            scale: 0,
            ease: "back",
            transformOrigin: "50% 50%",
            stagger: 0.1,
        })
        .from(highlight, { drawSVG: 0, ease: "power1.inOut" }, "-=0.2")
        .to(map, { opacity: 1 }, 0);
    ScrollTrigger.create({
        trigger: section,
        containerAnimation: tween,
        animation: gsap.to(section.querySelector("h2"), { scale: 0.6 }),
        scrub: true,
        start: "left 50%",
        end: "right 50%",
        markers: true,
        onToggle: (self) => (self.isActive ? mapAni.play() : mapAni.pause(0)),
    });
});
