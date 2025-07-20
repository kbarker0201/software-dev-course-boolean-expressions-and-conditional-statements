/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

const isTame = true; 
// const scaredOfHorses = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  console.log("After passing through the mountains, you come upon a wild horse.");
  const choiceTwo = readline.question("Do you try to 'tame' it or 'continue' on without it? ");
    if (choiceTwo === "tame" && isTame) {
      console.log("You manage to tame the horse and you can now ride it.");
      } else if (choiceTwo === "tame" && !isTame) {
        console.log("The horse rears up, spooked, and injurs you");
      }
      else console.log("You continue on without the horse.");
    }
 else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}
/*
const isTame = true; 
const scaredOfHorses = true;

if (choice === mountains && hasTorch) {
  console.log("After passing through the mountains, you come upon a wild horse.");
  const choiceTwo = readline.question("Do you try to 'tame' it or 'continue' on without it?");

  if (choiceTwo === "tame" && isTame) {
    console.log("You manage to tame the horse and you can now ride it.");
  } else if (choiceTwo === "tame" && !isTame) {
    console.log("The horse rears up, spooked, and injurs you");
  } else if (choiceTwo === "continue" || scaredOfHorses) {
    console.log("You are scared of horses and quiety continue on.");
  } else {
    console.log("You keep going - no time for horses.");
  }
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/