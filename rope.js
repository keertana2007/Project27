class rope {
    constructor(bodyA,bodyB,Xoffset,Yoffset){
        this.Xoffset = Xoffset
        this.Yoffset = Yoffset
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.Xoffset, y:this.Yoffset}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope)
    }
 display(){
    var pos1 = this.rope.bodyA.position;
    var pos2 = this.rope.bodyB.position;
    
    strokeWeight(3);
    line(pos1.x, pos1.y, pos2.x + this.Xoffset, pos2.y + this.Yoffset)

 }


}