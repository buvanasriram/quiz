class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
     //BS question.display();
      form = new Form();
      form.display();
    }
  }
//BS
  ask() {
    form.hide();
   // question = new Question();
    question.display();

  }

  play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("Results of the Quiz Contest:",130,230); //BS

      for(var plr in allContestants){
       /* BS debugger;
        var correctAns = ansbank[curQNo];//BS
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
*/
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].score, 250,display_Answers)//BS
      }
    }
  }
}
