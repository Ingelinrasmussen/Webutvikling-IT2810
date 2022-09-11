//File for making the Canvas box

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Color variables for dog elements
var dog_head = "khaki";
var dog_body = "khaki";
var left_ear = "burlywood";
var right_ear = "burlywood";

//Speed and position for ball
var x = 0;
const speedx = 1.163;

//Speed and position for eyes
var y = 0;
const speedy = 0.048;

//Direction for ball and eyes 
var forward = true;

//Starting animation
requestAnimationFrame(animate);

//Mousemovement
canvas.addEventListener("mousedown", function(e)
{
    getMousePosition(canvas, e);
});

//Animation function
function animate(){

    //Ball and eyes moving forward
    if (forward){
        x+=speedx;
        y+=speedy;
        if (x>=340){
            forward = false;
        }
    }

    //If ball has reached edge, go the other way
    else if (!forward){
        x-=speedx;
        y-=speedy;
        if (x<=0){
            forward = true;
        }
    }

    //Clearing the canvas
    ctx.clearRect(0, 0, 400, 400);

    //Drawing the canvas
    draw(x,y,dog_head,dog_body,right_ear,left_ear);
    requestAnimationFrame(animate);
} 


//The function for drawing the objects
function draw(x,y,dog_head,dog_body,right_ear,left_ear) {
    
    const d = canvas.getContext('2d');

    //Dog body 
    d.beginPath();
    d.arc(205, 370, 100, 0, 2 * Math.PI, false);
    d.fillStyle = dog_body;
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Dog head 
    d.beginPath();
    d.arc(205, 195, 100, 0, 2 * Math.PI, false);
    d.fillStyle = dog_head;
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Left eyeball 
    d.beginPath();
    d.ellipse(160, 155, 19, 14, 0, 0, 2 * Math.PI);
    d.fillStyle = "white";
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Right eyeball 
    d.beginPath();
    d.ellipse(244, 155, 19, 14, 0, 0, 2 * Math.PI);
    d.fillStyle = "white";
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Left eye 
    d.beginPath();
    d.ellipse(y+155, 158, 12, 10, 0, 0, 2 * Math.PI);
    d.fillStyle = "teal";
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Right eye 
    d.beginPath();
    d.ellipse(y+237, 158, 12, 10, 0, 0, 2 * Math.PI);
    d.fillStyle = "teal";
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Upper nose
    d.beginPath();
    d.ellipse(200, 202, 32, 12, 0, 0, 2 * Math.PI);
    d.fillStyle = "black";
    d.stroke();
    d.fill();

    //Lower nose
    d.beginPath();
    d.ellipse(200, 215, 12, 7, 0, 0, 2 * Math.PI);
    d.fillStyle = "black";
    d.stroke();
    d.fill();

    //Right ear
    d.beginPath();
    d.ellipse(320, 145, 35, 77, - Math.PI / 4, 0, 2 * Math.PI);
    d.fillStyle = right_ear;
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Left ear 
    d.beginPath();
    d.ellipse(100, 145, 35, 77, Math.PI / 4.5, 0, 2 * Math.PI);
    d.fillStyle = left_ear;
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Mouth
    d.beginPath();
    d.ellipse(200, 240, 17, 43, Math.PI / 2, 0, 2 * Math.PI);
    d.lineWidth = 5;
    d.stroke();

    //Line 1
    d.beginPath();
    d.strokeStyle = 'black';
    d.moveTo(255, 204);
    d.lineTo(313, 205);
    d.lineWidth = 3;
    d.stroke();

    //Line 2
    d.beginPath();
    d.strokeStyle = 'black';
    d.moveTo(255, 193);
    d.lineTo(300, 168);
    d.lineWidth = 3;
    d.stroke();

    //Line 3
    d.beginPath();
    d.strokeStyle = 'black';
    d.moveTo(255, 217);
    d.lineTo(306, 240);
    d.lineWidth = 3;
    d.stroke();

    //Line 4
    d.beginPath();
    d.strokeStyle = 'black';
    d.moveTo(110, 168);
    d.lineTo(156, 193);
    d.lineWidth = 3;
    d.stroke();

    //Line 5
    d.beginPath();
    d.strokeStyle = 'black';
    d.moveTo(110, 205);
    d.lineTo(157, 204);
    d.lineWidth = 3;
    d.stroke();

    //Line 6
    d.beginPath();
    d.strokeStyle = 'black';
    d.moveTo(110, 240);
    d.lineTo(162, 217);
    d.lineWidth = 3;
    d.stroke();

    //Teeth 1
    d.beginPath();
    d.rect(180, 225, 15, 18);
    d.fillStyle = "white";
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Teeth 2
    d.beginPath();
    d.rect(200, 225, 15, 18);
    d.fillStyle = "white";
    d.lineWidth = 1;
    d.stroke();
    d.fill();

    //Ball 
    d.beginPath();
    d.arc(x+30, 370, 30, 0, 2 * Math.PI, false)
    d.fillStyle = "skyblue";
    d.lineWidth = 1;
    d.stroke();
    d.fill();

}

//Function for mouseclick position
function getMousePosition(canvas, event) {    
    const rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    //Change color if click inside the dog head
    if (x>=120 && x<=290 && y>=95 && y<=295){
        if (dog_head == "khaki"){
            dog_head = "lawngreen";
        }
        else if (dog_head == "lawngreen"){
            dog_head = "khaki";
        }
    }

    //Change color if click inside the dog body
    if (x>=105 && x<=305 && y>=270 && y<=470){
        if (dog_body == "khaki"){
            dog_body = "lawngreen";
        }
        else if (dog_body == "lawngreen"){
            dog_body = "khaki";
        }
    }

    //Change color if click inside the dogs right ear
    if (x>=290 && x<=360 && y>=68 && y<=222){
        if (right_ear == "burlywood"){
            right_ear = "lawngreen";
        }
        else if (right_ear == "lawngreen"){
            right_ear = "burlywood";
        }
    }


    //Change color if click inside the dogs left ear
    if (x>=65 && x<=120 && y>=68 && y<=222){
        if (left_ear == "burlywood"){
            left_ear = "lawngreen";
        }
        else if (left_ear == "lawngreen"){
            left_ear = "burlywood";
        }
    }
    draw(x,y,dog_head,dog_body,right_ear,left_ear);
};


