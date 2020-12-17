// //ex01----------------------------
// console.log("Sneha Pujari")

// //ex02--------------------------------
var readlineSync = require("readline-sync")
// var username = readlineSync.question("What is your name? ")

// //ex03 and ex04--------------------
// console.log("Welcome "+username+"!")

// //ex05 and ex06-----------------------------
function log(data) {
  console.log(data)
}
// var answerAge = readlineSync.question("is you age greater than 25?")
// if(answerAge == 'yes')
// {
//   log("You are right!")
// }
// else if(answerAge === "no")
// {
//   log('You are wrong!')
// }

//--------------------------
// var score = 0
// var answer =  readlineSync.question("What is your hometown? ")
// if(answer == 'bokaro'){
//  log("right")
// score = score + 1
// }
// else{
//   log("wrong")
//   score = score - 1
// }
// console.log("Score: ",score)

// ex07---------------------------
// function add(numberOne, numberTwo)
// {
//   var sum = numberOne + numberTwo;
//   return sum;
// }
// log(add(5,7));

//ex09----------------------------------------
// for(var i = 0; i<5; i++){
//   console.log("Sneha Pujari")
// }

// //homework problem
// var str=""
// for(var i=1; i<=5; i++){
//   for(var j=1;j<=i;j++){
//     str = str + "*";
//   }
//   str=str+"\n";
// }
// log(str)

//ex10------------------------------------------
// var groceryList = ["milk", "eggs","flowers","pencil","ballpen"]
// // log(groceryList[0])
// // log(groceryList[2])
// // log(groceryList[4])

//ex11----------------------------------------
// for(var i=0; i<groceryList.length; i++)
// {
//   console.log(groceryList[i])
// }

//ex12------------------------------------------
// var antman = {
//   name: 'superman',
//   strength: 100,
//   power: 'kill',
//   stealth: 0,
//   costumeColor: 'blue'
// }

// var wonderwoman = {
//   name: 'wonder woman',
//   strength: 100000,
//   power: 'fearless',
//   stealth: 100,
//   costumeColor: 'black',
// }

// console.log(antman.name)
// console.log(wonderwoman.name)

// console.log(antman.strength < wonderwoman.strength);

//ex13 and ex14 and ex15------------------------------------------
var readlineSyne = require("readline-sync");
var userName = readlineSyne.question("What is your name?");
var score = 0;
console.log("Welcome " + userName + " to DO YOU KNOW Sneha?");

function play(question, answer) {
  var userAnswer = readlineSyne.question(question);

  if (userAnswer === answer) {
    console.log("Right!");
    score = score + 1;

  } else {
    console.log("Wrong!")
    
  }
  console.log('Current score: ', score);
  console.log("------------------")
}//end func play

var highscore = [{
name: "Sneha",
score: 10
},{
  name: "Smruti",
  score: 9
}];

var questions = [{
  question: "Where do I live? ",
  answer: "Pune"
}, {
  question: "What is my favourite song? ",
  answer: "believer"
},
{
  question: "Which is my favourite colour? ",
  answer: "Blue"
},{
  question: "Who is my favourite author? ",
  answer: "Dan Brown"
}
,{
  question: "Which is the language that I'm learning right now? ",
  answer: "Japanese"
}
,{
  question: "What is my major in? ",
  answer: "Computer Science"
}
,{
  question: "Do I have any pets? ",
  answer: "No"
}
,{
  question: "Do I like dogs? ",
  answer: "Yes"
}
,{
  question: "What am I most scared of? ",
  answer: "Idk either"
}
,{
  question: "Which is my Favourite book? ",
  answer: "Inferno"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Check out the high scores: ");
console.log(highscore)
