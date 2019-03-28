# drawGIF
A plugin to create an unofficial CanvasRenderingContext2D.drawGIF() method which is not provided by the Web API. Can be used to draw a gif onto the canvas.

## Syntax
in imitation of [CanvasRenderingContext2D.drawImage() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
```javascript
void ctx.drawImage(image, dx, dy, nFrames, repeat);
void ctx.drawImage(image, dx, dy, dWidth, dHeight, nFrames, repeat);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, nFrames, repeat);
```

### Parameters
- `image`:  
  An element to draw into the context. The specification only allows an image sprite of the desired GIF. Can be generated [here](https://ezgif.com/gif-to-sprite).

- `sx` *Optional*:  
  The x-axis coordinate of the top left corner of the sub-rectangle of the source GIF to draw into the destination context.

- `sy` *Optional*:  
  The y-axis coordinate of the top left corner of the sub-rectangle of the source GIF to draw into the destination context.

- `sWidth` *Optional*:  
  The width of the sub-rectangle of the source GIF to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the GIF is used.

- `sHeight` *Optional*:  
  The height of the sub-rectangle of the source GIF to draw into the destination context.

- `dx`:   
  The x-axis coordinate in the destination canvas at which to place the top-left corner of the source GIF.

- `dy`:  
  The y-axis coordinate in the destination canvas at which to place the top-left corner of the source GIF.

- `dWidth` *Optional*:  
  The width to draw the GIF in the destination canvas. This allows scaling of the drawn GIF. If not specified, the GIF is not scaled in width when drawn.

- `dHeight` *Optional*:  
  The height to draw the GIF in the destination canvas. This allows scaling of the drawn GIF. If not specified, the GIF is not scaled in height when drawn.

- `nFrames`:  
  The number of frames of the source GIF. If not specified, the number is 1.

- `repeat`:  
  A Boolean which indicates whether the GIF should be repeated. If not specified the value is `true`.



### Exceptions thrown
not implemented yet.
<!-- INDEX_SIZE_ERR
If the canvas or source rectangle width or height is zero.
INVALID_STATE_ERR
The image has no image data.
TYPE_MISMATCH_ERR
The specified source element isn't supported.
NS_ERROR_NOT_AVAILABLE
The image is not loaded yet. Use .complete === true and .onload to determine when it is ready. -->