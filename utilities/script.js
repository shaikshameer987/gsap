function init() {
    // // first
    // const setScaleX = gsap.quickSetter(".box", "scaleX");
    // const setScaleY = gsap.quickSetter(".box", "scaleY");
    // demo.addEventListener("mousemove", function (e) {
    //     mouseX.textContent = e.offsetX;
    //     mouseY.textContent = e.offsetY;
    //     let scaleX = gsap.utils.mapRange(0, 500, 1, 4, e.offsetX);
    //     let scaleY = gsap.utils.mapRange(0, 500, 1, 4, e.offsetY);
    //     setScaleX(scaleX);
    //     setScaleY(scaleY);
    // });
    // second
    // const setScaleX = gsap.quickSetter(".box", "scaleX");
    // const setScaleY = gsap.quickSetter(".box", "scaleY");
    // const center = 250;
    // demo.addEventListener("mousemove", function (e) {
    //     mouseX.textContent = e.offsetX;
    //     let distance = Math.abs(center - e.offsetX);
    //     distanceX.textContent = distance;
    //     distance = gsap.utils.mapRange(0, center, 3, 1, distance);
    //     setScaleX(distance);
    //     setScaleY(distance);
    // });

    // second
    const mapRange = gsap.utils.mapRange(0, 500, 0, 360);
    const snap = gsap.utils.snap(45);
    const setRotation = gsap.quickSetter(".box", "rotation", "deg");
    const pipe = gsap.utils.pipe(mapRange, snap, setRotation);

    demo.addEventListener("mousemove", function (e) {
        mouseX.textContent = e.offsetX;
        pipe(e.offsetX);
    });
}

window.addEventListener("load", init);
