let canvas =document.getElementById("my_canvas"); 
let context = canvas.getContext("2d");

const speed =1;
let position = 0;
let movespeed= speed;
let radius = 40;

function moveBall(){
  if(position + radius > 1000){
    movespeed = -speed;
  }else if(position - radius < 0){
    movespeed = speed;
  }
  position += speed;
}

function drawBell(){
  context.clearRect(0,0,1000,600);
  context.fillStyle = "red";
  context.beginPath();
  context.arc(position, 50, radius, 0, 2* Math.PI);
  context.fill();
}

function animate(){
  moveBall();
  drawBell();
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);