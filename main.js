class Game{
    constructor(canvas,context){
        this.canvas=canvas;
        this.ctx=context;
        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.baseHeight=720;
        this.gravity=1;
        this.speed;
        // console.log("ratio is ",this.ratio);
        this.background=new Background(this);
        this.player=new Player(this);
        this.resize(window.innerWidth,window.innerHeight)
        window.addEventListener("resize", (e)=> {
            this.resize(e.currentTarget.innerWidth,e.currentTarget.innerHeight)
        })
        // mouse controls
        this.canvas.addEventListener( "mousedown",(e)=>{
            console.log(e);
            this.player.flap()
        })
        window.addEventListener("keydown",(e)=>{
            if(e.key==" "||e.key=="Enter") this.player.flap()
        })
    this.canvas.addEventListener("touchstart",e=>{
        this.player.flap()
    })
        
    }
    resize(width,height){
        this.ratio=(this.height / this.baseHeight);
        // console.log(this.height/this.baseHeight,"ratio");
        this.canvas.width=width;
        this.canvas.height=height;
        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.ctx.fillStyle="gold";
        this.speed=3;
        this.gravity=0.15*this.ratio;
        this.background.resize()
        this.player.resize()
        // console.log(this.height,this.baseHeight,this.ratio ,"all types")
    }
    render(){
        // this.ctx.fillRect(100,100,300,200);
        // this.ctx.fillStyle="red";
        this.background.update();
        this.background.draw();
        this.player.update();
        this.player.draw();
    }
}
window.addEventListener("load",function() {
     const canvas=document.getElementById("canvas1");
     const ctx=canvas.getContext("2d");
    //  console.log(ctx)
     canvas.width=720;
     canvas.height=720;
     const game=new Game(canvas,ctx);
     game.render()
     function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        game.render();
        requestAnimationFrame(animate)
     }
     this.requestAnimationFrame(animate)

})