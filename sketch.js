function setup() {
  createCanvas(600, 600);
  colorMode(HSB,360,100,100,100);
  angleMode(DEGREES);
  
  background(0);
  
  let cols = 15;
  let rows = cols;
  let cellWidth = width/cols;
  let cellHeight = height/rows;
  
  for(let i = 0; i < rows; i++)
  {
    for(let j = 0; j < cols; j++)
    {
      let x = i * cellWidth;
      let y = j * cellHeight;
      let d = cellWidth;
      let rotateNum = int(random(5)) * 360/4;
      
      push();
      translate(x + cellWidth/2, y + cellHeight/2);
      rotate(rotateNum);
      stroke(255);
      strokeWeight(2);
      strokeJoin(ROUND);
      
      if(random(100)<90)
      {
        noFill();
        arc(0,0,d,d,0,180);
        circle(0,0,d/3.5);
        
        if(random(100)<50)
        {
          fill(255);
          circle(0,0,d/2);
        }
        
        if(random(100)<40)
        {
          noFill();
          ellipse(0,0,d/2,d/3);
        }
      }
      if(random(100)<50)
      {
        fill(255);
        let rSize = random(2,7)
        strokeWeight(rSize);
        point(0,0);
      }
      else
      {
        fill(255);
        arc(0,0,d,d,0,180);
      }
      pop();
      
      push();
      translate(x,y);
      rotate(rotateNum);
      stroke(165,60,100,100);
      strokeWeight(3);
      noFill();
      if(random(100)>50)
      {
        arc(0,0,d,d,0,180);
      }
      else
      {
        point(0,0);
      }
      pop();
    }
  }
}

