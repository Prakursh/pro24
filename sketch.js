
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ham;
var paper;
var groun1;
var rubber;
var sand;
var sand1,sand2,sand3,sand4,sand5,sand6;
var iron;


function preload()
{
	
}

function setup() {
	createCanvas(1600,780);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
ham = new Hammer(800,390,30,80);
groun1 = new Ground(800,780,2000,10);
paper = new Stone(400,750,50,50);
rubber = new Rubber(1390,450);

sand = new Sand(200,775);
sand1 = new Sand(450,775);
sand2 = new Sand(470,775);
sand3 = new Sand(490,775);
sand4 = new Sand(580,775);
sand5 = new Sand(1000,770);
sand6 = new Sand(1200,775);

iron = new Iron(700,770,50,30);

	Engine.run(engine);
  
}


function draw() {
	background("blue");
    Engine.update(engine);
  rectMode(CENTER);

 ham.display();
  groun1.display();
paper.display();
rubber.display();
  
sand.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();

iron.display();

  drawSprites();
 
}



