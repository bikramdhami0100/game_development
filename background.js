class Background{
    constructor(game){
        this.game=game;
        this.image=document.getElementById("background");
        this.width=2300;
        this.height=this.game.baseHeight;
        this.x;


    }
    update(){
      this.x-=2;
      if(this.x<=-this.width){
        this.x=0;
      }
    }
    draw(){
        this.game.ctx.drawImage(this.image,this.x,0)
    }
    resize(){
        this.x=0;
    }
}
