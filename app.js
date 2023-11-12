const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("#logo",{
    y:10,
    duration:1,
    ease:Power3,
    opacity:0
});
gsap.from("#menubar",{
    y:10,
    duration:1,
    ease:Power3,
    opacity:0
});
Shery.textAnimate("#texts h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});
gsap.from("#hero-images img",{
    x:100,
    duration:2,
    ease:Power3,
    opacity:0
});
Shery.imageEffect(".i-images", {
    style: 4,
    /*optional parameters
    these parameter dose not applies to custom scroll trigger callback */
    scrollSnapping: true,
    scrollSpeed: 7,
    touchSpeed: 8,
    damping: 7,
});
// Shery.mouseFollower({
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 0.5,
// });
// Shery.imageMasker(".food-cards" /* Element to target.*/, {
//     //Parameters are optional.
//     mouseFollower: true,
//     text: "Explore",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
// });
var foodCard1=document.getElementById("card1");
var foodCard2=document.getElementById("card2");
var foodCard3=document.getElementById("card3");
var foodCard4=document.getElementById("card4");
var foodCard5=document.getElementById("card5");
var exploreBtn1=document.querySelector("#explore1");
var exploreBtn2=document.querySelector("#explore2");
var exploreBtn3=document.querySelector("#explore3");
var exploreBtn4=document.querySelector("#explore4");
var exploreBtn5=document.querySelector("#explore5");

foodCard1.addEventListener("mouseenter",()=>{
    gsap.to(exploreBtn1,{
        scale:1,
        opacity:1
    });
});
foodCard1.addEventListener("mouseleave",()=>{
    gsap.to(exploreBtn1,{
        scale:0,
        opacity:0
    });
});
foodCard2.addEventListener("mouseenter",()=>{
    gsap.to(exploreBtn2,{
        scale:1,
        opacity:1
    });
});
foodCard2.addEventListener("mouseleave",()=>{
    gsap.to(exploreBtn2,{
        scale:0,
        opacity:0
    });
});
foodCard3.addEventListener("mouseenter",()=>{
    gsap.to(exploreBtn3,{
        scale:1,
        opacity:1
    });
});
foodCard3.addEventListener("mouseleave",()=>{
    gsap.to(exploreBtn3,{
        scale:0,
        opacity:0
    });
});
foodCard4.addEventListener("mouseenter",()=>{
    gsap.to(exploreBtn4,{
        scale:1,
        opacity:1
    });
});
foodCard4.addEventListener("mouseleave",()=>{
    gsap.to(exploreBtn4,{
        scale:0,
        opacity:0
    });
});
foodCard5.addEventListener("mouseenter",()=>{
    gsap.to(exploreBtn5,{
        scale:1,
        opacity:1
    });
});
foodCard5.addEventListener("mouseleave",()=>{
    gsap.to(exploreBtn5,{
        scale:0,
        opacity:0
    });
});