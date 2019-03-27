
this._canvas = ReactDOM.findDOMNode(this);
this._context = this._canvas.getContext('2d');


  _sprite(options) {	
    var that = {},
    frameIndex = 0,
    tickCount = 0,
    ticksPerFrame = 2,
    numberOfFrames = options.numberOfFrames || 1;
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.loop = options.loop;
    that.rend = ()=>{
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames, 0,
        that.width / numberOfFrames, that.height,
        500, 200,
        that.width / numberOfFrames, that.height
      );   
    };
    that.update = ()=>{
      tickCount += 1;
      if (tickCount > ticksPerFrame) {
        tickCount = 0;
        // Go to the next frame
        if (frameIndex < numberOfFrames - 1) {frameIndex += 1;}
        else if (that.loop) {frameIndex = 0; return 0;}
        else {return -1;}
      }
    }; 
    return that;
  }

  _gif(url, width, height, numberOfFrames){
    setTimeout(()=>{
      var image = new Image();
      image.src = `${url}`;
      let GIFo = this._sprite({
        context: this._context,
        width, height, image, numberOfFrames
      });
      function gifLoop() {
        if (GIFo.update() !== -1) {window.requestAnimationFrame(gifLoop)}
        GIFo.update(); GIFo.rend();
      }
      image.addEventListener("load", gifLoop);      
    }, 0);
  }
  
