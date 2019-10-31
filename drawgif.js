CanvasRenderingContext2D.prototype.drawGIF=function(img, a, b, c, d, e, f, g, h, i, j){
  let sx=0, sy=0, sWidth, sHeight, dx, dy, dWidth, dHeight, numberOfFrames, repeat=true, width, height, frameIndex=0;
  const l = arguments.length;
  img.onload = function(){
    width = img.width;
    height = img.height;
    if (!dWidth || !dHeight){dWidth = width / numberOfFrames; dHeight = height};
    if (!sWidth || !sHeight){sWidth = width / numberOfFrames; sHeight = height};
  }
  switch(true){  
    case (l<=5):
        [, dx, dy] = arguments;
        check(c,d);
        break;
    case (l>5 && l<=7):
        [, dx, dy, dWidth, dHeight] = arguments;
        check(e,f);
        break;
    case (l>7 && l<=11):
        [,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight] = arguments;
        check(i,j)
        break;
    default: console.log('error');
  }
  function check(f,r){
    numberOfFrames = (typeof f === 'number') ? f : 1;
    if(!r) repeat = false;
  }
  function loop(){
    update(); 
    render();
    setTimeout(() => {
      window.requestAnimationFrame(loop)
    }, 100)
  }
  function update(){
    if (frameIndex < numberOfFrames - 1 && repeat) {frameIndex += 1;}
    else {frameIndex = 0;}
  };
  render = () => {
    this.drawImage(
      img,
      (frameIndex * width + sx) / numberOfFrames, 0+sy,
      sWidth, sHeight,
      dx, dy,
      dWidth, dHeight
    );  
  }
  img.addEventListener("load", loop);
};
