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
var foodCard1=document.getElementById("card1");
var foodCard2=document.getElementById("card2");
var foodCard3=document.getElementById("card3");
var foodCard4=document.getElementById("card4");
var exploreBtn1=document.querySelector("#expo1");
var exploreBtn2=document.querySelector("#expo2");
var exploreBtn3=document.querySelector("#expo3");
var exploreBtn4=document.querySelector("#expo4");

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
