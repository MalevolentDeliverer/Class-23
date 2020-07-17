class ground{

    constructor(x,y,width,height){
        var floor={
            isStatic : true

                }
        this.floor = Bodies.rectangle(x,y,width,height,floor);
        this.width = width;
        this.height = height;
       
        World.add(world, this.floor);
            }
        display(){
            var pos =this.floor.position;
            rectMode(CENTER);
            fill("green");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
          
            }
            






}
