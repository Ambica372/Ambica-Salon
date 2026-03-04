function goHome(){
window.location.href="index.html"
}

function navigate(page){
window.location.href=page
}

function showService(service){
alert("Viewing service details: "+service)
}

function bookService(service){
alert("Booking started for "+service)
window.location.href="contact.html?service="+service
}

function downloadFile(){
alert("Downloading brochure")
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

alert("Showing "+tab+" reviews")
}

function videoStart(){
alert("Video started")
}

function openImage(name){
alert("Viewing gallery: "+name)
}

function loadMoreGallery(){
alert("More images loaded")
}

function applyOffer(code){
alert("Offer applied: "+code)
}

function downloadCoupon(){
alert("Downloading coupon")

const link=document.createElement("a")
link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
link.download="SalonCoupon.pdf"
link.click()
}

function submitForm(){

let name=document.getElementById("name").value

if(name==""){
alert("Enter your name")
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
