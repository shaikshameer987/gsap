const svgNS = "http://www.w3.org/2000/svg";

function grid() {
    let svg = document.getElementById("grid");
    const rows = 10;
    const columns = 10;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            const rect = document.createElementNS(svgNS, "rect");
            gsap.set(rect, { attr: { fill: "pink", width: 14, height: 14, x: c * 15, y: r * 15 } });
            svg.appendChild(rect);
        }
    }
}
grid();

function weightedRandom(collection, ease) {
    return gsap.utils.pipe(
        Math.random, //random number between 0 and 1
        gsap.parseEase(ease), //apply the ease
        gsap.utils.mapRange(0, 1, -0.5, collection.length - 0.5), //map to the index range of the array, stretched by 0.5 each direction because we'll round and want to keep distribution (otherwise linear distribution would be center-weighted slightly)
        gsap.utils.snap(1), //snap to the closest integer
        (i) => collection[i] //return that element from the array
    );
}

const colors = ["red", "yellow", "blue"];

gsap.to("rect", { fill: weightedRandom(colors, "power4.inOut") });
