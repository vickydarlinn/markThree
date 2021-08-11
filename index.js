const readlineSync = require('readline-sync');
const chalk = require('chalk');

const userName=readlineSync.question(chalk.cyan("What is your name?\n"));
function space(){
  console.log("--------------------%%%%%%%%%%--------------------");
}
space();
console.log(chalk.cyan(`Hi ${userName}, I am vicky! Welcome in my cartoon quiz game! \nIn this quiz, you will get 4 options. Choose the correct option and you will awarded by one point!`));
space();
// questions for quiz.
const quiz=[
  {
    question:"Who is Doraemon's best friend?\n1.Nobita\n2.Jian\n3.Sunio\n4.Sizuka\n",
    answer:1
  },
  {
    question:"What does Doraemon love to eat?\n1.choclates\n2.Cookies\n3.Doracakes\n4.None of these\n",
    answer:3
  },
  {
    question:"What is the full name of Shinchan?\n1.Shin Chan Nohara\n2.Sinchan Pratap\n3.Sinchan Chaudhary\n4.Suzuki Nuhara\n",
    answer:1
  },
  {
    question:"What is the name of Shinchan's favourite action hero?\n1.James Bond\n2.Sailor Moon\n3.Action Kamen\n4.Captian America\n",
    answer:3
  },
  {
    question:"Who created Tom and Jerry?\n1.Universal\n2.Walt Disney\n3.Warner Bros\n4.Hanna and Barbera\n",
    answer:4
  },
];
//  checking of answers
let score=0;
function checker(question,answer){
  let userAnswer= Number(readlineSync.question(question));
  if(userAnswer===answer){
    score++;
    console.log("You are right.\n");
  }
  else{
    score--;
    console.log(`You are wrong. \nCorrect answer is option ${answer}.`)
  }
  console.log(`your current score is ${score}.`)
  space();
}
function starter(){
  for(let i=0;i<quiz.length;i++){
    let currentQuestion=quiz[i];
    checker(currentQuestion.question,currentQuestion.answer);
  }
}
function finished(){
  if(score===5){
    console.log(chalk.green("You are awsmmm...You got full marks"));
  }
  else{
    console.log(chalk.green("you got "+score+" marks out of 5"));
  }
}
starter();
finished();

