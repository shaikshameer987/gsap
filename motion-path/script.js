const pauseButton = document.querySelector("#pause");
const progressSlider = document.querySelector("#progressSlider");
const time = document.querySelector("#time");

const animation = gsap.to("#herman", {
    duration: 6,
    ease: "none",
    motionPath: {
        path: "#motionpath",
        align: "#herman",
    },
    onUpdate: animationUpdate,
    onComplete: () => {
        pauseButton.innerText = "Play";
    },
});

function animationUpdate() {
    progressSlider.value = this.progress();
    time.innerText = this.time().toFixed(1);
}

pauseButton.addEventListener("click", () => {
    animation.paused(!animation.paused());
    if (animation.progress() == 1) {
        animation.restart();
    }
    pauseButton.innerText = animation.paused() ? "Play" : "Pause";
});

progressSlider.addEventListener("input", (e) => {
    animation.progress(e.target.value);
    animation.paused(true);
});

progressSlider.addEventListener("change", (e) => {
    animation.progress(e.target.value);
    animation.paused(true);
    pauseButton.innerText = "Play";
});

const homeElement = document.querySelector("#home");
const candyElement = document.querySelector("#candy");
const dogParkElement = document.querySelector("#dogpark");
const schoolElement = document.querySelector("#school");

homeElement.addEventListener("click", () => {
    animation.pause();
    gsap.to(animation, { progress: 0 });
    pauseButton.innerText = "Play";
});

candyElement.addEventListener("click", () => {
    animation.pause();
    gsap.to(animation, { progress: 0.5 });
    pauseButton.innerText = "Play";
});

dogParkElement.addEventListener("click", () => {
    animation.pause();
    gsap.to(animation, { progress: 0.85 });
    pauseButton.innerText = "Play";
});

schoolElement.addEventListener("click", () => {
    animation.pause();
    gsap.to(animation, { progress: 1 });
    pauseButton.innerText = "Play";
});
