function goHome(){
window.location.href="index.html"
}

function bookService(service){
window.location.href="contact.html?service="+service
}

function showService(name){
alert(name+" service details opened")
}

function downloadFile(){

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
alert("Video started")
}

function openImage(name){
alert("Opening gallery image: "+name)
}

function applyOffer(code){
alert("Coupon applied: "+code)
}

function submitForm(){

let name=document.getElementById("name").value

if(name==""){
alert("Please enter your name")
return false
}

alert("Booking submitted successfully!")

}

window.onload=function(){

const params=new URLSearchParams(window.location.search)

const service=params.get("service")

if(service){
document.getElementById("service").value=service
}

}
