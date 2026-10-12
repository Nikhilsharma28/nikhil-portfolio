///////Humbuger Funcationlity/////
let humburger = document.querySelector(".humburger");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-xmark");
let navLinks= document.querySelector(".nav-links ");
let navItems = document.querySelectorAll(".nav-links a");


open.addEventListener("click", function(){
    open.style.display="none";
    close.style.display="block";

    navLinks.classList.add("open");
});
close.addEventListener("click",function(){
    open.style.display="block";
    close.style.display="none";

    navLinks.classList.remove("open");
});

navItems.forEach(function(links){
    links.addEventListener("click", function(){
        navLinks.classList.remove("open");

        close.style.display="none";
        open.style.display="block";
    });
});

////////form functionality//////////


let contactform = document.querySelector(".right form");
let formStatus = document.querySelector("#formStatus");

contactform.addEventListener("submit", async function(event) {
    event.preventDefault();

    formStatus.textContent = "Please wait, your message is on its way...";

    try {
        let response = await fetch(contactform.action, {
            method: "POST",
            body: new FormData(contactform),
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            formStatus.textContent =
                "Thank you for reaching out! I’ll get back to you soon.";

            contactform.reset();

            setTimeout(function() {
                formStatus.textContent = "";
            }, 10000);

        } else {
            formStatus.textContent =
                "Message could not be sent. Please try again.";
        }

    } catch (error) {
        formStatus.textContent =
            "Network error. Please try again.";

        console.error("Form submission error:", error);
    }
});
