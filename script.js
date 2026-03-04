window.dataLayer = window.dataLayer || [];

/* Generic event tracker */
function trackEvent(eventName, element, page){
  window.dataLayer.push({
    event: eventName,
    element_name: element,
    page_name: page
  });
  console.log("Event:", eventName, "Element:", element, "Page:", page);
}

/* Navigation */
function goHome(){
window.location.href="index.html"
}

function openContact(){
window.location.href="contact.html"
}

function openBooking(){
window.location.href="book.html"
}

function showService(service){
alert("Viewing service details: "+service)
}

function bookService(service){
alert("Booking "+service)
window.location.href="book.html?service="+service
}
/* File download */
function downloadFile(){
  trackEvent("file_download","service_brochure","services");

  const link=document.createElement("a");
  link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  link.download="AmbicaSalonBrochure.pdf";
  link.click();
}

/* Review Tabs */
function showTab(tab){
  trackEvent("tab_click","review_tab",tab);

  const tabs=["google","insta","youtube"];
  tabs.forEach(function(t){
    const el=document.getElementById(t);
    if(el){ el.style.display="none"; }
  });

  const active=document.getElementById(tab);
  if(active){ active.style.display="block"; }
}

/* Video */
function videoStart(){
  trackEvent("video_start","salon_video","home");
}

/* Gallery */
function openImage(name){
  trackEvent("gallery_view","gallery_image",name);
  alert("Viewing gallery: " + name);
}

function loadMoreGallery(){
  trackEvent("gallery_load","load_more","gallery");
  alert("More images loaded");
}

/* Offers */
function applyOffer(code){
  trackEvent("offer_claim","claim_offer",code);
  alert("Offer applied: " + code);
}

function downloadCoupon(){
  trackEvent("coupon_download","offer_coupon","offers");

  const link=document.createElement("a");
  link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  link.download="SalonCoupon.pdf";
  link.click();
}

/* Appointment Form */
function submitForm(){
  trackEvent("form_submit","appointment_form","appointment");

  let name=document.getElementById("name");
  if(name && name.value.trim()===""){
    alert("Please enter your name");
    return false;
  }

  alert("Appointment booked successfully!");
  return false;
}

/* Auto-fill service if passed from URL */
window.onload=function(){

  const params=new URLSearchParams(window.location.search);
  const service=params.get("service");

  const serviceDropdown=document.getElementById("service");

  if(service && serviceDropdown){
    serviceDropdown.value=service;
  }

};
