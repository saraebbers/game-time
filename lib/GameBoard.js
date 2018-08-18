  // This code sets up the background on the canvas
function drawBackground() {
  // drawing water
  ctx.fillStyle = rgb(56 141 236);
  ctx.fillRect(0, 50, 600, 200); 

  // drawing 3 safe grass areas
  ctx.fillStyle = rgb(87 144 44);
  ctx.fillRect(0, 0, 600, 50);
  ctx.fillRect(0, 250, 600, 100);
  ctx.fillRect(0, 550, 600, 50);

  // drawing white dash lane dividing lines and yellow center lines 
  ctx.beginPath();
  ctx.moveTo(0, 499);
  ctx.lineTo(600, 499);
  ctx.strokeStyle = rgb(254 255 255);
  ctx.setLineDash([10]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 349);
  ctx.lineTo(600, 349);
  ctx.strokeStyle = rgb(254 255 255);
  ctx.setLineDash([10]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 397);
  ctx.ctx.lineTo(600, 397);
  ctx.strokeStyle = rgb(252 248 86);
  ctx.set lineDash([0]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 401);
  ctx.ctx.lineTo(600, 401);
  ctx.strokeStyle = rgb(252 248 86);
  ctx.set lineDash([0]);
  ctx.strokeWidth = 2;
  ctx.stroke();

}
