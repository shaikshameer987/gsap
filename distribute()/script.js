var select = (e) => document.querySelector(e);
var selectAll = (e) => document.querySelectorAll(e);
var easeSelect = select(".ease-select");
var fromRadio = selectAll("radiol[name='radio']");
var tween = gsap.to({}, {});

function createEaseVis() {
    let svgNS = "http://www.w3.org/2000/svg";
    let size = 650;
    let visualizer = document.createElementNS(svgNS, "g");
    for (var i = 0; i < 65; i++) {
        let rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("width", 9);
        rect.setAttribute("height", size);
        rect.setAttribute("fill", "#555");
        rect.setAttribute("x", i * 10);
        rect.setAttribute("class", "bar");
        visualizer.appendChild(rect);
    }
    //y axis
    let markers = document.createElementNS(svgNS, "g");
    for (var n = 0; n < 5; n++) {
        let newLine = document.createElementNS(svgNS, "line");
        let newText = document.createElementNS(svgNS, "text");
        newText.setAttribute("x", "0");
        newText.setAttribute("y", 0);
        newText.setAttribute("fill", "#f60");
        newText.textContent = 1 - n * 0.25;
        newLine.setAttribute("x1", 40);
        newLine.setAttribute("y1", 0);
        newLine.setAttribute("x2", 650);
        newLine.setAttribute("y2", 0);
        newLine.setAttribute("stroke", "#f96");
        markers.appendChild(newText);
        markers.appendChild(newLine);
    }
    visualizer.appendChild(markers);

    document.getElementById("ease-vis").appendChild(visualizer);

    //gsap.set(markers, {y:650})
    gsap.set("text", {
        y: gsap.utils.distribute({
            base: 5,
            amount: 650,
        }),
    });

    gsap.set("line", {
        y: gsap.utils.distribute({
            base: 0,
            amount: 650,
        }),
        opacity: 0.8,
    });
}
createEaseVis();
gsap.set("svg", { scale: 0.75 });
gsap.set(".bar", { transformOrigin: "50% 100%" });

let end = gsap.utils.distribute({
    base: 0.0,
    amount: 0.5,
    ease: "power4",
    from: "start",
});

gsap.to(".bar", {
    scaleY: end,
});
