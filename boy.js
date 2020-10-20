class Boy{
    constructor(x,y,width,height){
var options={
    isStatic:true
}
this.boy=loadImage("sprites/boy.png");



this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);

}
display(){
var pos =this.body.position;
imageMode(CENTER);
image(this.boy,300,850,500,500);

}
};