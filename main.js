noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
video=createcapture(VIDEO);
video.size(550,500);
canvas.createcanvas(550,550);
canvas.position(560,150);


poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded() {
console.log("PoseNet Is initialized")
}
function gotPoses(results) {
if (results.lenth > 0) {
console.log(results);
noseX= results[0].pose.nose.x;
noseY =results[0].pose.nose.y;
console.log("noseX ="+noseX+"noseY ="+noseY);

leftwristX= resultsZ[0].pose.leftwrist.x;
rightwristX=results[0].pose.rightwrist.x;
difference=floor(leftwristX-rightwristX);
        
console.log("leftWristX="+leftwristX+"rightWristX="+rightwristX+"difference="+difference);
}
}
function draw() {
background("969A97");
document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
fill("F90093");
stroke("F90093");
square(noseX,noseY,difference);
}