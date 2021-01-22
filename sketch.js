
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new base(250,200,10,10)
	Bob1 = new bob(200,300);
	Bob2 = new bob(250,300);
  Bob3 = new bob(300,300);
	Bob4 = new bob(350,300);
	Bob5 = new bob(400,300);
  rope1 = new rope(Bob1.body,{x:200,y:100})
  rope2 = new rope(Bob2.body,{x:250,y:100})
  rope3 = new rope(Bob3.body,{x:300,y:100})
  rope4 = new rope(Bob4.body,{x:350,y:100})
  rope5 = new rope(Bob5.body,{x:400,y:100})
  
  
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  roof.display()
  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()



  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-70,y:-80})
  }
}



