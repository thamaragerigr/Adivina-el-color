//valor rgb generado al azar con Math.random y Math.round
function makeColourValue() {
  return Math.round(Math.random() * 255);
}

//cambio de color de los botones a valores rgb
function setButtonColour(button, red, green, blue) {
  button.setAttribute(
    "style",
    "background-color: rgb(" + red + "," + green + "," + blue + ");"
  );
}

//nombramiento de variables
const buttons = document.getElementsByClassName("colourButton");
const heading = document.getElementById("colourValue");
const answerMessage = document.getElementById("answer");

//funcion general del juego
function startGame() {
  var answerButton = Math.round(Math.random() * (buttons.length - 1));
  //loop/generador de valores random
  for (var i = 0; i < buttons.length; i++) {
    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }

    buttons[i].addEventListener("click", function() {
      if (this === buttons[answerButton]) {
        answerMessage.innerHTML = "¡Correcto!";
        document.body.style.background = " rgb(251, 255, 0)";
        confetti.start();
      } else {
        answerMessage.innerHTML = "¡Respuesta equivocada! ¡Inténtalo de nuevo!";
        document.body.style.background = "white";
      }
    });
  }
}

function reset() {
    //limpiar mensaje de respuesta correcta/incorrecta
    answerMessage.innerHTML = "";
    document.body.style.background = "white";
    confetti.stop();
}

//boton de reinicio de juego
document.getElementById("resetButton").addEventListener("click", startGame);
document.getElementById("resetButton").addEventListener("click", resetear);


startGame();
