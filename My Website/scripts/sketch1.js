
function setup() {
    createCanvas(400, 400);
  
  }
  
  function draw() {
    background(220);
   
  //background  
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('22th country', 50, 50);
    
    square(0,300,400);
    
    textSize(22);
    fill('limegreen');
    text('DoraFmon',250,350);
    
    
  //shadow
    push();
    stroke(173,181,189);
    strokeWeight(2);
    fill(173,181,189);
    bezier(150,380,80,390,70,320,200,354);
    pop();
      
  //stroke
    strokeWeight(4);
    stroke(0,0,60);
    
  //body
    fill(3,4,94);
    ellipse(150,300,100,165);
    
    
  //ear 
    push();
    fill(2,62,138);
    triangle(118,95,91,205,160,205);
    
    push();
    translate(50,0);
    triangle(118,95,91,205,160,205);
    pop();
    
    pop();
  
    
  //face
    ellipse(150, 215, 123, 100);
    
    
  
  //feet
    push();
    stroke(2,62,138);
    strokeWeight(3)
    line(140,330,138,380);
    pop();
    
    push();
    translate(15,0);
    stroke(2,62,138);
    strokeWeight(3)
    line(140,330,142,380);
    pop();
    
    ellipse(130,375,35,23);
    push();
    translate(35,0);
    ellipse(130,375,35,23);
    pop();
    
    push();
    stroke(225);
    strokeWeight(2)
    line(120,378,120,388);
    pop();
    
    push();
    translate(10,0);
    stroke(225);
    strokeWeight(2)
    line(120,378,120,388);
    pop();
    
    push();
    translate(50,0);
    stroke(225);
    strokeWeight(2)
    line(120,378,120,388);
    pop();
    
    push();
    translate(40,0);
    stroke(225);
    strokeWeight(2)
    line(120,378,120,388);
    pop();
    
  
  // tail
    push();
    translate(145,290);
    rotate(75);
    noFill();
    stroke(0,0,60);
    strokeWeight(13);
    bezier(95, 10, 20, 10, 90, 90,5, 85);
    pop();
    
  //eyes
    push();
    stroke(225);
    strokeWeight(2);
    fill(255,195,0);
    ellipse(123,225,38,38);
    pop();
    push();
    fill(0);
    ellipse(123,225,5,35);
    pop();
  
    push();
    translate(55,0);
    push();
    stroke(225);
    strokeWeight(2);
    fill(255,195,0);
    ellipse(123,225,38,38);
    pop();
    push();
    fill(0);
    ellipse(123,225,5,35);
    pop();
    pop();
    
  //nose
    push();
    fill(220,47,2);
    ellipse(150,243,15,9);
    pop();
  
  //moon
    push();
    stroke(225,225,0);
    strokeWeight(2);
    fill('yellow');
    bezier(320, 30, 270, 70, 290, 105, 333, 110);
    pop();
    
  //tex
    console.log("Your name: Nadia Hu (Yue Hu). Your partner’s name: Dee Liu (Zhihan Liu). The object description you received: Reflect upon the following: The  face of the cat with blue color from 22th country. His name calls DoraFmon. Two big circle eyes and a red circle nose. Your assignment reflections：My partner used English when describing the object, which was easy to understand. However, her description of the object was brief. So when completing this assignment, I imagined a suitable scene. Because it was a blue kitten, it felt mysterious. So I went with a night theme. When I described the image using code, I thought it was challenging. I used the notes I wrote during class and reviewed them while completing the assignment. In addition, I spent extra time studying related tutorial videos on YouTube. I followed a blogger named  TheCodingTrain, whose tutorial videos I really liked.")
  }