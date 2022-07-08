status = "";
value = "";
objects = [];
function setup(){
canvas = createCanvas(480, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(480, 380);
video.hide();
}
function start(){
objectDetector = ml5.objectDetector('cocossd',modeloaded);
document.getElementById("status").innerHTML = "Status : object Detected";
value = document.getElementById("object_input").value;
}
function modeloaded(){
console.log("Model loaded");
status = true;
}
function gotResult(results,error){
    if(error){
    console.log(error);
    }
    console.log(results);
    objects = results;
    }
    function draw(){
        image(video,0,0,480,380);
        if(status!= " ")
        {
        objectDetector.detect(video,gotResult);
        for (i = 0;i < objects.length;i++ ){
        document.getElementById("status").innerHTML = "Status : objects Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects Detected : "+ objects.length;
        fill("#FF0000");
        percent =  floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent +"%",objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
        }
        }
