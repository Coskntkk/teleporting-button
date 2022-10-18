// Location of button
let loc = 0;
// Button and slots
let btn = document.querySelector("#btn");
let left = document.querySelector("#btn1");
let middle = document.querySelector("#btn2");
let right = document.querySelector("#btn3");
// Input elements
let email = document.querySelector("#email");
let password = document.querySelector("#password");

// Event listeners
const checkEmail = () => {
    let isEmail = email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    isEmail
        ? document.querySelector("#emailHelp").style.display = "none"
        : document.querySelector("#emailHelp").style.display = "block";
    return isEmail;
};
const checkPassword = () => {
    let isPassword = password.value.length >= 6;
    isPassword
        ? document.querySelector("#passwordHelp").style.display = "none"
        : document.querySelector("#passwordHelp").style.display = "block";
    return isPassword;
}
// Check if email and password are valid and move button if not
const checkButton = () => {
    // Check if email and password are valid
    let isEmail = checkEmail();
    // Check if password input is at least 6 characters
    let isPassword = checkPassword();
    // If both email and password are invalid
    if (!isEmail || !isPassword) {
        if (loc === 0) {
            left.removeChild(btn);
            let places = [middle, right];
            let locs = [1, 2];
            let rand = Math.floor(Math.random() * 2);
            places[rand].appendChild(btn);
            loc = locs[rand];
        } else if (loc === 1) {
            middle.removeChild(btn);
            let places = [left, right];
            let locs = [0, 2];
            let rand = Math.floor(Math.random() * 2);
            places[rand].appendChild(btn);
            loc = locs[rand];
        } else if (loc === 2) {
            right.removeChild(btn);
            let places = [left, middle];
            let locs = [0, 1];
            let rand = Math.floor(Math.random() * 2);
            places[rand].appendChild(btn);
            loc = locs[rand];
        }
    }
};
// Check if email or password input is valid
email.addEventListener("input", checkEmail);
password.addEventListener("input", checkPassword);
btn.addEventListener("click", () => {
    document.querySelector("h1").innerText = "Success!";
    document.querySelector("form").style.display = "none";
});