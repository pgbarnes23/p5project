var change=0;//Change will cause the triangle's colorto start at 0 and increase by +3
diam1=0;// This will move the cooridantes of the triangle

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

function draw() { //The draw function happens over and over again
  background(400,200,150);//an RGB color for the canvas' background
  stroke(255,255,127); // an RGB color for the circle's border
  fill(000,change,000); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  triangle(diam1, 400, 30, diam1, 250, diam1); // center of canvas, 20px dia
 change=change+3;


  

  fill(000,000,000) // text color
  textSize(20);  // text size
  textFont("Georgia"); // text font family
  textStyle(BOLD); // text font style
  textAlign(CENTER); 
  text("help",40,40); // text that will be displayed 
 
  fill(000,100,200); //fill  color for circles following the mouse
  ellipse(mouseX,mouseY,10,10); // A small circle that will follow the mouse on the canvas
  ellipse(mouseX+60,mouseY+60,60,60); // Another small circle that will follow the mouse while keeping a 60px distance

}

function mousePressed(){// This function will initiate the diam1 variable
	if(diam1>200){
		diam1=0;}
	else{
	diam1=diam1+5;
}
}
