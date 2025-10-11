let select = (selector) => {
    return document.querySelector(selector);
};

let next_btn = select("#next_btn");
let prev_btn = select("#prev_btn");

let tl = gsap
    .timeline({
        paused: true,
        defaults: { duration: 0.5, scale: 0 },
    })

    .add("b0")
    .from(".b0", {})
    .addPause()
    .to(".b0", { opacity: 0 })

    .add("b1")
    .from(".b1", { rotation: -180 })
    .addPause()
    .to(".b1", { opacity: 0 })

    .add("b2")
    .from(".b2", { rotation: 180, y: -100 })
    .addPause()
    .to(".b2", { opacity: 0 })

    .add("b3")
    .from(".b3", { rotation: 180, y: 100 });

next_btn.addEventListener("click", () => tl.play());
prev_btn.addEventListener("click", () => tl.reverse());

//helper function provided by GreenSock
const getLabelsArray = (timeline) =>
    Object.keys(timeline.labels)
        .map((v) => ({ name: v, time: timeline.labels[v] }))
        .sort((a, b) => a.time - b.time);

let labels = getLabelsArray(tl);

labels.forEach(function (item, index) {
    let dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dot.setAttribute("data-label", item.name);
    document.querySelector(".dotNav").appendChild(dot);
    dot.addEventListener("click", function () {
        tl.play(this.getAttribute("data-label"));
    });
});
