class Mango3{
    constructor(x,y,width,height){
var options={
    isStatic:true,
    restitution:0,
    friction:1
}
this.mango=loadImage("sprites/mango.png");



this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);

}
display(){
var pos =this.body.position;
imageMode(CENTER);
image(this.mango,1200,400,115,115);

}
};