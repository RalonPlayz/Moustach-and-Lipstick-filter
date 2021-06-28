noseX=0;
noseY=0

function preload()
{
    moustach = loadImage('images-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

    function gotPoses(results)
    {
        if(results.length > 0){
            console.log(results);
           noseX =  results[0].pose.nose.x-16;
           noseY = results[0].pose.nose.y;
           console.log("nose x = " + results[0].pose.nose.x);
           console.log("nose y = " + results[0].pose.nose.y);
        }
    }

function draw()
{
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255,0 ,0 );
    //circle(noseX, noseY, 20);
    image(moustach, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function next_screen()
{
    window.location = "lipstick.html";
}