window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, element, page){

dataLayer.push({
event:eventName,
element_name:element,
page_name:page
})

console.log(eventName,element,page)

}

/* NAVIGATION */

function goHome(){

trackEvent("navigation_click","logo","global")

window.location.href="index.html"

}

function navigate(page){

trackEvent("navigation_click","menu_navigation",page)

window.location.href=page

}

/* SERVICES */

function showService(service){

trackEvent("service_view","service_details",service)

alert("Viewing service details: "+service)

}

function bookService(service){

trackEvent("service_booking","book_service",service)

alert("Booking started for "+service)

window.location.href="contact.html?service="+service

}

/* DOWNLOAD */

function downloadFile(){

trackEvent("file_download","service_brochure","services")

alert("Downloading brochure")

const link=document.createElement("a")

link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

link.download="AmbicaSalonBrochure.pdf"

link.click()

}

/* TABS */

function showTab(tab){

trackEvent("tab_click","review_tab",tab)

document.getElementById("google").style.display="none"
document.getElementById("insta").style.display="none"
document.getElementById("youtube").style.display="none"

document.getElementById(tab).style.display="block"

}

/* VIDEO */

function videoStart(){

trackEvent("video_start","salon_video","home")

alert("Video started")

}

/* GALLERY */

function openImage(name){

trackEvent("gallery_view","gallery_image",name)

alert("Viewing gallery: "+name)

}

function loadMoreGallery(){

trackEvent("gallery_load","load_more","gallery")

alert("More images loaded")

}

/* OFFERS */

function applyOffer(code){

trackEvent("offer_claim","claim_offer",code)

alert("Offer applied: "+code)

}

function downloadCoupon(){

trackEvent("coupon_download","offer_coupon","offers")

alert("Downloading coupon")

const link=document.createElement("a")

link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

link.download="SalonCoupon.pdf"

link.click()

}

/* FORM */

function submitForm(){

trackEvent("form_submit","appointment_form","contact")

let name=document.getElementById("name").value

if(name==""){
alert("Enter your name")
return false
}

alert("Appointment booked successfully!")

}

/* PREFILL SERVICE */

window.onload=function(){

const params=new URLSearchParams(window.location.search)

const service=params.get("service")

if(service && document.getElementById("service")){
document.getElementById("service").value=service
}

}
