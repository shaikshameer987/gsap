function init() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".scrollContainer"),
        smooth: true,
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)

    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".scrollContainer" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".scrollContainer", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    gsap.set("body", { opacity: 1 });
    gsap.set(".circle", { xPercent: -50, yPercent: -50 });

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    Math.getDistance = function (x1, y1, x2, y2) {
        var xs = x2 - x1,
            ys = y2 - y1;
        xs *= xs;
        ys *= ys;
        return Math.sqrt(xs + ys);
    };

    let radius = Math.getDistance(0, 0, centerX, centerY);
    let fullWidth = radius * 2;
    let percentIncrease = fullWidth / 100;

    let tl = gsap
        .timeline({ onComplete: enableScrollTimeline })
        .to(".circle", { x: "90vw" })
        .to(".circle", { x: "50vw", scale: percentIncrease, duration: 1, ease: "power1.in" })
        .set(".animationWrapper", { opacity: 1 }, "<+=0.5")
        .from(".headings h1", { xPercent: -100, opacity: 0, duration: 1 }, "<")
        .from(".headings h2", { xPercent: 100, opacity: 0, duration: 1 }, "<+0.25")
        .from(".logo", { scale: 0.3, opacity: 0, duration: 0.5 }, "<+0.5")

        .duration(5);

    let scrollTimeline = gsap
        .timeline({ paused: true })
        .to(".headings h1", { y: -100, opacity: 0 })
        .to(".headings h2", { y: 100, opacity: 0 }, "<")
        .set(".rotator", { opacity: 1 }, "<")
        .from(".rotator h1", { opacity: 0, scale: 0, stagger: 1 }, "<")
        .to(".rotator h1", { opacity: 0, scale: 2, stagger: 1 }, "<+1");

    function enableScrollTimeline() {
        // taglines away and rotator

        gsap.set(".moreContent", { display: "block" });

        ScrollTrigger.create({
            trigger: ".hero",
            start: "top top",
            scroller: ".scrollContainer",
            pin: true,
            end: "+=" + window.innerHeight * 3,
            animation: scrollTimeline,
            scrub: 3,
        });
    }
}

// //chrome does not report window.innerWidth accurately on load in CodePen editor view

function checkWidth() {
    console.log("window.innerWidth ", window.innerWidth);
    if (window.innerWidth > 0) {
        console.log("good");
        init();
    } else {
        console.log("bad");
        gsap.delayedCall(0.05, checkWidth);
    }
}
checkWidth();
