class Stone{
    constructor(x1,y1,w1,h1){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image=loadImage("images/stone.png")
        this.body=Bodies.rectangle(x1, y1, w1, h1 , options);
         World.add(world, this.body); 
         this.w1=50;
         this.h1=50;
    }
    display(){
        var stonePos=this.body.position;		
			push()
			//translate(stonePos.x, stonePos.y);
			
            imageMode(CENTER);
			image(this.image,stonePos.x,stonePos.y,this.w1,this.h1)
			pop()
    }
}