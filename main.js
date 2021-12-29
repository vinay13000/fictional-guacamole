video="";
objectdetector="";
status="";

function preload(){
    video=createVideo("video.mp4");
    video.hide();

}

function setup(){
  canvas=createCanvas(480,380);
  canvas.center();
}

function draw(){
   image(video,0,0,480,380 ) ;

}

function start(){
objectdetector=ml5.objectDetector("cocossd",modelLoaded());

 document.getElementById("status").innerHTML="status: detecting object";

}

function modelLoaded(){
    console.log("model loaded");
    status=true;
    video.loop();
    video.speed(2);
    video.volume(0);
}