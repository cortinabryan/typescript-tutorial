const button = document.querySelector("button")!;

function clickHandler() {
  console.log("CLicked!" + message);
}

// a comment
if (button) {
  button?.addEventListener("click", clickHandler.bind(null, "you're welcome"));
}
