var readlineSync = require ('readline-sync');
const chalk = require ('chalk');
var score = 0;

var topScore = [{
  name: "Anish",
  score: 4,
},{
  name: "Dilip",
  score: 3,
},{
  name: "Shreya",
  score: 3,
}]

var questions = [{
  question: "What is Adi's Mother Tongue: ",
  answer: "malayalam"
},{
  question: "Where was Adi Born: ",
  answer: "kozhikode" 
},{
  question: "When is Adi's Birthday: ",
  answer: "17-05-2000"
},{
  question: "How many Languages does Adi speak: ",
  answer: "6"
},{
  question: "What is Adi's favourite IPL Team: ",
  answer: "rcb"
},{
  question: "Does Adi like Travelling: ",
  answer: "yes"
},{
  question: "Where does Adi study?: ",
  answer: "GITAM"
}]

console.log("Hey! Welcome to the quiz")
var userName = readlineSync.question ("What is your Name? ")
console.log("Thank you " + userName + ", Lets begin the Quiz!")
console.log(chalk.cyan.underline("Answer the below questions and you will get a score at the end :\n"))

function play (question, answer)
{
  var userAns= readlineSync.question(question);
    if(userAns ==  answer)
    {
      console.log(chalk.green("\n Right! \n"))
      score = score + 1;
     
    }
    else
    {
      console.log(chalk.red("\n Wrong! \n"))
    }
  console.log(chalk.blue.bold("Your current score is : " + score))
   console.log("-------------------")

  return chalk.black.bgCyan("\n Thank you for taking this quiz.") + chalk.bgYellow( "\n Your Total score is : "+ score);
}

for( var i=0; i<questions.length; i++)
{
currentQues=questions[i];
play(currentQues.question, currentQues.answer);
}
console.log(topScore)