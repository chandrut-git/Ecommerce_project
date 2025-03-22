var snav=document.querySelector(".side_nav")

function closenav(){
    snav.style.left="-60%";
}
function opennav(){
    snav.style.left="0";
}


document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".fo");

    if (!form) {
        console.error("❌ Form element not found! Check if `conatct.html` has `<form class='fo'>`.");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevents page refresh

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("msg").value;

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            const result = await response.json();
            if (result.success) {
                console.log("✅ Form submitted successfully! Showing Thank You Message.");
            
                let thankYouMsg = document.getElementById("thnx_msg");
                let formContainer = document.getElementById("form");
            
                if (thankYouMsg) {
                    thankYouMsg.style.display = "block";  // ✅ Show message
                    thankYouMsg.style.visibility = "visible"; // ✅ Ensure it is visible
                } else {
                    console.error("❌ 'Thank You' message element not found!");
                }
            
                if (formContainer) {
                    formContainer.style.display = "none"; // ✅ Hide form
                } else {
                    console.error("❌ Form container not found!");
                }
            }
        } catch (error) {
            console.error("❌ Error:", error);
            alert("Server not responding.");
        }
    });
});
