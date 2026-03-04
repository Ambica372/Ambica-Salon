function goHome(){
window.location.href="index.html"
}

function bookService(service){

alert("Booking for "+service+" selected")

window.location.href="contact.html?service="+encodeURIComponent(service)

}

function showService(name){

alert(name+" service details page opened")

}

function downloadFile(){

alert("Downloading Ambica Salon brochure")

const link=document.createElement("a")

link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

link.download="AmbicaSalonBrochure.pdf"

link.click()

}

function showTab(tab){

document.getElementById("google").style.display="none"
document.getElementById("insta").style.display="none"
document.getElementById("youtube").style.display="none"

document.getElementById(tab).style.display="block"

}

function videoStart(){

console.log("Video Started Event")

alert("Video started")

}

function openImage(name){

alert("Opening gallery preview: "+name)

}

function loadMoreGallery(){

alert("Loading more gallery photos")

}

function applyOffer(code){

alert("Offer applied: "+code)

}

function downloadCoupon(){

alert("Coupon downloaded")

const link=document.createElement("a")

link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

link.download="AmbicaSalonCoupon.pdf"

link.click()

}

function submitForm(){

let name=document.getElementById("name").value

if(name==""){
alert("Please enter your name")
return false
}

alert("Appointment booked successfully!")

}

window.onload=function(){

const params=new URLSearchParams(window.location.search)

const service=params.get("service")

if(service && document.getElementById("service")){
document.getElementById("service").value=service
}

}
