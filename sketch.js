function setup() {
    createCanvas(500, 500);
    background('black');
  }
  
  function draw() {
    
    stroke("blue");
    fill("green");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  