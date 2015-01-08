/*
     Name: Ashley Crane
     Date: 1/7/2015
     Class & Section:  WIA-1151
     Comments: "HTML5 Canvas Drawing"
 */

if(Modernizr.canvas){
    
    var theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");
    
/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "blue";
    ctx.lineWidth = 3;

    ctx.fillRect(0, 0, 50, 100);
    ctx.strokeRect(0, 0, 50, 100);
/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
    var theCanvas2 = document.getElementById("Canvas2");
    var ctx2 = theCanvas2.getContext("2d");
    var degrees = 360;
    var radians = (degrees/180)*Math.PI;
    
    ctx2.strokeStyle = "#000";
    ctx2.fillStyle = "rgba(255, 0, 0, .5)";

    ctx2.beginPath();
    ctx2.arc(50,50, 20, 0, radians);
    ctx2.fill();
    
    ctx2.beginPath();
    ctx2.arc(50, 50, 30, 0, radians);
    ctx2.stroke();
    

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
    var theCanvas3 = document.getElementById("Canvas3");
    var ctx3 = theCanvas3.getContext("2d");

//Function to create the star. Also rotates the star to make the points centered.
    
    function star(ctx, x, y, r, np, inset)
{
    ctx3.beginPath();
    ctx3.translate(x, y);
    ctx3.moveTo(0,0-r);
    for (var i = 0; i < np; i++)
    {
        ctx.rotate(Math.PI / np);
        ctx.lineTo(0, 0 - (r*inset));
        ctx.rotate(Math.PI / np);
        ctx.lineTo(0, 0 - r);
        
    }
    ctx3.closePath();
    ctx3.fillStyle = "#118EE0";
    ctx3.strokeStyle = "#084065";
    ctx3.lineWidth = 5;
    ctx3.fill();
    ctx3.stroke();
}
star(ctx3, 100, 100, 90, 5, .5);
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
    var theCanvas4 = document.getElementById("Canvas4");
    var ctx4 = theCanvas4.getContext("2d");
    var halfC = 180;
    var rad = (halfC/180)*Math.PI;
    ctx4.strokeStyle = "#34093F";
    ctx4.fillStyle = "#69127F";
    ctx4.lineWidth = 3;
    ctx4.beginPath();
    ctx4.arc(100,100, 70, 0, rad, true);
    ctx4.stroke();
    ctx4.moveTo(29,100);
    ctx4.bezierCurveTo(50, 80, 80, 80, 99, 96);
    ctx4.stroke();
    ctx4.moveTo(96, 96);
    ctx4.bezierCurveTo(120, 80, 150, 80, 170, 99);
    ctx4.stroke();
    
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
    var theCanvas5 = document.getElementById("Canvas5");
    var ctx5 = theCanvas5.getContext("2d");
    var string = "Hi There!!"
    ctx5.fillStyle ="#237A8C";
    ctx5.strokeStyle="#6F158C";
    ctx5.lineWidth = 2;
    ctx5.font = "30pt Georgia";
    ctx5.fillText(string, 100, 100);
    ctx5.strokeText(string, 100, 100);
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
    var theCanvas6 = document.getElementById("Canvas6");
    var ctx6 = theCanvas6.getContext("2d");
    var img = new Image();
    img.src = "image/logo.png"
    img.addEventListener("load", function() {
    ctx6.drawImage(img, 0, 0);
    
    //Scaled Image    
    ctx6.drawImage(img, 100, 1200, 1650, 544);
    
    //Sliced image
    ctx6.drawImage(img, 810, 800, 95, 100, 100, 1800, 190, 280)
}, false);

    
    
    
    

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
    //rectangle for handle on umbrella
    var theCanvas7 = document.getElementById("Canvas7");
    var ctx7 = theCanvas7.getContext("2d");
    ctx7.strokeStyle = "#34093F";
    ctx7.fillStyle = "#69127F";
    ctx7.lineWidth = 3;
    
    
    ctx7.strokeRect(93, 80, 10, 100);
    
 
    var halfC = 180;
    var rad = (halfC/180)*Math.PI;
    
    ctx7.beginPath();
    ctx7.arc(100,100, 90, 0, rad, true);
    ctx7.stroke();
    ctx7.moveTo(9,100);
    ctx7.bezierCurveTo(50, 50, 80, 80, 99, 96);
    ctx7.stroke();
    ctx7.moveTo(96, 96);
    ctx7.bezierCurveTo(120, 70, 160, 60, 190, 99);
    ctx7.stroke();
    
    //Star on the umbrella
    
     function star(ctx7, x, y, r, np, inset)
{
    ctx7.beginPath();
    ctx7.translate(x, y);
    ctx7.moveTo(0,0-r);
    for (var i = 0; i < np; i++)
    {
        ctx7.rotate(Math.PI / np);
        ctx7.lineTo(0, 0 - (r*inset));
        ctx7.rotate(Math.PI / np);
        ctx7.lineTo(0, 0 - r);
        
    }
    ctx7.closePath();
    ctx7.fillStyle = "#118EE0";
    ctx7.strokeStyle = "#084065";
    ctx7.lineWidth = 5;
    ctx7.fill();
    ctx7.stroke();
}
star(ctx7, 100, 50, 30, 5, .5);



    
}else{
   alert("Unfortunately, your browser does not support canvas."); 
}