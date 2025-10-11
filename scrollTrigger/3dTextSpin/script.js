const tl = gsap.timeline();

function initHeaders() {
    //make a clone of the h1 tag
    let header = document.querySelector(".rotatingHeader");
    let original = header.querySelector("h1");
    let clone = original.cloneNode(true);
    header.appendChild(clone);
    gsap.set(clone, { yPercent: -100 });

    //split the text in original h1 and clone
    let originalSplit = SplitText.create(original, { type: "chars" });
    let cloneSplit = SplitText.create(clone, { type: "chars" });

    //global tween settings
    let duration = 1;
    let stagger = { each: 0.02, from: "start", ease: "power2" };

    gsap.set(cloneSplit.chars, { rotationX: -90, opacity: 0, transformOrigin: "50% 50% -50" });

    tl.to(originalSplit.chars, {
        duration: duration,
        rotationX: 90,
        transformOrigin: "50% 50% -50",
        stagger: stagger,
    })
        .to(
            originalSplit.chars,
            { duration: duration, opacity: 0, stagger: stagger, ease: "power2.in" },
            0
        )

        .to(cloneSplit.chars, { opacity: 1, duration: 0.1, stagger: stagger }, 0)
        .to(cloneSplit.chars, { duration: duration, rotationX: 0, stagger: stagger }, 0);
}

initHeaders();

GSDevTools.create({ animation: tl });
