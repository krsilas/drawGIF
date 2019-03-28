class GIF extends Image {
  constructor(){
    super();
  }
}

CanvasRenderingContext2D.prototype.drawGIF=function(img, width, height, numberOfFrames = 1, repeat = true){ 
  let frameIndex = 0;
  update = ()=>{
    if (frameIndex < numberOfFrames - 1 && repeat) {frameIndex += 1;}
    else {frameIndex = 0;}
  };
  render = ()=>{
    this.drawImage(
      image,
      frameIndex * width / numberOfFrames, 0,
      width / numberOfFrames, height,
      0, 0,
      width / numberOfFrames, height
    );  
  }
  function loop() {
    setTimeout(() => {
    window.requestAnimationFrame(loop)
    update(); render();
    }, 100)
  }
  img.addEventListener("load", loop);
};
