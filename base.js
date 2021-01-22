class base{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(400,100,50,10,options);
      this.width = 450;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
