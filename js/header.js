// ===============================
// Header + Popup HTML
// ===============================

document.addEventListener("DOMContentLoaded", () => {

document.body.insertAdjacentHTML("afterbegin",`

<header class="header">

<div class="logo">
<a href="index.html">
<img src="img/logo.png" alt="Online Manipal">
</a>
</div>

<div class="header-title">
360 DEGREE OF SUCCESS
</div>

<a href="tel:+918529077266" class="call-btn">
+91 8529077266
</a>

</header>


<div class="enquiry-btn" id="openEnquiry">

Enquire Now

</div>


<div class="popup-overlay" id="popupOverlay">

<div class="popup">

<h2>Admission Enquiry</h2>

<form id="enquiryForm">

<input
type="text"
id="name"
placeholder="Enter Name *"
required>

<input
type="email"
id="email"
placeholder="Enter Email Address *"
required>

<input
type="tel"
id="mobile"
placeholder="Enter Mobile Number *"
maxlength="10"
required>

<input
type="text"
id="course"
placeholder="Enter Course Name">

<div class="popup-buttons">

<button
type="submit"
class="submit-btn">

Submit

</button>

<button
type="button"
class="close-btn"
id="closePopup">

Close

</button>

</div>

</form>

</div>

</div>

`);


// ===============================
// Open Popup
// ===============================

const openBtn=document.getElementById("openEnquiry");

const popup=document.getElementById("popupOverlay");

const closeBtn=document.getElementById("closePopup");

openBtn.addEventListener("click",()=>{

popup.classList.add("active");

document.body.style.overflow="hidden";

});


// ===============================
// Close Popup
// ===============================

closeBtn.addEventListener("click",()=>{

popup.classList.remove("active");

document.body.style.overflow="auto";

});


// ===============================
// Outside Click
// ===============================

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("active");

document.body.style.overflow="auto";

}

});


// ===============================
// ESC Close
// ===============================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.classList.remove("active");

document.body.style.overflow="auto";

}

});

});