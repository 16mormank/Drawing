function square(x, y, side){
  
  rect(x, y, side, side);
}

function setup() {
  createCanvas(640,480);
  background(0,0,255);
  noStroke();
  fill(255,204,100);
  ellipse(15,155,25,25) // hands
  ellipse(95,105,25,25)
  ellipse(60,138,70,70)// body
  ellipse(60,55,85,95); // head
  fill(255,255,255);
  ellipse(55,35,20,25); //eyes
  ellipse(80,35,20,25);
  fill(51);
  ellipse(60,35,7,7); // pupils
  ellipse(85,35,7,7);
  fill(51);
  ellipse(73,70,30,40); // mouth
  fill('red')
  ellipse(50,187,25,10); // feet
  ellipse(78,187,25,10);
 
}