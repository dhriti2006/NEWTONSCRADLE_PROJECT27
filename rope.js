 class rope{

    constructor(body1,locB){

         var options = {
             bodyA:body1,

             pointB: locB,
    
    

        }

         this.pointB=locB
         this.rope = Constraint.create(options);
         World.add(world,this.rope);
    }

    display(){
        
        var pointA= this.rope.bodyA.position;
        var pointb= this.pointB;

        strokeWeight(5);
    line(pointA.x, pointA.y, pointb.x,pointb.y)
    

    }

 }