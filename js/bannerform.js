document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("admissionForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const mobile = form.querySelector("#mobile").value.trim();
        const course = form.querySelector("#course").value.trim();

        if (name === "") {
            alert("Please Enter Your Name");
            return;
        }

        if (email === "") {
            alert("Please Enter Your Email");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please Enter Valid Email");
            return;
        }

        if (mobile === "") {
            alert("Please Enter Your Mobile Number");
            return;
        }

        const mobilePattern = /^[6-9]\d{9}$/;

        if (!mobilePattern.test(mobile)) {
            alert("Please Enter Valid Mobile Number");
            return;
        }

        const whatsappNumber = "919876543210";

        const message =
`🎓 *New Admission Enquiry*

👤 Name : ${name}

📧 Email : ${email}

📱 Mobile : ${mobile}

📚 Course : ${course}`;

        const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

        form.reset();

    });

});