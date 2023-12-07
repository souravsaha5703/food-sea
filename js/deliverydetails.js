var cursor=document.getElementById("cursor");
var cname=document.getElementById("name");
var phNumber=document.getElementById("phnumber");
var pincode=document.getElementById("pincode");
var city=document.getElementById("city");
var address=document.getElementById("address");
var proceedBtn=document.getElementById("proceed");

document.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
    cursor.style.transition="all 0.3 ease-in";
});

proceedBtn.addEventListener("click",()=>{
    if(!cname.value=='' || !phNumber.value=='' || !pincode.value=='' || !city.value=='' || !address.value==''){
       const deliveryDetails={
        customerName:cname.value,
        phoneNumber:phNumber.value,
        pincode:pincode.value,
        city:city.value,
        address:address.value
       }
       let details=JSON.stringify(deliveryDetails);
       localStorage.setItem('deliveryDetails',details);
       window.location.href="index.html";
    }else{
        alert("Please Fill All The Details");
    }
});