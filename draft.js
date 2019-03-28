class GIF {
  constructor(){
    this.src=null;
  }
}
class Sprite extends GIF{
  constructor(options = {}){
    super();
    let frameIndex = 0;
    const numberOfFrames = options.numberOfFrames || 1;
    this.context = options.context;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.loop = (options.loop === false) ? false : true;
    this.render = ()=>{
      this.context.drawImage(
        this.image,
        frameIndex * this.width / numberOfFrames, 0,
        this.width / numberOfFrames, this.height,
        0, 0,
        this.width / numberOfFrames, this.height
      );  
    };
    this.update = ()=>{
      if (frameIndex < numberOfFrames - 1) {frameIndex += 1;}
      else {frameIndex = 0;}
  }; 
  }
}

CanvasRenderingContext2D.prototype.drawGif=function(img, width, height, numberOfFrames){ 
  const image = new Image();
  image.src = img.src;
  const GIFo = new Sprite({
    context: this,
    width, height, image, numberOfFrames
  });
  function loop() {
    setTimeout(() => {
    window.requestAnimationFrame(loop)
    GIFo.update(); GIFo.render();
    }, 100)
  }
  image.addEventListener("load", loop);
};
