function init() {
    const demo = document.getElementById("demo");
    const boxWrapper = document.querySelector(".boxWrapper");
    const boxes = document.querySelectorAll(".box");
    const demoWidth = 500;
    const boxWrapperWidth = boxWrapper.offsetWidth;
    const scrollAmount = boxWrapperWidth - demoWidth;

    boxes.forEach((box, index) => {
        box.textContent = index + 1;
    });

    const tween = gsap.to(boxWrapper, { x: -scrollAmount, duration: 10, ease: "none" });

    demo.addEventListener("mousemove", function (e) {
        const distance = e.offsetX - 250;
        const timeScale = gsap.utils.mapRange(-250, 250, -2.5, 2.5, distance);
        tween.timeScale(timeScale);
    });
}

window.addEventListener("load", init);
