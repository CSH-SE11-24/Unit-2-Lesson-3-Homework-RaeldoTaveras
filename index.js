// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let game = "hangman"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let user = prompt("guess a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (game.includes(user)) {
console.log("game")
}

// Prompt the user to guess the word 
let user1 = prompt("guess the word")

// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if(game==user1){
  console.log("nice")
}
else{
  console.log("you did not get it")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while(game!== user1){
let game = prompt("guess a letter")
}


// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

