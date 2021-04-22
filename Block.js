class Block{

    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.5,
           
        }

        this.body=Bodies.rectangle(x, y, 60, 60, options);
        this.width=60;
        this.width=60
        World.add(world, this.body)
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0, this.width, this.height)
        pop()

        if(this.body.speed > 4){
            World.remove(world, this.body);
            push();
            this.Visibility=this.Visibility-100000000000;
            tint(-255, this.visibility=false)
            pop();
        }

    }

}