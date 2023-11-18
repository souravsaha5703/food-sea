gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var mainSection=document.getElementById("main");
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
var foodMenuSection=document.getElementById("food-menus");
var menus=document.getElementById("non-veg-menus");
var vegMenus=document.getElementById("veg-menus");
var dessertMenus=document.getElementById("desserts-menus");
var footer=document.getElementById("footer-section");


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

gsap.from("#heading",{
    y:20,
    duration:2,
    opacity:0,
    ease:Power3
});

const foods=[{
    foodId:1,
    foodName:"Pizza",
    foodPrice:"₹150",
    foodImage:'../images/pizza img.jpg',
    category:"non veg"
    },
    {
    foodId:2,
    foodName:"Sahi Biryani",
    foodPrice:"₹360",
    foodImage:'../images/biryani img.jpg',
    category:"non veg"
    },
    {
    foodId:3,
    foodName:"Mac Burger",
    foodPrice:"₹200",
    foodImage:'../images/burger img.jpg',
    category:"non veg"
    },
    {
    foodId:4,
    foodName:"Fried Chicken",
    foodPrice:"₹150",
    foodImage:'../images/fried chicken.jpg',
    category:"non veg"
    },
    {
    foodId:5,
    foodName:"Sahi Paneer",
    foodPrice:"₹200",
    foodImage:'../images/sahi paneer.jpg',
    category:"veg"
    },
    {
    foodId:6,
    foodName:"Pulao",
    foodPrice:"₹300",
    foodImage:'../images/pulao.jpg',
    category:"veg"
    },
    {
    foodId:7,
    foodName:"Fried Rice",
    foodPrice:"₹350",
    foodImage:'../images/fried rice img.jpg',
    category:"veg"
    },
    {
    foodId:8,
    foodName:"Pav Bhaji",
    foodPrice:"₹200",
    foodImage:'../images/pav bhaji.jpg',
    category:"non veg"
    },
    {
    foodId:9,
    foodName:"Crisspy Dosa",
    foodPrice:"₹250",
    foodImage:'../images/dosa image.jpg',
    category:"veg"
    },
    {
    foodId:10,
    foodName:"Idli",
    foodPrice:"₹120",
    foodImage:'../images/idli image.jpg',
    category:"veg"
    },
    {
    foodId:11,
    foodName:"Chicken Momo",
    foodPrice:"₹80",
    foodImage:'../images/chicken momo image.png',
    category:"non veg"
    },
    {
    foodId:12,
    foodName:"Chowmein",
    foodPrice:"₹60",
    foodImage:'../images/chowmin image.jpg',
    category:"non veg"
    },
    {
    foodId:13,
    foodName:"Spicy Pasta",
    foodPrice:"₹75",
    foodImage:'../images/pasta image.jpg',
    category:"non veg"
    },
    {
    foodId:14,
    foodName:"Yellow Mount Cake",
    foodPrice:"₹60",
    foodImage:'../images/pastry.jpg',
    category:"desserts"
    },
    {
    foodId:15,
    foodName:"Roso Golla",
    foodPrice:"₹20",
    foodImage:'../images/roso golla image.jpg',
    category:"desserts"
    },
];

let searchBox=document.getElementById("searchbox");
let searchBtn=document.getElementById("searchBtn");
let counter=0;
searchBtn.addEventListener("click",()=>{
    counter++;
    if(counter==1){
        if(searchBox.value==''){
            alert("Please write something then search it");
        }else{
            foodMenuSection.parentNode.removeChild(foodMenuSection);
            let searchFoodSection=document.createElement("div");
            searchFoodSection.className="search-food-section";
            footer.parentNode.insertBefore(searchFoodSection,footer);
            let searchValue=document.createElement("h1");
            searchValue.id="searched-food";
            searchValue.innerHTML=`Results regarding ${searchBox.value} :`;
            searchFoodSection.appendChild(searchValue);
            let query=searchBox.value.toLowerCase();
            let result=foods.filter((food)=>{
                return food.foodName.toLowerCase().includes(query);
            });
            console.log(result);
            if(result.length>0){
                let searchFoods=document.createElement("div");
                searchFoods.className="search-foods";
                searchFoodSection.appendChild(searchFoods);
                result.forEach((food)=>{
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
                    searchFoods.appendChild(menuCard);
                    menuCard.appendChild(foodsImage);
                    menuCard.appendChild(imageLayer);
                    menuCard.appendChild(foodsName);
                    menuCard.appendChild(foodsPrice);
                    menuCard.appendChild(buyOption);
                });
            }else{
                let notFound=document.createElement("h1");
                notFound.innerHTML="No Food Item Found";
                notFound.style.textAlign="center";
                searchFoodSection.appendChild(notFound);
            }
        }
    }else if(counter>1){
        alert("bye")
    }
});


foods.forEach((food)=>{
    if(food.category=='non veg'){
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
    }else if(food.category=='veg'){
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
        vegMenus.appendChild(menuCard);
        menuCard.appendChild(foodsImage);
        menuCard.appendChild(imageLayer);
        menuCard.appendChild(foodsName);
        menuCard.appendChild(foodsPrice);
        menuCard.appendChild(buyOption);
    }else if(food.category=='desserts'){
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
        dessertMenus.appendChild(menuCard);
        menuCard.appendChild(foodsImage);
        menuCard.appendChild(imageLayer);
        menuCard.appendChild(foodsName);
        menuCard.appendChild(foodsPrice);
        menuCard.appendChild(buyOption);
    }
});