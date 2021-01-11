


const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
 
var engine;
 var world;
  var ground; 
  var box1;
var box2;


  function setup() {
     createCanvas(400,400); 


     //createSprite(400, 200, 50, 50);
      engine = Engine.create();
       world = engine.world; 
       box1=new Box(200,200,50,50);
       box2=new Box(100,50,50,100);
       ground=new Ground(200,height,400,20);
          // console.log(object.position.x);
           } 
           function draw() {
             background("yellow");
              Engine.update(engine); 
              box1.display();
              box2.display();
              ground.display();
                drawSprites();
 }