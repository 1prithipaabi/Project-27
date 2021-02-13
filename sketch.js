
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(200,600,10);
	bob2 = new Bob(300,600,10);
	bob3 = new Bob(400,600,10);
	bob4 = new Bob(500,600,10);
	bob5 = new Bob(600,600,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



