noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
video= createCapture(VIDEO);
video.size(550, 500);
canvas= createCanvas(550, 550);
canvas.position(560, 150);
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log("nosex= " + noseX + "nosey=" + noseY);
leftwristX= results[0].pose.leftWrist.x;
rightwristX= results[0].pose.rightWrist.x;
difference= floor(leftwristX-rightwristX);
console.log("leftwristx= " + leftwristX + "rightwristx= " + rightwristX + "difference= " + difference);
}
}

function draw(){
background("grey");
document.getElementById("square_side").innerHTML= "Width and Height of A Square Will Be = " + difference + "px";
fill("#f90093");
stroke("#f90093");
square(noseX, noseY, difference);
}