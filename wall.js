class Wall {
    constructor(x , y ,width, height , angle) 
    {
      var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width , height, options);
      this.width = width;
      this.height = height;
      this.x = x
      this.y = y
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
     
      rectMode(CENTER);
      fill("red");
      rect(this.x, this.y, this.width, this.height);
      
    }
  };