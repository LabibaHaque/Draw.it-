let currentPage = 0; 
let currentTool = 0; 
let titlefont;
let startpage;
let startbutton;
let colPic; 

//Tools 
let myrect;
let Paintbrush;
let airbrush;
let c = 0;
let symmetrylogo;
let stamp;
let eraser; 


//Sounds 
let eraserSound; 

var gravity = 0.1;

//start button
startX = 220;
startY = 390;
startW = 700;
startH = 200;

//button for Rectbrush
rectbrushX = 5;
rectbrushY = 10;
rectbrushH = 60;
rectbrushW = 50;

//button for Paintbrush
PaintbrushX = 5;
PaintbrushY = 60;
PaintbrushH = 60;
PaintbrushW = 60;

//button for airbrush 
airbrushX = 5;
airbrushY = 120;
airbrushH = 55;
airbrushW = 55;

//button for symmetrical lines
symmetrylogoX = 5;
symmetrylogoY = 165;
symmetrylogoH = 60;
symmetrylogoW = 60;

//button for stamp
stampX = 1;
stampY = 210;
stampH = 70;
stampW = 70;

// //button for eraser
eraserX = 10;
eraserY = 280;
eraserH = 50;
eraserW = 50;

//returnhome button 
homeX = 10;
homeY = 390;
homeH = 50;
homeW = 50;

function preload(){
  startpage = loadImage('startPage.jpg');
  titlefont = loadFont('start.otf');
  Pressfont = loadFont('press.otf');
  
  rectbrush = loadImage('palm.png');
  eraser = loadImage('eraser.png');
  Paintbrush = loadImage('paintbrush.png');
  airbrush = loadImage('airbrush.png')
  symmetrylogo = loadImage('symmetry.png')
  stamp = loadImage('stamp.png');
  home = loadImage('home.png')
  bin = loadImage('bin.png');
  
  //stamps images 
  stamp = loadImage('tried.png');

  
  eraserSound = loadSound ( 'eraser.wav')
  
}

function setup() {
  createCanvas(600, 450);
    background(255);
   
    object1 = new myPaintbrush(10);
    object2 = new myAirbrush(80);
    object3 = new mySymmetry(3);
    object4 = new myEraser(30,30)
    let c1 = color('yellow');
   object5 = new circles(100,20, c, 1, 5, 50);
   frameRate(20);
}

function draw() {
//Start page features
  if (currentPage == 0) {
       background(startpage);
       textFont(titlefont, 60);
       text('Draw.it', 310, 217);
       textAlign(CENTER, CENTER);
        fill(0);
        noStroke();
        textFont(titlefont, 30);
        text('Start', 310, 417);
      //  colPic.remove();
        }
  
//Page 1 features
  
  if (currentPage == 1) {
    clearboard();
    toolbox(); 
   Toolimages();}
  
//Actions
  if (currentTool == 2 && currentPage == 1){
    toolbox();
    object5.myCircles();
    object5.checkBounce()
    object5.moveAcross();
    object5.gravity();
    
    clearboard();
  }
  
  if (mouseIsPressed && currentTool == 3 && currentPage == 1){
    toolbox();
    object1.myPaintbrush()}
  
  if (mouseIsPressed && currentTool == 6 && currentPage == 1){
    if (mouseX < 590 && mouseX > 78 && mouseY < 380 && mouseY       > 10) {
    toolbox();
    object2.myAirbrush();}}
  
    if (mouseIsPressed && currentTool == 4 && currentPage ==1) {
      object3.mySymmetry();
    }
  
    if (mouseIsPressed && currentTool == 1 && currentPage == 1){
      object4.myEraser();
    }
  if(mouseIsPressed && currentTool == 7 && currentPage == 1) {
    myStamp();
  }
}

function Toolimages() {
  image(rectbrush, rectbrushX, rectbrushY, rectbrushH, rectbrushW);
    image(Paintbrush, PaintbrushX, PaintbrushY, PaintbrushH, PaintbrushW);
    image(airbrush, airbrushX, airbrushY, airbrushH, airbrushW);
    image(symmetrylogo, symmetrylogoX, symmetrylogoY, symmetrylogoH, symmetrylogoW);
    image(stamp, stampX, stampY, stampH, stampW); 
    image(eraser, eraserX, eraserY, eraserH, eraserW);
    image(home, homeX, homeY, homeH, homeW);
}

  function drawPage1() {
  background(255);
    colPic = createColorPicker("black");
    colPic.position(10, 350)
}


//STAMPS 

function myStamp() {
  image(stamp, mouseX-75, mouseY-75, 150,150); 
}

function clearboard() {
  //BOX
  fill(0, 0, 0, 80);
  strokeWeight(3);
  stroke(0, 0, 0);
  rect(70, 390, 530, 60); 
  //CLEAR BOARD 
  fill(158, 204, 69); 
  textFont(titlefont, 50);
  text('Clear Board', 320, 417);}

function toolbox() {
  fill(158, 204, 69, 50);
  strokeWeight(3);
  stroke(0);
  rect(0, 0, 70, 450);
   
}


//TOOLS 

class circles {
  constructor(x, y, c, xspeed, yspeed, range) {
    this.x = x;
    this.y = y;
    this.objectColor = c;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.range = range;
  }

  changeSpeed() {
    this.xspeed = random(-5, 2);
    this.yspeed = random(-5, 2);
  }
  
  gravity() { 
  this.yspeed = this.yspeed + gravity;
  
    if (this.y > 430) { 
      this.yspeed = this.yspeed * -0.95; }
    
  }

  checkBounce() {
   // check if we're going off the left or right edge of the canvas
   if (this.x > 580 || this.x < 70) {
     print("off the x edge")
     this.xspeed = this.xspeed * -1 * random( 0.8, 1.2);
   }

    //same for top and bottom of canvas
    if (this.y > 360 || this.y < 0) {
      print("off the y edge")
      this.yspeed = this.yspeed * -1 * random(0.8, 1.2);
    }
  }
  
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    moveX = random(10, 200);
    moveY = random(0, 100);
  }

  moveAcross() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }


   myCircles() {
  for (let i = 1; i <= 50; i++) {
      fill(random(0, 255), random(0,255), random(0, 255));
      strokeWeight(random(0,3));
       stroke(random(0,10),random(0,100),random(0,255));
        line(this.x, this.y, this.x + random(-this.range, this.range), this.y + random(-this.range, this.range));}
}
}

//class for Paintbrush 
class myPaintbrush{
  constructor(brushStroke){
    this.brushStroke = brushStroke;
  }

  myPaintbrush() {
   stroke(colPic.color());
   /// stroke(0); // CHANGE IT LATER
    strokeWeight(this.brushStroke);
    line(pmouseX, pmouseY, mouseX, mouseY);

  // if (mySound.isPlaying() == false) {
  //   mySound.play();}
  }

  increaseSize() {
    this.brushStroke += 5;
  }
  
  decreaseSize() {
    this.brushStroke -= 5;
  }
}

//AIRBRUSH TOOL
class myAirbrush{
  constructor(brushStroke){
  this.brushStroke = brushStroke;
  }

  myAirbrush() {
  let r = red(c); // get the red channel
  let g = green(c); // get the green channel
  let b = blue(c); // get the blue channel

  stroke(r, g, b, 20); // set the color
  strokeWeight(this.brushStroke);
  line(pmouseX, pmouseY, mouseX,mouseY);

  c = get(pmouseX, pmouseY);}
  
  increaseSize() {
    this.brushStroke += 5;}
  
  decreaseSize() {
    this.brushStroke -= 5;}
}

//class for symmetry 
class mySymmetry{
  constructor(brushStroke){
    this.brushStroke = brushStroke;
  }

  mySymmetry() {
  strokeWeight(this.brushStroke);
   stroke(colPic.color());
 // stroke(0);
  line(pmouseX, pmouseY, mouseX, mouseY);
  line(680 - pmouseX, pmouseY, 680 - mouseX, mouseY);
  line(pmouseX, 400 - pmouseY, mouseX, 400 - mouseY);
  line(680 - pmouseX, 400 - pmouseY, 680 - mouseX, 400 - mouseY);
  }
  
  increaseSize() {
    this.brushStroke += 5;
  }
  
  decreaseSize() {
    this.brushStroke -= 5;
  }
}

//class for eraser
class myEraser{
  constructor(brushSizeH, brushSizeW){
    this.brushSizeH = brushSizeH;
    this.brushSizeW = brushSizeW
  }

  myEraser() {
  fill(255, 255, 255, 150);
  noStroke();
  rect(mouseX - this.brushSizeH/2, mouseY - this.brushSizeW/2, this.brushSizeH, this.brushSizeW);
    
       if (!eraserSound.isPlaying()) {
           eraserSound.play();}
  }
    
  increaseSize() {
    this.brushSizeH += 5;
    this.brushSizeW += 5;
  }
  
  decreaseSize() {
    this.brushSizeH -= 5;
    this.brushSizeW -= 5;
  }

}



function keyPressed() {
  if (key == 'a') {    
      object1.decreaseSize();
      object2.decreaseSize();
      object3.decreaseSize(); 
       object4.decreaseSize();

    print("Brush Size - 5");
  }
  if (key == 's') {
        object1.increaseSize();
        object2.increaseSize();  
        object3.increaseSize(); 
        object4.increaseSize();

    print("BrushSize + 5")}
    
}


function mousePressed() {
  
  object5.setPosition(mouseX,mouseY);

//STARTS PROGRAM
  if (mouseX > startX && mouseX < startX + startH && mouseY > startY && mouseY < startY + startW  ){
    currentPage = 1
    drawPage1();
    noStroke();
    fill(100);
    textFont(Pressfont,22)
    text('Press "s" to increase brush size',445,350)
    text('Press "a" to decrease brush size',445,370) }
    

 // RETURNS TO THE FRONT PAGE 0 
  if (mouseX > homeX && mouseX < homeX + homeW && mouseY > homeY && mouseY < homeY + homeH) {
  currentTool =0;
   currentPage = 0;
   colPic.remove();
    print("go home");
  } 

//RECTANGLES BUTTON 
  if (mouseX > rectbrushX && mouseX < rectbrushX + rectbrushH && mouseY > rectbrushY && mouseY < rectbrushY + rectbrushW) {
    currentTool = 2; } //myrect
  
  //PAINTBRUSH BUTTON
  if (mouseX > PaintbrushX && mouseX < PaintbrushX + PaintbrushH && mouseY > PaintbrushY && mouseY < PaintbrushY + PaintbrushW) {
    currentTool = 3
  
    //Paintbrush
    print("Paint brush");
   
  } 
  
    //AIRBRUSH BUTTON
  if (mouseX > airbrushX && mouseX < airbrushX + airbrushH && mouseY > airbrushY && mouseY < airbrushY + airbrushW) {
    currentTool = 6;
   
    print("Air brush");

  }
  
  // SYMMETRY BUTTON
  if (mouseX > symmetrylogoX && mouseX < symmetrylogoX + symmetrylogoH && mouseY > symmetrylogoY && mouseY < symmetrylogoY + symmetrylogoW) {
    currentTool = 4;
    noStroke();
    fill(100);
    circle(340, 199, 5)
    
    print("Symmetrical brush");
   
  }
  
  if (mouseX > stampX && mouseX < stampX + stampH && mouseY > stampY && mouseY < stampY + stampW) {
    currentTool = 7;
  }
  
    

  // ERASER BUTTON
  if (mouseX > eraserX && mouseX < eraserX + eraserH && mouseY > eraserY && mouseY < eraserY + eraserW) {
    currentTool = 1; 
    print("Eraser");
    print("Press key 'a' to decrease brush size")
    print("Press key 's' to increase brush size")
  }
}
