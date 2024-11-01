class Player{
    constructor(game){
        this.game=game;
        this.x=50;
        this.y;
        this.width;
        this.height;
        this.spriteWidth=200;
        this.spriteHeight=200;
        this.speedY;
        this.flapSpeed;
    }
    draw(){
        this.game.ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    update(){
        // this.x++;
        this.y+=this.speedY;
        if(!this.isTouchingBottom()){
            // this.y+=this.game.gravity;
            this.speedY +=this.game.gravity;
        }
        // botton boundary
        if(this.isTouchingBottom()){
            this.y=this.game.height-this.height;
            // console.log(this.speedY,"speedY");
            // console.log(this.y,"This is y")
        }
    }
    resize(){
        this.width=this.spriteWidth*this.game.ratio;
        this.height=this.spriteHeight*this.game.ratio;
        this.y=this.game.height*0.5-this.height*0.5;
        this.speedY=-4*this.game.ratio;
        this.flapSpeed=5*this.game.ratio;
    }
    isTouchingBottom(){
        return this.y>=this.game.height-this.height;
    }
    isTouchingTop(){
       return this.y<=0;
    }
     flap(){
        this.speedY=-5;
        if(!this.isTouchingTop()){
            this.speedY=-this.flapSpeed;

        }
     }


}