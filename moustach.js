function preload()
{
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
}
function draw()
{
}
function take_snapshot()
{
    save('myFilterImage.png');
}
function next_screen()
{
    window.location = "lipstick.html";
}