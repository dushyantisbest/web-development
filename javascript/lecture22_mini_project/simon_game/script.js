// get all the elements

heading = document.querySelector("h3");
one = document.querySelector(".one");
two = document.querySelector(".two");
three = document.querySelector(".three");
four = document.querySelector(".four");

// get the key press to start the game

document.addEventListener("keydown", function () {
  let running = true;
  let level = 0;
  let sequence = [];
  let checkSequence = [];

  while (running) {
    level++;

    heading.innerHTML = "level" + level;
    console.log("key pressed");

    // get random number between 1 to 4
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);

    // make a array to register the sequence
    sequence.push(randomNumber);

    //   flash a box with the number
    boxFlash(randomNumber);

    // listen for clicks and add then in checkSequence
    one.addEventListener("click", function () {
      boxFlash(1);
      checkSequence.push(1);
    });
    two.addEventListener("click", function () {
      boxFlash(2);
      checkSequence.push(2);
    });
    three.addEventListener("click", function () {
      boxFlash(3);
      checkSequence.push(3);
    });
    four.addEventListener("click", function () {
      boxFlash(4);
      checkSequence.push(4);
    });

    //end the game if seqence don't match
    if (!(JSON.stringify(checkSequence) == JSON.stringify(sequence))) {
      running = false;
      console.log("False");
    }
    console.log(sequence);
    console.log(checkSequence);
  }
});

// box flash function
function boxFlash(number) {
  if (number == 1) {
    one.style.backgroundColor = "white";
    setTimeout(() => {
      one.style.backgroundColor = "rgb(230, 128, 51)";
    }, 500);
  } else if (number == 2) {
    two.style.backgroundColor = "white";
    setTimeout(() => {
      two.style.backgroundColor = "rgb(44, 153, 211)";
    }, 500);
  } else if (number == 3) {
    three.style.backgroundColor = "white";
    setTimeout(() => {
      three.style.backgroundColor = "rgb(90, 200, 65)";
    }, 500);
  } else if (number == 4) {
    four.style.backgroundColor = "white";
    setTimeout(() => {
      four.style.backgroundColor = "violet";
    }, 500);
  } else {
    console.log("Number is not between 1-4");
  }
}

// register if the user presses the correct box

// if the user press wrong box get to the key press state i.e. level 1
