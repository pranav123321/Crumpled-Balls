
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

var paper = Paper.create();
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();

PaperClass  {

var options = {
isStatic:Flase,
restituition:0,3
friction:0,
density:1.2

}

}

function keyPressed (){

if (keyCode === UP_ARROW ){

Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:145});

}

}


}

