const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var cursor=document.getElementById("cursor");
var foodCard1=document.getElementById("card1");
var foodCard2=document.getElementById("card2");
var foodCard3=document.getElementById("card3");
var foodCard4=document.getElementById("card4");
var homeBtn=document.getElementById("home");
var foodMenuBtn=document.getElementById("menu");
var bookTableBtn=document.getElementById("booktable");
var onlineBookBtn=document.getElementById("onlineorder");
var aboutBtn=document.getElementById("about");
var contactBtn=document.getElementById("contact");
var menuBtn=document.getElementById("menubar");
var menuSection=document.getElementsByClassName("menu-section");
var closeMenuBtn=document.getElementById("close-menu");

document.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    cursor.style.transition="all 0.3 ease-in";
});

homeBtn.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        width:30,
        height:30
    });
    gsap.to(homeBtn,{
        fontSize:50
    });
});
homeBtn.addEventListener("mouseleave",()=>{
    homeBtn.style.fontSize="2rem";
    gsap.to(cursor,{
        width:10,
        height:10
    });
    gsap.to(homeBtn,{
        fontSize:32
    });
});

foodMenuBtn.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        width:30,
        height:30
    });
    gsap.to(foodMenuBtn,{
        fontSize:50
    });
});
foodMenuBtn.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        width:10,
        height:10
    });
    gsap.to(foodMenuBtn,{
        fontSize:32
    });
});

bookTableBtn.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        width:30,
        height:30
    });
    gsap.to(bookTableBtn,{
        fontSize:50
    });
});
bookTableBtn.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        width:10,
        height:10
    });
    gsap.to(bookTableBtn,{
        fontSize:32
    });
});

onlineBookBtn.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        width:30,
        height:30
    });
    gsap.to(onlineBookBtn,{
        fontSize:50
    });
});
onlineBookBtn.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        width:10,
        height:10
    });
    gsap.to(onlineBookBtn,{
        fontSize:32
    });
});

aboutBtn.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        width:30,
        height:30
    });
    gsap.to(aboutBtn,{
        fontSize:50
    });
});
aboutBtn.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        width:10,
        height:10
    });
    gsap.to(aboutBtn,{
        fontSize:32
    });
});

contactBtn.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        width:30,
        height:30
    });
    gsap.to(contactBtn,{
        fontSize:50
    });
});
contactBtn.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        width:10,
        height:10
    });
    gsap.to(contactBtn,{
        fontSize:32
    });
});

menuBtn.addEventListener("mouseenter",()=>{
    gsap.to(menuBtn,{
        rotation:90
    });
});

menuBtn.addEventListener("mouseleave",()=>{
    gsap.to(menuBtn,{
        rotation:180
    });
});

menuBtn.addEventListener("click",()=>{
    gsap.to(menuSection,{
        right:0,
        ease:Power3
    });
});

closeMenuBtn.addEventListener("mouseenter",()=>{
    gsap.to(closeMenuBtn,{
        rotation:90
    });
});

closeMenuBtn.addEventListener("mouseleave",()=>{
    gsap.to(closeMenuBtn,{
        rotation:-90
    });
});

closeMenuBtn.addEventListener("click",()=>{
    gsap.to(menuSection,{
        right:"-50%",
        ease:Power3
    });
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
gsap.from("#sintro",{
    x:-150,
    duration:2,
    opacity:0,
    ease:Power3,
    scrollTrigger:{
        trigger:"#sintro",
        scroller:"body",
        start:"top 50%",
        end:"top 60%",
        markers:true,
        scrub:2
    }
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

foodCard1.addEventListener("mouseenter",()=>{
    cursor.innerHTML="Explore";
    cursor.style.color="#fff";
    cursor.style.display="flex";
    cursor.style.alignItems="center";
    cursor.style.justifyContent="center";
    cursor.style.fontFamily="'Borel', cursive";
    gsap.to(cursor,{
        width:100,
        height:100,
        ease:Power3
    });
});
foodCard1.addEventListener("mouseleave",()=>{
    cursor.innerHTML="";
    gsap.to(cursor,{
        width:10,
        height:10,
        ease:Power3
    });
});
foodCard2.addEventListener("mouseenter",()=>{
    cursor.innerHTML="Explore";
    cursor.style.color="#fff";
    cursor.style.display="flex";
    cursor.style.alignItems="center";
    cursor.style.justifyContent="center";
    cursor.style.fontFamily="'Borel', cursive";
    gsap.to(cursor,{
        width:100,
        height:100,
        ease:Power3
    });
});
foodCard2.addEventListener("mouseleave",()=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        width:10,
        height:10,
        ease:Power3
    });
});
foodCard3.addEventListener("mouseenter",()=>{
    cursor.innerHTML="Explore";
    cursor.style.color="#fff";
    cursor.style.display="flex";
    cursor.style.alignItems="center";
    cursor.style.justifyContent="center";
    cursor.style.fontFamily="'Borel', cursive";
    gsap.to(cursor,{
        width:100,
        height:100,
        ease:Power3
    });
});
foodCard3.addEventListener("mouseleave",()=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        width:10,
        height:10,
        ease:Power3
    });
});
foodCard4.addEventListener("mouseenter",()=>{
    cursor.innerHTML="Explore";
    cursor.style.color="#fff";
    cursor.style.display="flex";
    cursor.style.alignItems="center";
    cursor.style.justifyContent="center";
    cursor.style.fontFamily="'Borel', cursive";
    gsap.to(cursor,{
        width:100,
        height:100,
        ease:Power3
    });
});
foodCard4.addEventListener("mouseleave",()=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        width:10,
        height:10,
        ease:Power3
    });
});
