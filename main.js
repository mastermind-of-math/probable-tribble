var xpos, ypos, cRadius, w, h = 0;
var drawShape = "";
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
var shapes = ["rectangle", "circle"];

//it's fun to write in one line!
function preload(){}
function random(start, end){return start + Math.floor(Math.random() * end)}
function setStatus(status){document.getElementById("status").innerText = status;}
function setup(){canvas = createCanvas(900, 700);}
function span(tcolor){document.getElementById("status").style.color = tcolor;}

function listen(){
    span("rgb(7, 224, 0)");
    setStatus("Listening ...");
    recognition.start();
}

recognition.onresult = function(event){
    setStatus("");
    console.log(event);
    var tspt = event.results[0][0].transcript.toLowerCase();
    if (shapes.indexOf(tspt) == -1){
        span("rgb(255, 0, 0)");
        setStatus("Sorry, I do not understand " + tspt + ".");
    } else {
        span("rgb(7, 224, 0)");
        drawShape = tspt;
        cRadius = random(10, 100)
        xpos = random(0, 900);
        ypos = random(0, 700);
        w = random(10, 200);
        h = random(10, 200);
    }
}

function draw(){
    if(drawShape == "circle"){
        setStatus("Drawing circle");
        circle(xpos, ypos, cRadius);
        drawShape = "";
    } else if (drawShape == "rectangle"){
        setStatus("Drawing rectangle")
        rect(xpos, ypos, w, h);
        drawShape = "";
    }
}