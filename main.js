function preload() {

}
function setup(){
    Canvas=createCanvas(375,300);
    Canvas.center();
    cam=createCapture(VIDEO);
    cam.size(375,300);
    cam.hide();
    net=ml5.poseNet(cam,modelloaded)
    net.on('pose',gotposes)
}
function draw(){
    image(cam,0,0,375,300);
    
}
function ohsnap(){
    save("no_nose.png");
}
function modelloaded(){
    console.log("woohoo !!! your model is loaded.");

}
function gotposes(results){
    
    if(results.length>0){
        console.log(results);
    }
}
