// ===============================
// enquiry.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("enquiryForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        //==============================
        // Get Values
        //==============================

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const course = document.getElementById("course").value.trim();

        //==============================
        // Validation
        //==============================

        if (name === "") {
            alert("Please Enter Your Name");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please Enter Valid Email");
            return;
        }

        const mobilePattern = /^[6-9]\d{9}$/;

        if (!mobilePattern.test(mobile)) {
            alert("Please Enter Valid Mobile Number");
            return;
        }

        //==============================
        // WhatsApp Message
        //==============================

        const message =
`*New Admission Enquiry*

👤 Name : ${name}

📧 Email : ${email}

📱 Mobile : ${mobile}

🎓 Course : ${course}`;

        //==============================
        // WhatsApp Number
        //==============================

        const whatsappNumber = "918529077266";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

        //==============================
        // Reset Form
        //==============================

        form.reset();

        //==============================
        // Close Popup
        //==============================

        const popup =
            document.getElementById("popupOverlay");

        popup.classList.remove("active");

        document.body.style.overflow = "auto";

    });

});