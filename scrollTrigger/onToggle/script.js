const sectionColors = ["#6a161E", "#124559", "#598392"];

//apply sectionColors to each .fullscreen element
gsap.set(".fullscreen", { backgroundColor: gsap.utils.wrap(sectionColors) });

const sections = gsap.utils.toArray(".fullscreen");

sections.forEach(function (section, index) {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        markers: false,
        animation: gsap.to(`li:nth-child(${index + 1})`, {
            duration: 0.2,
            opacity: 1,
            color: "white",
        }),
        //if ScrollTrigger isActive = true then play the animation forward via reversed(false)
        onToggle: (self) => {
            self.animation.reversed(!self.isActive);
        },
    });
});
