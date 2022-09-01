
function setup() {
    createCanvas(windowWidth, windowHeight);
    
  }

function stop(){

}
  
  console.log("This is my first console log!! YIPPEEEEEEEE");

  function draw() 
  {
    // background (0, 0, 255);

    // fill(0);
    // rect(0, 0, windowWidth/12, windowHeight);

    // fill(255);
    // rect(windowWidth/12, 0, windowWidth/12, windowHeight);

    // fill(0);
    // rect((windowWidth/12) * 2, 0, windowWidth/12, windowHeight);

    // fill(255);
    // rect((windowWidth/12) * 3, 0, windowWidth/12, windowHeight);

    // fill(0);
    // rect((windowWidth/12) * 4, 0, windowWidth/12, windowHeight);

    // fill(255);
    // rect((windowWidth/12) * 5, 0, windowWidth/12, windowHeight);

    // //Side of window

    // fill(0);
    // rect(windowWidth/2, 0, windowWidth/2, windowHeight/6);
    
    // fill(255);
    // rect(windowWidth/2, windowHeight/6 , windowWidth/2, windowHeight/6);

    // fill(0);
    // rect(windowWidth/2, windowHeight/6 * 2, windowWidth/2, windowHeight/6);

    // fill(255);
    // rect(windowWidth/2, windowHeight/6 * 3, windowWidth/2, windowHeight/6);

    // fill(0);
    // rect(windowWidth/2, windowHeight/6 * 4, windowWidth/2, windowHeight/6);

    // fill(255);
    // rect(windowWidth/2, windowHeight/6 * 5, windowWidth/2, windowHeight/6);

    background(255, 255, 255);

    for (let i = 0; i < 100; i++) 
    {   
        let randR = random(0, 255);
        let randG = random(0, 255);
        let randB = random(0, 255);

        let intRandR = round(randR);
        let intRandG = round(randG);
        let intRandB = round(randB);

        let randX1 = random(0, windowWidth);
        let randY1 = random(0, windowHeight);
        let randX2 = random(0, windowWidth);
        let randY2 = random(0, windowHeight);

        stroke(intRandR, intRandG, intRandB);
        line(randX1, randY1, randX2, randY2);
        console.log (intRandR)
    }
    throw new Error(
        'Program Terminated');
  }