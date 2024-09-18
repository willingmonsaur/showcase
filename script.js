const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const video = document.getElementById("video");
const paragraph = document.getElementById("paragraph");
const popup = document.getElementById("popup");
const popupYesButton = document.getElementById("popup-yes");
const popupNoButton = document.getElementById("popup-no");
const popup2 = document.getElementById("popup2");
const popup2Button = document.getElementById("popup2-button");

passwordInput.addEventListener("keyup", (event) => {
const enteredPassword = event.target.value;
if (enteredPassword === "20072109") {
message.textContent = "";
document.body.style.backgroundColor = "aquamarine";
passwordInput.style.display = "none";
video.style.display = "block";
paragraph.style.display = "block"; // Show paragraph only after correct password
setTimeout(() => {
popup.classList.remove("hidden");
}, 30000);
} else {
message.textContent = "Wrong Password!";
}
});

popupYesButton.addEventListener("click", () => {
popup.classList.add("hidden");
popup2.classList.remove("hidden");
popupYesButton.removeEventListener("click", this);
});

popupNoButton.addEventListener("click", () => {
alert("haha funny");
});

popup2Button.addEventListener("click", () => {
// Remove the second pop-up after clicking the button
popup2.classList.add("hidden");
// You can add a success message here if desired (optional)
// alert("Success!");
});