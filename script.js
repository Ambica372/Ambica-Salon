function goHome(){
window.location.href="index.html"
}

function showService(name){
alert(name + " details page would open.")
}

function claimOffer(offer){
alert("Offer applied: " + offer)
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

function submitForm(){

let name=document.getElementById("name").value

if(name==""){
alert("Please enter name")
return false
}

alert("Appointment submitted successfully!")

}

function viewGallery(img){
alert("Viewing image: "+img)
}
