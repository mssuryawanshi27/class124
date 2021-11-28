function setup (){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(400,400);
    canvas.position(430,130);
    
    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}
function modelDone(){
    console.log("Posenet Is Initialized And Loaded");
}
function draw(){
    background("#5196e3")
}
function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.lenght > 0){
        console.log(results);

        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}