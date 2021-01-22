class bob{
    constructor(x,y,)
    {
        var options={

        isStatic:false,
        restitution:1.4,
        density:0.9,
    }

   
   this.body=Bodies.circle(x,y,25,options)
   World.add(world,this.body);
}

    display()
    {
        var pos= this.body.position;
        push() 
        strokeWeight(4);
        stroke("red");
        fill("purple");
        ellipse(pos.x,pos.y,50,50);
        pop()
        
    }
}


