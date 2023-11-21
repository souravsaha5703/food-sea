let foodString=localStorage.getItem('foodData');

let foodArray=JSON.parse(foodString);

let foodIdReceived=window.location.search;

var params=new URLSearchParams(foodIdReceived);

var data=params.get('id');


 for (let index = 0; index < foodArray.length; index++) {
    if(data==foodArray[index].foodId){
        let foodDetails=data;
        displayData(foodDetails);
    }
 }
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
var foodItemsBox=document.getElementById("food-items");



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
        right:"-150%",
        ease:Power3
    });
});

let plusBtn=document.createElement("input");
plusBtn.className="plus";
plusBtn.type="button";
plusBtn.value="+";

let minusBtn=document.createElement("input");
minusBtn.className="minus";
minusBtn.type="button";
minusBtn.value="-";

let quantityBox=document.createElement("input");
quantityBox.type="text";
quantityBox.value="1";
quantityBox.className="qty";
quantityBox.id="qtybox";
quantityBox.disabled=true;

let quantityForm=document.createElement("form");
quantityForm.id="myform";
quantityForm.className="quantity";
quantityForm.action="#";

quantityForm.appendChild(minusBtn);
quantityForm.appendChild(quantityBox);
quantityForm.appendChild(plusBtn);

function displayData(foodDetails){
    let foodData=foodDetails;
    let items=document.createElement("div");
    items.className="item";
    let foodImage=document.createElement("img");
    foodImage.className="itemImg";
    foodImage.src=foodArray[foodData].foodImage;
    
}

// var plusBtn=document.querySelectorAll(".plus");
// var minusBtn=document.querySelectorAll(".minus");
// var quantityBox=document.getElementById("qtybox");
// var quantity=0;
// quantityBox.disabled=true;

// plusBtn.forEach((plusButton)=>{
//     plusButton.addEventListener("click",()=>{
//         let quantityValue=Number(quantityBox.value);
//         quantityBox.value=quantityValue+1;
//         quantity=quantityBox.value;
//     });
// });

// minusBtn.forEach((minusButton)=>{
//     minusButton.addEventListener("click",()=>{
//         let quantityValue=Number(quantityBox.value);
//         if(quantityValue==1){
//             quantityBox.value=1; 
//         }else{
//             quantityBox.value=quantityValue-1;
//             quantity=quantityBox.value;
//         }
//     });
// });