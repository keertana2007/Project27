class bob{
    constructor(x,y,radius){
       var options = {
           isStatic: false,
           restitution: 1,
           friction: 0,
           density: 0.8
       }
     
     this.x = x;
     this.y = y;
     this.radius = radius;
this.body = Bodies.circle(x,y, radius/2, options)
     World.add(world,this.body)
    }
 
    display(){
     var paperpos = this.body.position;
     push();
     translate(paperpos.x,paperpos.y);
     fill("#B65FCF");
     ellipseMode(CENTER);
     ellipse(0,0,this.radius,this.radius);
     pop();
 
     
    }
 
 
 
 }