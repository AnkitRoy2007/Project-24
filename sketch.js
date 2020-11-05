const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground,paper;
var Play = 1;
var End = 0;
var gameState = Play;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();

    world = engine.world;

    ball = new Paper(100,375,15);

    ground = new Ground(600,height-20,1200,10);
    
    log1 = new log(900,375,150,15);
    log2 = new log(820,337,15,80);
    log3 = new log(980,337,15,80);

    Engine.run(engine);
}

function draw(){
    background(25);

    ball.display();
    log1.display();
    log2.display();
    log3.display();
    ground.display();
    keyPressed();
    
}
function keyPressed(){
    if(keyCode == UP_ARROW){
       Matter.Body.applyForce(ball.body,ball.body.position,{x : 0.4,y : -0.4});
    }
    if(keyCode == DOWN_ARROW) {
        Matter.Body.applyForce(ball.body,ball.body.position,{x : 0.04,y : 0.25});
    }
 }
