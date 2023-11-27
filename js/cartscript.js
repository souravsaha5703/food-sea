let foodString=localStorage.getItem('foodData');

let foodArray=JSON.parse(foodString);

let foodIdReceived=sessionStorage.getItem('tempFoodId');

let arrayOfId=JSON.parse(foodIdReceived);

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
var cartSection=document.getElementById("food-items");
var grandPrice=document.getElementById("gdprice");
var proceedBtn=document.querySelector("#grand-price a");



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
function quantityFormBuild(){
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

    return quantityForm;
}

let quantity=0;


arrayOfId.forEach((data)=>{
    for (let index = 0; index < foodArray.length; index++) {
        if(data==foodArray[index].foodId){
            let foodDetails=data;
            displayData(foodDetails);
        }
     }
});

function displayData(foodDetails){
    let foodData=foodDetails;
    let formDetails=createItems(foodData);
    quantityButtonAction(formDetails);
}

function createItems(foodData){
    let fdata=foodData-1;
    let foodItem=document.createElement("div");
    let ItemImage=document.createElement("img");
    let ItemName=document.createElement("h2");
    let ItemCategory=document.createElement("h3");
    let ItemPrice=document.createElement("p");
    let ItemRemoveBtn=document.createElement("button");
    let finalPrice=document.createElement("p");
    finalPrice.className="final-price";
    foodItem.className="item";
    ItemImage.className="itemImg";
    ItemImage.src=foodArray[fdata].foodImage;
    ItemName.className="foodName";
    ItemName.innerHTML=foodArray[fdata].foodName;
    ItemCategory.className="foodCategory";
    ItemCategory.innerHTML=foodArray[fdata].category;
    ItemPrice.className="foodPrice";
    ItemPrice.innerHTML=`₹${foodArray[fdata].foodPrice}`;
    ItemRemoveBtn.className="delete";
    ItemRemoveBtn.innerHTML=`<i class="fa-solid fa-xmark delete"></i>`;
    finalPrice.innerHTML=`₹${foodArray[fdata].foodPrice}`;
    let formStructure=quantityFormBuild();
    cartSection.appendChild(foodItem);
    foodItem.appendChild(ItemImage);
    foodItem.appendChild(ItemName);
    foodItem.appendChild(ItemCategory);
    foodItem.appendChild(ItemPrice);
    foodItem.appendChild(formStructure);
    foodItem.appendChild(ItemRemoveBtn);
    foodItem.appendChild(finalPrice);
    return formStructure;
}

function quantityButtonAction(formStructure){
    let formInfo=formStructure;
    let formChilds=formInfo.children;
    let mBtn=formChilds.item(0);
    let qBox=formChilds.item(1);
    let pBtn=formChilds.item(2);

    mBtn.addEventListener("click",(dets)=>{
        let quantityValue=Number(qBox.value);
        if(quantityValue==1){
            qBox.value=1; 
        }else{
            qBox.value=quantityValue-1;
            quantity=qBox.value;
            let targetMinusBtn=dets.target.parentNode;
            priceDecrease(targetMinusBtn);
            calculateGrandPrice();
        }
    });

    pBtn.addEventListener("click",(dets)=>{
        let quantityValue=Number(qBox.value);
        qBox.value=quantityValue+1;
        quantity=qBox.value;
        let targetPlusBtn=dets.target.parentNode;
        priceIncrease(targetPlusBtn);
        calculateGrandPrice();
    });
}

function priceIncrease(targetPlusBtn){
    let targetParent=targetPlusBtn;
    let mainParent=targetParent.parentNode;
    let price=mainParent.querySelector(".final-price");
    let mainPrice=mainParent.querySelector(".foodPrice");
    let priceText=mainPrice.innerHTML;
    let currentPriceText=price.innerHTML;
    let latestText=perfectPriceConversion(priceText);
    let latestCurrentText=currentPriceConversion(currentPriceText);
    price.innerHTML=`₹${latestText+latestCurrentText}`;
}

function priceDecrease(targetMinusBtn){
    let targetParent=targetMinusBtn;
    let mainParent=targetParent.parentNode;
    let price=mainParent.querySelector(".final-price");
    let mainPrice=mainParent.querySelector(".foodPrice");
    let priceText=mainPrice.innerHTML;
    let currentPriceText=price.innerHTML;
    let latestText=perfectPriceConversion(priceText);
    let latestCurrentText=currentPriceConversion(currentPriceText);
    price.innerHTML=`₹${latestCurrentText-latestText}`;
}

function perfectPriceConversion(priceText){
    var text=priceText;
    var textArray=text.split('');
    var indexToRemove=0;
    textArray.splice(indexToRemove,1);
    var updatedText=textArray.join('');
    var updatedPrice=Number(updatedText);
    return updatedPrice;
}

function currentPriceConversion(currentPriceText){
    var text=currentPriceText;
    var textArray=text.split('');
    var indexToRemove=0;
    textArray.splice(indexToRemove,1);
    var updatedText=textArray.join('');
    var updatedPrice=Number(updatedText);
    return updatedPrice;
}

function totalPrice(){
    let priceArray=[];
    var allPrice=document.querySelectorAll(".final-price");
    allPrice.forEach((price)=>{
        priceArray.push(price);
    });
    return priceArray;
}

function calculateGrandPrice(){
    let allPriceArray=totalPrice();
    let actualPriceString=[];
    allPriceArray.forEach((price)=>{
        actualPriceString.push(price.innerHTML);
    });
    let wordToRemove='₹';
    let actualPriceArray=actualPriceString.map(str=>{
        let wordsArray=str.split('');
        let filteredArray=wordsArray.filter(word=> word!==wordToRemove);
        return filteredArray.join('');
    });
    let prices=actualPriceArray.map(str=> parseInt(str));
    let totalGrandPrice=prices.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue
    },0);
    grandPrice.innerHTML=`₹${totalGrandPrice}`;
    return totalGrandPrice;
}
calculateGrandPrice();

proceedBtn.addEventListener("click",()=>{
    let gPrice=calculateGrandPrice();
    sessionStorage.setItem('totalPrice',JSON.stringify(gPrice));
    window.location.href='delivery-details.html';
});