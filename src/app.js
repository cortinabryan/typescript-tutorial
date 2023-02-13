"use strict";
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked! " + message);
}
// a comment
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're Welcome!"));
}
