gsap.registerPlugin(CustomEase);
const herman = document.querySelector("#herman");

CustomEase.create(
    "myEase",
    "M0,0 C0,0 0.096,-0.174 0.232,-0.174 0.394,-0.174 0.465,0.302 0.664,0.302 0.92,0.302 1,0 1,0  "
);

let animation = gsap.to(herman, { duration: 1, rotation: -40, scale: 4, ease: "myEase" });

herman.addEventListener("click", () => animation.restart());
