//---------------------------------------------JQUERY------------------------------------
//-------------------------------SIMON GAME WITH JQUERY----------------------------

const heading = $('<h1>').addClass('simonHeading').text("Press Any Key to Start");
const masterDiv = $('<div id="masterDiv" class="masterDiv"></div>');
const simonGameDiv = $('<div id="simonGameDiv" class="simonGameDiv"></div>');
const tilesDiv = $('<div id="tilesDiv" class="tilesDiv"></div>');
const buttonGreen = $('<button id="green" class="tiles "></button>');
const buttonBlue = $('<button id="blue" class="tiles"></button>');
const buttonRed = $('<button id="red" class="tiles"></button>');
const buttonYellow = $('<button id="yellow" class="tiles"></button>');
const footer = $('<p>').addClass('footer').html("Built on JQUERY &copy; 2023 Michelle Mwangi");
const startButton = $('<button>').text("Start Game").addClass("startButton");
const ButtonDiv = $('<div class = "buttonDiv">');
const userChoices = $('<p>').css("color", "bisque");

var tileColors = ['red', 'green', 'yellow', 'blue'];
var systemClickedTiles = [];
var userClickedTiles = []; 



$('body').append(masterDiv);
$(masterDiv).append(simonGameDiv);
$(simonGameDiv).append(heading);
$('#simonGameDiv').append(tilesDiv);
$(tilesDiv).append(buttonGreen);
$(tilesDiv).append(buttonBlue);
$(tilesDiv).append(buttonRed);
$('#tilesDiv').append(buttonYellow);
$(masterDiv).append(ButtonDiv);
$(ButtonDiv).append(startButton);
$(masterDiv).append(userChoices);
$(masterDiv).append(footer);

function playSounds(name){
    var activateAudio = new Audio ('./SimonSounds/' + name + '.mp3');
    activateAudio.play();
}


function buttonAnimation(activatedButtonID){//accepts the buttonID as a parameter
    var activeButton = $("#" + activatedButtonID)//concatenates buttonID with #sign so we can take that element and save it to a variable which we can then add the class to
    $(activeButton).addClass('activatedButton');//add the class to the specific button
    setTimeout(() => {//set how long the class is activated for, in this case 200ms, then remove the class.
        $(activeButton).removeClass("activatedButton");
        }, 200);
}


$(startButton).on("click", function systemChoice(){
    var randomNumber = Math.ceil(Math.random()*4) -1;
    buttonClicked = tileColors[randomNumber];
    buttonAnimation(buttonClicked);
    systemClickedTiles.push(buttonClicked); 
    console.log(systemClickedTiles) ;       
});

var buttonClickedId;
function onclickActions(buttonClickedId){
    //selects the specific button that has been clicked and saves its ID.
    buttonAnimation(buttonClickedId);
    playSounds(buttonClickedId);
    userClickedTiles.push(buttonClickedId);
    console.log(userClickedTiles.length);
    
          
}

$('.tiles').on('click', function clickedButton(){
    var buttonClickedId = $(this).attr('id');
    onclickActions(buttonClickedId);

});

console.log(userClickedTiles.length);

     

if (userClickedTiles === systemClickedTiles){
    console.log("win!")
}






   
    

   











   












