const loginForm = document.getElementById("loginForm");
const result = document.getElementById("result");
const tryAgain = document.getElementById("tryAgain");

loginForm.addEventListener("submit", function (event) {

    // Prevent any real form submission
    event.preventDefault();

    // IMPORTANT:
    // We intentionally do NOT read, store,
    // send, or log the password.

    loginForm.style.display = "none";
    result.classList.remove("hidden");
});

tryAgain.addEventListener("click", function () {

    result.classList.add("hidden");
    loginForm.reset();
    loginForm.style.display = "block";

});