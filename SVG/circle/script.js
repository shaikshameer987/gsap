const timeline = gsap.timeline({
    repeat: -1,
});

timeline
    .to("#circle1", {
        attr: { cy: 500 },
        duration: 2,
    })
    .to("#circle1", {
        attr: { cx: -500 },
        duration: 3,
    })
    .to(
        "#circle2",
        {
            attr: { cx: 500 },
            duration: 2,
        },
        "-=2.5"
    )
    .to("#circle2", {
        attr: { cy: 1200 },
        duration: 2,
    });
