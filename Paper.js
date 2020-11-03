class Paper{
 constructor(x,y,r){
    var options = {
     isStatic : false,
     friction : 0.5,
     restitution : 0.3,
     density : 1.2
    }
    this.body = Bodies.circle(x,y,r/2,options);
    this.r = r;
    World.add(world,this.body);
 }
 display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    fill ("yellow");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
 }
}
