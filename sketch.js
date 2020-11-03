let button;
let element;

function setup() {
    element = createElement('h2',"");
    createCanvas(windowWidth, windowHeight);
    background('#e0bbe4');
    element = element.html("SUN & MOON");
    element.position(windowWidth/2-110, windowHeight/2-200);
    button = createButton('Click Me');
    button.position(windowWidth/2-30, windowHeight/2);
    button.mousePressed(dayMode);
    noStroke();
}

function dayMode() {
    background(209, 153, 198);
    
    //sun
    fill(255, 211, 94);
    ellipse(windowWidth/2, windowHeight/2, 500);
    button.mousePressed(drawMoon);
    
    element = element.html("SUN");
    element.position(windowWidth/2-20, windowHeight/2-360);
}

function drawMoon() {
    background(70, 94, 122)
    
    fill(255, 211, 94);
    ellipse(windowWidth/2, windowHeight/2,500);
        
    fill(70, 94, 122);
    ellipse(windowWidth/2+120, windowHeight/2,500);
    
    element.html("MOON");
    element.position(windowWidth/2-35, windowHeight/2-360);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}





