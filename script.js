window.dataLayer = window.dataLayer || [];

/* =================================
   GENERIC TRACK EVENT FUNCTION
================================= */

function trackEvent(eventName, element, page){

  window.dataLayer.push({
    event: eventName,
    element_name: element,
    page_name: page
  });

  console.log("Event:",eventName,"Element:",element,"Page:",page);
}



/* =================================
   NAVIGATION FUNCTIONS
================================= */

function goHome(){
  trackEvent("navigation_click","logo","header");
  window.location.href="index.html";
}

function openContact(){
  trackEvent("navigation_click","contact_page","header");
  window.location.href="contact.html";
}

function openBooking(){
  trackEvent("cta_click","book_appointment_header","header");
  window.location.href="book.html";
}



/* =================================
   SERVICES PAGE
================================= */

function showService(service){

  trackEvent("service_details",service,"services");

  alert("Viewing service details: " + service);
}


function bookService(service){

  trackEvent("cta_click","book_service","services");

  alert("Booking " + service);

  window.location.href="book.html?service=" + service;
}



/* =================================
   FILE DOWNLOAD
================================= */

function downloadFile(){

  trackEvent("download_click","service_brochure","services");

  const link=document.createElement("a");

  link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  link.download="AmbicaSalonBrochure.pdf";

  link.click();
}



/* =================================
   REVIEW TABS (HOME PAGE)
================================= */

function showTab(tab){

  trackEvent("tab_click",tab,"home");

  const tabs=["google","insta","youtube"];

  tabs.forEach(function(t){

    const el=document.getElementById(t);

    if(el){
      el.style.display="none";
    }

  });

  const active=document.getElementById(tab);

  if(active){
    active.style.display="block";
  }

}



/* =================================
   VIDEO EVENTS
================================= */

function videoStart(){

  trackEvent("video_start","salon_experience_video","home");

}



/* =================================
   GALLERY PAGE
================================= */

function openImage(name){

  trackEvent("gallery_click",name,"gallery");

  alert("Viewing gallery: " + name);

}


function loadMoreGallery(){

  trackEvent("gallery_load","load_more_images","gallery");

  alert("More images loaded");

}



/* =================================
   OFFERS PAGE
================================= */

function applyOffer(code){

  trackEvent("offer_claim",code,"offers");

  alert("Offer applied: " + code);

}



function downloadCoupon(){

  trackEvent("download_click","offer_coupon","offers");

  const link=document.createElement("a");

  link.href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  link.download="SalonCoupon.pdf";

  link.click();

}



/* =================================
   BOOK APPOINTMENT FORM
================================= */

function submitForm(){

  trackEvent("form_submit","appointment_form","book");

  let name=document.getElementById("name");

  if(name && name.value.trim()===""){

    alert("Please enter your name");

    return false;

  }

  alert("Appointment booked successfully!");

  return false;

}



/* =================================
   AUTO FILL SERVICE FROM URL
================================= */

window.onload=function(){

  const params=new URLSearchParams(window.location.search);

  const service=params.get("service");

  const dropdown=document.getElementById("service");

  if(service && dropdown){

    dropdown.value=service;

  }

};
