function setup() {
    createCanvas(400, 400);
    background("blue")
  }
  
  function draw() {
    stroke("purple");
    fill("yellow");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  