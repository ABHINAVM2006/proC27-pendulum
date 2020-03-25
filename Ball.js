class Ball {
  constructor(x,y,width,height)   {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
  

