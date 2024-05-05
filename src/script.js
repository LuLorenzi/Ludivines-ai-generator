function displayHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateHaiku(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fb7f9ao5305aa93b380c3d2e8366342t";
  let context =
    `You are a haïku expert. Your mission is to write a great haïku in basic HTML and separate each line with a <br />. Include only your response. Sign the poem with "From the mind of the artificial" in <strong> at the bottom. Make sure to use the user instructions`;
  let prompt = `User intructions: Generate a haïku about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#form");
haikuFormElement.addEventListener("submit", generateHaiku);
