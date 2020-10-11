//assigned inital colours
var numberOfSquares =6;
let colours = generatColours(numberOfSquares);



/* ["rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(255, 0, 255)",
              "rgb(0, 255, 255)",
              "rgb(0, 0, 255)"]; */

let squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var message = document.getElementById("message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#Easy");
var hardButton = document.querySelector("#hard");



// adding function to resetbutton
resetButton.addEventListener("click",function(){
    numberOfSquares = 6;
    //genrate new colour
    colours=generatColours(numberOfSquares);
    //pick new colour
    pickedColour = pickColour();
    //changing name of heading
    colourDisplay.textContent = pickedColour;
    
    //changin the colours of square
    for( var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display= "block";
        easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    message.textContent = "Try";
        
}
});






 

//chanding the colour-text in heading
colourDisplay.textContent = pickedColour;


//adding initial colours
for( var i = 0; i<squares.length;i++){
    squares[i].style.backgroundColor = colours[i];


    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab coloour of clicked sqaure
       let clickedColour = this.style.backgroundColor;
       
       //compare colours
       if(clickedColour === pickedColour){
           message.textContent = "Correct";
           //all square in same colour
           rightColour(clickedColour);
           //heading 
         //  heading.style.backgroundColor = "black";
           resetButton.textContent = "Play Agian?";
       }
       else{
           
           this.style.backgroundColor = "#232323";
           message.textContent = "Try Again";
       }
    });
    
}

//function to change all colour to the right colour
function rightColour(colourAll){
    //loop through all the sqaures
    for(var i = 0; i<squares.length;i++){
        //change colours to match right colour
        squares[i].style.background = colourAll;

    };

}
//randomize the colour array selection
function pickColour(){
     let random = Math.floor(Math.random() * colours.length);
     return colours[random];


}

//randomize the colours in array
function generatColours(number){
    //make an array
    let arr = [];
    
    for(var i= 0;i<number;i++){
        //add random colour and push into the array
        arr.push(randomColour());

    }
    //return that array
    return arr;

}

function randomColour(){
    //pick a red 0-255
    let red = Math.floor(Math.random() * 256);
    //pick a green 0-255
    let green = Math.floor(Math.random() * 256);
    //pick a blue 0-255
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + "," + " " + green + "," + " " + blue + ")";

}

easyButton.addEventListener("click",function(){
    numberOfSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colours=generatColours(numberOfSquares);
    pickedColour = pickColour();
    //changing name of heading
    colourDisplay.textContent = pickedColour;

    for( var i = 0; i<squares.length;i++){
        if(i<3){
            squares[i].style.backgroundColor = colours[i];
        }
        else
        squares[i].style.display ="none";
        message.textContent = "Try";
    }}
    );

//adding funtion to hard button
hardButton.addEventListener("click",function(){
    numberOfSquares = 6;
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colours=generatColours(numberOfSquares);
    //pick new colour
    pickedColour = pickColour();
    //changing name of heading
    colourDisplay.textContent = pickedColour;
      
    
    //changin the colours of square
    for( var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display= "block";
        message.textContent = "Try";
    }
});


