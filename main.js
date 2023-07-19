let userName = "";

//below is ternary expression for checking value of userName:
userName? console.log("Hello, " + userName) : console.log("Hello!");

//variable to store questions from user:
let userQuestion = "What is my future?";

//prints userQuestion:
console.log("your question is: " + userQuestion);

//random # generator using Math object from 0 - 7:
let randomNumber = Math.floor(Math.random() * 8);

//we assign this variable an answer based on the logic below. #'s have an assigned responnsse/answer:
let eightBall = "";

if (randomNumber === 0)
{
  eightBall = "It is certain";
}
else if (randomNumber === 1)
{
  eightBall = "It is decidedly so";
}
else if (randomNumber === 2)
{
  eightBall = "Reply hazy try again";
}
else if (randomNumber === 3)
{
  eightBall = "Cannot predict now";
}
else if (randomNumber === 4)
{
  eightBall = "Do not count on it";
}
else if (randomNumber === 5)
{
  eightBall = "My sources say no";
}
else if (randomNumber === 6)
{
  eightBall = "Outlook not so bad";
}
else if (randomNumber === 7)
{
  eightBall = "Signs point to yes";
}
else
{
console.log("our system is down :(");
}

//Answer to user questions printed below:
console.log("we think " + eightBall);

//Would we use node.js on terminal to interact w/ user?
//Used: Ternary expressions, string concatenation & control flow.
