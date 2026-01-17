const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        message.innerText = "All fields are required";
        message.style.color = "red";
    } else {
        message.innerText = "Registration Successful";
        message.style.color = "green";
        form.reset();
    }
});