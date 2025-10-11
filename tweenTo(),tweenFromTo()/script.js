const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
const blue = select(".blue");
const pink = select(".pink");
const btn = select("#btn");

const blueAni = gsap
    .timeline()
    .to(blue, { scale: 2 })
    .to(blue, { rotation: 360 })
    .to(blue, { scale: 1 });

const pinkAni = gsap.timeline().to(pink, { y: -50 }).to(pink, { rotation: 360 }).to(pink, { y: 0 });

//this sequence goes
// blue - blue - pink - blue

let animation = gsap.timeline();
animation.add(blueAni.tweenTo(blueAni.duration(), { repeat: 1 })); //duration changes speed
animation.add(pinkAni);
animation.add(blueAni.tweenFromTo(0, blueAni.duration()));

btn.addEventListener("click", () => {
    animation.restart();
});
