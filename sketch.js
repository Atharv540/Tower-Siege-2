const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygonImg;

function preload(){
  polygonImg = loadImage("polygon.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  box1 = new Box(430,135,30,40);
  box2 = new Box(460,135,30,40);
  box3 = new Box(490,135,30,40);
  box4 = new Box(520,135,30,40);
  box5 = new Box(550,135,30,40);
  box6 = new Box(460,95,30,40);
  box7 = new Box(490,95,30,40);
  box8 = new Box(520,95,30,40);
  box9 = new Box(490,55,30,40);

  ground1 = new Ground(480,180,220,20);
  
}

function draw() {
  background(20);
  Engine.update(engine); 
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ground1.display();
  
  




  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon);
  }
}