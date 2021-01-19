class Sand {
    constructor(x, y) {
      var options = {
          restitution:true,
          friction:5,
          density:1.0
      }
      this.body = Bodies.circle(x, y,5,options);
    this.radius=5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(RADIUS);

      fill("red");
      ellipse(0, 0,this.radius*2,this.radius*2);
      pop();
    }
  };