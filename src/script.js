
function generateHaiku(event) {
  event.preventDefault();
  
  new Typewriter("#haiku", {
    strings: "haiku",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let haikuFormElement = document.querySelector("#form");
haikuFormElement.addEventListener("submit", generateHaiku);