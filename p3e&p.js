
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  // Regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&^]{8,}$/;

  let emailValid = emailRegex.test(email.value);
  let passwordValid = passwordRegex.test(password.value);

  let isValid = true;

  // Email validation
  if (!emailValid) {
    document.querySelector("#emailError").textContent =
      "Email is incorrect";
    document.querySelector("#emailError").style.display = "block";
    isValid = false;
  }

  // Password validation
  if (!passwordValid) {
    document.querySelector("#passwordError").textContent =
      "Password is incorrect";
    document.querySelector("#passwordError").style.display = "block";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.querySelector("#resultMessage").textContent =
      "Everything is correct";
  }
});
