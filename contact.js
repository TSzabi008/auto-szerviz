const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;

    message.textContent = "Thank you, " + name + "! Your request has been checked.";

    form.reset();

});