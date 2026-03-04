window.dataLayer = window.dataLayer || [];

function track(eventName){
dataLayer.push({event:eventName})
}

function goHome(){
track("logo_click")
window.location.href="index.html"
}

function navigate(page){
track("navigation_click")
window.location.href=page
}

function showService(service){
track("service_details_click")
alert("Viewing service details: "+service)
}

function bookService(service){
track("service_booking_click")
alert("Booking started for "+service)
window.location.href="booking.html?service="+service
}

function downloadFile(){
track("brochure_download")

const link=document.createElement("a")
link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
link.download="AmbicaSalonBrochure.pdf"
link.click()
}

function showTab(tab){

track("review_tab_click")

document.getElementById("google").style.display="none"
document.getElementById("insta").style.display="none"
document.getElementById("youtube").style.display="none"

document.getElementById(tab).style.display="block"
}

function videoStart(){
track("video_start")
}

function openImage(name){
track("gallery_image_click")
alert("Viewing gallery: "+name)
}

function loadMoreGallery(){
track("gallery_load_more")
alert("More images loaded")
}

function applyOffer(code){
track("offer_claim")
alert("Offer applied: "+code)
}

function downloadCoupon(){

track("coupon_download")

const link=document.createElement("a")
link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
link.download="SalonCoupon.pdf"
link.click()
}

function submitForm(){

track("form_submit")

let name=document.getElementById("name").value

if(name==""){
track("form_error")
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
