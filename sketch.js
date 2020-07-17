const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,floor;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(230,200,50,50);
    box2 = new Box(200,100,40,70);
    floor = new ground(200,350,400,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box2.display();
    box1.display();
   floor.display();
}