var drawing = []
var path = []


function setup(){
    var canvas = createCanvas(500,500);
    canvas.mousePressed(start);
   
var saveButton = select('#saveButton');
saveButton.mousePressed(saveDrawing)
}

   
function draw(){
    background(51);
if(mouseIsPressed){
    var point = {x:mouseX,y:mouseY}
    path.push(point)
}
stroke("blue")
for(var i = 0;i<drawing.length;i++){
    var path1 = drawing[i]
    beginShape();
    stroke(255);
    strokeWeight(6);
    noFill();
    for(var j = 0;j<path1.length;j++){
        vertex(path1[j].x,path1[j].y)
    }
    endShape();
}
    
    
}
function start(){
    path = []
    drawing.push(path)
}

function saveDrawing(){
    var ref = firebase.ref('drawings');
    ref.push(drawing);
}