const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = matter.constraint;

var engine, world;
var ground;
var ball;
var chain;


 function setup()   {
     var canvas = createCanvas(400,400);
     engine = Engine.create();
     world = engine.world;

     ground = new Ground(200,30,10,70);
     ball = new Ball(200,200,40,40);
     chain = new Chain(ground,ball);

 }

 function draw()    {
     background(0);
     if(keyIsDown("space"))   {
        ball.position.x = mouseX;
        ball.position.y = mouseY;
     }
     else if(keyIsDown("enter")) {
         ball.position.x = 200;
         ball.position.y = 200;
     }
     Engine.update(engine);

     ground.display();
     ball.display();
     chain.display();
 }