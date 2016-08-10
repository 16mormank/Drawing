var pupilsY = 45;

function square(x, y, side){
  rect(x, y, side, side);
}
function setup() {
createCanvas(640,480);
}
  function draw(){
  background(0,0,255);
  noStroke();
  fill(255,204,100);
  ellipse(15,150,25,25) // hands
  ellipse(105,150,25,25)
  ellipse(60,148,60,70)// body
  ellipse(60,65,85,95); // head
  fill(255,255,255);
  ellipse(55,45,20,25); //eyes
  ellipse(80,45,20,25);
  fill(51);
  ellipse(60,pupilsY,7,7); // pupils
  ellipse(85,pupilsY,7,7);
  fill(51);
  ellipse(73,80,30,40); // mouth
  fill('red')
  ellipse(50,197,25,10); // feet
  ellipse(78,197,25,10);
  pupilsY = pupilsY + 0.1;
  if(pupilsY >= 52){
    pupilsY = 42;
  }

}
