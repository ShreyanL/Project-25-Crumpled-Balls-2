class Paper
{

    constructor(x, y, r)
    {
            //var options = {isStatic: false, restitution:0.3, friction:0.5, density:1.2} 
            var options = {isStatic: false, restitution:0.1, friction:5.0, density:1.7} 
            this.body = Bodies.circle(x, y, r, options);            
            this.width = r;
            this.height = r;
            this.image = loadImage("paper.png");
            //this.bx = x;
            //this.by = y;
            World.add(world, this.body);
    }

    display()
    {
            var pos = this.body.position;
            //ellipseMode(CENTER);
            //fill("purple");
            //ellipse(pos.x, pos.y, this.width, this.height);
            
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.width, this.height);
    }

}