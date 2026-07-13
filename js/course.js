//=========================
// Tabs
//=========================

const tabs = document.querySelectorAll(".tab-btn");

const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(btn=>btn.classList.remove("active"));

        contents.forEach(content=>content.classList.remove("active"));

        tab.classList.add("active");

        document
        .getElementById(tab.dataset.tab)
        .classList.add("active");

    });

});


//=========================
// Apply Now Button
//=========================

const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(button=>{

    button.addEventListener("click",function(){

        const enquiryButton = document.getElementById("openEnquiry");

        if(enquiryButton){

            enquiryButton.click();

        }

    });

});