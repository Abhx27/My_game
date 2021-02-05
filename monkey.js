class Monkey {
    constructor(x,y,width,height){
        var options = { 
            'friction':1,
            'restitution':0,
            'density':1
        }
        this.image = loadImage("image/Monkey_01.png","image/Monkey_02.png","image/Monkey_03.png","image/Monkey_04.png","image/Monkey_05.png","image/Monkey_06.png",
        "image/Monkey_07.png","image/Monkey_08.png","image/Monkey_09.png","image/Monkey_10.png",)
        this.body = Bodies.rectangle(x,y,width,height)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height)
    }
}