//create a class called Box = class class_name
class Box{

constructor(x,y,width,height){              //function setup()
//this = object that is to be created later in the sketch.js
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

display(){                 //function draw()
    var pos = this.body.position;
    push ()
    fill("white");
    rectMode(CENTER);
    translate (pos.x,pos.y);
    rotate (this.body.angle);
    rect(0,0,this.width,this.height);
    pop ()
}

}