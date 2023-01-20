/* Prevents validity highlighting until input is touched */
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("blur", touchInput);
});

function touchInput() {
  this.classList.add("touched-input")
}

/* Checking if passwords match */
const form = document.querySelector("#account_form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

form.addEventListener("submit", checkPasswordMatch);

function checkPasswordMatch(e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    confirmPassword.value = "";
    confirmPassword.setCustomValidity("Passwords do not match.");
    confirmPassword.reportValidity();
    confirmPassword.addEventListener("keydown", removeErrorMessage);
  }
}

function removeErrorMessage() {
  confirmPassword.blur();
  confirmPassword.focus();
  confirmPassword.setCustomValidity("");
  confirmPassword.removeEventListener("keydown", removeErrorMessage);
}