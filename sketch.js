var hr, min, sc;
var  secAngle, minAngle, hrAngle;
var scLine, minLine, hrLine;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);


}

function draw() {
  background(0);  

  translate(200,200);
  rotate (-90);

 hr = hour();
 min = minute();
 sc = second();

scAngle = map(sc,0,60, 0, 360);
minAngle = map(min,0, 60, 0 ,360);
hrAngle = map(hr % 12, 0, 11, 0, 360);

push();
rotate(scAngle);
stroke(225,0,0);
strokeWeight(7);
line(0, 0, 100, 0);
pop();

push();
rotate(minAngle);
stroke(0,225,0);
strokeWeight(7);
line(0, 0, 75,0);
pop();

push();
rotate(hrAngle);
stroke(0,0,225);
strokeWeight(7);
line(0,0,50,0);
pop();

strokeWeight(10);
noFill();


  drawSprites();
}

