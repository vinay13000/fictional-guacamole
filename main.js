objects=[]

video="";

status="";


function preload(){
    video=createVideo("video.mp4");
    

}

function setup(){
  canvas=createCanvas(480,380);
  canvas.center();
  video.hide();
}

function draw(){
   image(video,0,0,480,380 ) ;
   if(status!=""){
     objectdetector.detect(video,gotResult);
     for(i=0; i<objects.length;i++){
       document.getElementById("status").innerHTML="status: object dectected";
       document.getElementById("number_of_object").innerHTML="number of object are:"+objects.length;
       fill("red");
      percent=floor(objects[i].confidence*100);
      text(objects[i].label+""+percent+"%"+objects[i].x+15,objects[i].y+15);
      noFill();
      stroke("red");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
      
      
      }

   }

}


function gotResult(error,results){
  if(error){
    console.error();
  }
  else{
    console.log(results);
    objects=results;
  }
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

