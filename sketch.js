
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var mango1, mango2, mango3, mango4, mango5
var stone, slingshot;

//var gamestate="play";

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(750,975,1500,50);
	boy= new Boy(200,200,200,200)
	tree=new Tree(1200,500,30,900);
	stone=new Stone(180,780,50,50);
	mango1=new Mango1(900,200,150,150);
	mango2=new Mango2(1150,600,100,100);
	mango3=new Mango3(1350,300,200,200);
	mango4=new Mango4(1050,400,140,140);
	mango5=new Mango5(1200,400,140,140);
	slingshot = new Slingshot(stone.body,{x:150, y:700});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  




  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stone.display();
  slingshot.display();

  detectcollision(stone,mango1);
 // detectcollision(stone,mango2);
//  detectcollision(stone,mango3);
  //detectcollision(stone,mango4);
//  detectcollision(stone,mango5);
  drawSprites();
 
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectcollision(stone,mango1){
	mango1BodyPosition=mango1.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y)
	if(distance<-mango1.r+stone.r){
		Matter.Body.setStatic(mango1.body,false);
	}
}


