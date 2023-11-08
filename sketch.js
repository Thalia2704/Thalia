function setup() {
  createCanvas(600, 600);
  background("black")
}

function draw() {
  fill("lime");
  stroke ("darkblue");
  strokeWeight(1);
  if(mouseIsPressed){
  rect(mouseX, mouseY, 20, 30);
  } 
}
