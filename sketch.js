const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var d1 , d2 , d3 , d4 , d5 , d6;
var particles = [];
 var plinkos = [];
 var divisions = [];
 var divisionHeight=300;

function preload() {
    

  
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground= new Ground(240,780,480,20);

    for(var k =0; k<width; k=k+80) {
        divisions.push(new Divisions(k , height-divisionHeight/2 , 10 , divisionHeight));
    }


    for(var a =0; a<width; a=a+40){
        particles.push(new Particles( a , height-divisionHeight/2 , 5));
    }
}

 

 

function draw(){
    Engine.update(engine);
    background(0)




    ground.display();
    for(var k =0; k<divisions.length; k++) {
        divisions[k].display();
    }

    for(var a=0; a<particles.length; a++){
        particles[a].display();
    }


   

    
}


