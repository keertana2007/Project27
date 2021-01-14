
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	
	 

   roof=new Roof(width/2,height/6,440,20);

	bobDiameter=74;

	startBobPositionX=width/2; //800
	startBobPositionY=height/4+500; //675

	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


rope1=new rope(bob1.body,roof.body,-bobDiameter*2, 0)

	rope2=new rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roof.body,0, 0)
	rope4=new rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roof.body,bobDiameter*2, 0)

	

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}

