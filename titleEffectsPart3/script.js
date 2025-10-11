let elements = document.querySelectorAll("li");
let effectsTimeline = gsap.timeline({ delay: 0.3 });

gsap.registerEffect({
    name: "in",
    extendTimeline: true,
    defaults: {
        duration: 0.5,
        fade: 0.1,
        y: 0,
        x: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        transformOrigin: "50% 50%",
        perspective: 400,
        scale: 1,
        ease: "power1",
        each: 0.05,
        staggerEase: "power1.in",
        from: "start",
    },
    effect: (targets, config) => {
        if (config.rotationX != 0 || config.rotationY != 0) {
            console.log("need 3D");
            gsap.set(targets[0].parentNode, { perspective: config.perspective });
        }

        let tl = gsap.timeline();
        tl.from(targets, {
            duration: config.duration,
            ease: config.ease,
            x: config.x,
            y: config.y,
            scale: config.scale,
            transformOrigin: config.transformOrigin,
            rotationX: config.rotationX,
            rotationY: config.rotationY,
            stagger: {
                each: config.each,
                ease: config.staggerEase,
                from: config.from,
            },
        });

        tl.from(
            targets,
            {
                duration: config.fade,
                opacity: 0,
                ease: "none",
                stagger: {
                    each: config.each,
                    ease: config.staggerEase,
                    from: config.from,
                },
            },
            0
        );
        return tl;
    },
});

gsap.registerEffect({
    name: "out",
    extendTimeline: true,
    defaults: {
        duration: 0.5,
        fade: 0.5,
        y: 0,
        x: 0,
        rotationX: 0,
        rotationY: 0,
        perspective: 400,
        scale: 1,
        transformOrigin: "50% 50%",
        scale: 1,
        ease: "power1",
        each: 0.05,
        staggerEase: "power1.in",
        from: "start",
    },
    effect: (targets, config) => {
        let tl = gsap.timeline();
        tl.to(targets, {
            duration: config.duration,
            ease: config.ease,
            x: config.x,
            y: config.y,
            scale: config.scale,
            transformOrigin: config.transformOrigin,
            rotationX: config.rotationX,
            rotationY: config.rotationY,
            stagger: {
                each: config.each,
                ease: config.staggerEase,
                from: config.from,
            },
        });

        tl.to(
            targets,
            {
                duration: config.fade,
                opacity: 0,
                ease: "none",
                stagger: {
                    each: config.each,
                    ease: config.staggerEase,
                    from: config.from,
                },
            },
            0
        );
        return tl;
    },
});

function splitElements() {
    elements.forEach(function (element, index) {
        let split = new SplitText(element, { type: "chars,words,lines" });
        effectsTimeline
            .in(split.words, {
                rotationX: -90,
                transformOrigin: "50% 0% 30",
                fade: 0.5,
                duration: 1,
                from: "center",
            })
            .out(split.words, { y: 50, fade: 0.3 }, "+=1");
    });
}

splitElements();

GSDevTools.create();

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            //left
            effectsTimeline.reverse();
            break;
        case 38:
            //up
            break;
        case 39:
            //right next
            effectsTimeline.play();
            break;
        case 40:
            //down
            break;
    }
};

document.onclick = function () {
    effectsTimeline.play();
};
