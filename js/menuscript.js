// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var cursor=document.getElementById("cursor");
var homeBtn=document.getElementById("home");
var foodMenuBtn=document.getElementById("menu");
var bookTableBtn=document.getElementById("booktable");
var onlineBookBtn=document.getElementById("onlineorder");
var aboutBtn=document.getElementById("about");
var contactBtn=document.getElementById("contact");
var menuBtn=document.getElementById("menubar");
var menuSection=document.getElementsByClassName("menu-section");
var closeMenuBtn=document.getElementById("close-menu");
var menus=document.getElementById("menus");

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

const foods=[{
    foodId:1,
    foodName:"Pizza",
    foodPrice:"₹150",
    foodImage:'../images/pizza img.jpg'
    },
    {
    foodId:2,
    foodName:"Sahi Biryani",
    foodPrice:"₹360",
    foodImage:'../images/biryani img.jpg'
    },
    {
    foodId:3,
    foodName:"Mac Burger",
    foodPrice:"₹200",
    foodImage:'../images/burger img.jpg'
    },
    {
    foodId:4,
    foodName:"Fried Chicken",
    foodPrice:"₹150",
    foodImage:'../images/fried chicken.jpg'
    },
    {
    foodId:5,
    foodName:"Sahi Paneer",
    foodPrice:"₹200",
    foodImage:'../images/sahi paneer.jpg'
    },
    {
    foodId:6,
    foodName:"Pulao",
    foodPrice:"₹300",
    foodImage:'../images/pulao.jpg'
    },
    {
    foodId:7,
    foodName:"Fried Rice",
    foodPrice:"₹350",
    foodImage:'../images/fried rice img.jpg'
    },
    {
    foodId:8,
    foodName:"Pav Bhaji",
    foodPrice:"₹200",
    foodImage:'../images/pav bhaji.jpg'
    },
    {
    foodId:9,
    foodName:"Crisspy Dosa",
    foodPrice:"₹250",
    foodImage:'../images/dosa image.jpg'
    },
    {
    foodId:10,
    foodName:"Idli",
    foodPrice:"₹120",
    foodImage:'../images/idli image.jpg'
    },
    {
    foodId:11,
    foodName:"Chicken Momo",
    foodPrice:"₹80",
    foodImage:'../images/chicken momo image.png'
    },
    {
    foodId:12,
    foodName:"Chowmein",
    foodPrice:"₹60",
    foodImage:'../images/chowmin image.jpg'
    },
    {
    foodId:13,
    foodName:"Spicy Pasta",
    foodPrice:"₹75",
    foodImage:'../images/pasta image.jpg'
    },
    {
    foodId:14,
    foodName:"Yellow Mount Cake",
    foodPrice:"₹60",
    foodImage:'../images/pastry.jpg'
    },
    {
    foodId:15,
    foodName:"Roso Golla",
    foodPrice:"₹20",
    foodImage:'../images/roso golla image.jpg'
    },
];

foods.forEach((food)=>{
    let menuCard=document.createElement("div");
    let foodsImage=document.createElement("img");
    let foodsName=document.createElement("h2");
    let foodsPrice=document.createElement("p");
    let buyOption=document.createElement("a");
    let imageLayer=document.createElement("div");
    menuCard.className="menu-card";
    foodsImage.className="foodimg";
    foodsImage.src=food.foodImage;
    foodsName.className="food-name";
    foodsName.innerHTML=food.foodName;
    foodsPrice.className="price";
    foodsPrice.innerHTML=food.foodPrice;
    buyOption.className="buy";
    buyOption.innerHTML=`<i class="fa-solid fa-cart-shopping"></i>`;
    imageLayer.className="layer";
    menus.appendChild(menuCard);
    menuCard.appendChild(foodsImage);
    menuCard.appendChild(imageLayer);
    menuCard.appendChild(foodsName);
    menuCard.appendChild(foodsPrice);
    menuCard.appendChild(buyOption);
});