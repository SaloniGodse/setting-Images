class Game {
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
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if(playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
car1 = createSprite(150,200);
car1.addImage(c1Image);
car2 = createSprite(350,200);
car2.addImage(c2Image);
car3 = createSprite(550,200);
car3.addImage(c3Image);
car4 = createSprite(750,200);
car4.addImage(c4Image);
cars = [car1,car2,car3,car4];
  }

play() {
  form.hide();
  textSize(20);
  text("and the game Begins",200,100);
  Player.getDetails();
  if(details!== undefined){
    background("#c68767");
    image(raceTrack, 0, -displayHeight*4, displayWidth, displayHeight*5);
    var displayP = 200;
    var index = 0;
    var x = 150;
    var y ;
    for(var plr in details) {
      index = index + 1;
      x = x + 200;
      y = displayHeight - details[plr].distance;
      cars[index-1].x = x; 
      cars[index-1].y = y;
      if(index== player.index) {
       cars[index - 1].shapeColor = "red";
       camera.position.x = displayWidth/2;
       camera.position.y = cars[index-1].y;

      }
    }
  }
  if(keyIsDown(UP_ARROW) && player.index!== null) {
    player.distance = player.distance + 35;
    player.update();
  }
  if(player.distance > 4500) {
    gameState = 2;
  }
  drawSprites();
}

end() {
  console.log("gameover");
}

}

