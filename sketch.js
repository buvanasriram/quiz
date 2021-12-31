var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var form, question, contestant, quiz;
//BS
var qbank = ["q1", "q2", "q3","q4", "q5", "q6","q7"];
var optionA = ["a", "a","a", "a","a", "a","a"];
var optionB = ["a", "a","a", "a","a", "a","a"];
var optionC = ["a", "a","a", "a","a", "a","a"];
var optionD = ["a", "a","a", "a","a", "a","a"];
var ansbank = ["a", "b","c", "d","a", "a","a"];
var curQNo = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.ask();
  }
  if(curQNo==qbank.length){ //BS
    clear();
    quiz.play();
  }
}
