var theWord;
aTheWord = [];
aSResult = [];
aShowedResult = [];
var showedResult = "";
var i;
maxWrong = 8;
wrong = 0;
checkTheWord = "";
var foundLetters = [];
var userInput = " ";
var words = ["keyboard", "bell", "space", "universe", "grass", "flower", "nuts", "hero", "wheel", "zoom", "camera", "video", "chat", "super", "water", "fire", "wind", "earth", "mars", "power", "paper", "pen", "awesome", "dice", "ball", "computer", "phone", "facebook", "twitter", "instagram", "car", "bank", "orange", "blue", "green", "yellow", "black", "cool", "happy", "sweet", "monkey", "dog", "cat", "mouse", "rat", "zoo", "ape", "glue", "man", "woman", "boy", "girl", "baby", "adult", "kid", "child", "drum", "guitar", "code", "christmas", "winter", "summer", "easter", "spring"];    
var wordsColors = ["blue", "red", "yellow", "pink", "black", "white", "green", "purple", "brown", "grey"];
var gamePlaying = true;


var init = function() {
    gamePlaying = true;
    wrongLetters = [];
    displayedWrongLetters = "";
    document.getElementById("wrongind").textContent = wrong;
    document.getElementById("wrong-letters").textContent = displayedWrongLetters;
    document.getElementById("hmimg").src = "img/1-hangman.jpg";
    document.querySelector(".maps").style.display = "none";
    theWord = words[Math.floor(Math.random() * words.length)];
    for (i=0; i < theWord.length; i++) {
        aTheWord.push(theWord[i]);
        aSResult.push(i);
    }
    //console.log(aTheWord)
    
    showResultAsLines();
    
    document.getElementById("showed-result").textContent = showedResult;
}
init();
//console.log(theWord)
//console.log(aTheWord)
document.querySelector("#button").addEventListener('click', check);


function showResultAsLines() {
    //Show numbers as _ in the results
    for (i=0; i < aSResult.length; i++) {
        if (Number.isInteger(aSResult[i])) {
            aSResult.splice(i, 1, "_");
        }
    }
    
    console.log("Show Result = " + aSResult)
    
    showedResult = aSResult;
    showedResult = showedResult.join(" ");
    showedResult = showedResult.toUpperCase();
    showedResult.replace(/,/g, " ");
}

console.log(showedResult);


//Hangman drawings

//default settings
document.getElementById("hmimg").style.display = "none";


//on load
toggleHM = localStorage.getItem('toggleHM');

if (toggleHM === "true") {
    document.getElementById("hmimg").style.display = "block";
} else if (toggleHM === "false") {
    document.getElementById("hmimg").style.display = "none";
} else {
    localStorage.setItem("toggleHM", "false");
    toggleHM = localStorage.getItem('toggleHM');
}


//toggle on click
document.getElementById("toggle-hangman").addEventListener("click", function() {
    if (toggleHM === "false") {
        document.getElementById("hmimg").style.display = "block";
        localStorage.setItem("toggleHM", "true");
        toggleHM = localStorage.getItem('toggleHM');
    } else if (toggleHM === "true") {
        document.getElementById("hmimg").style.display = "none";
        localStorage.setItem("toggleHM", "false");
        toggleHM = localStorage.getItem('toggleHM');
    } else {
        localStorage.setItem("toggleHM", "true");
    }
})

//Hangman section end..

function newGame(){
    var theWord;
    aTheWord = [];
    aSResult = [];
    aShowedResult = [];
    var showedResult = "";
    var i;
    maxWrong = 8;
    wrong = 0;
    checkTheWord = "";
    var foundLetters = [];
    var userInput = " ";
    var gamePlaying = true;
    init();
};

document.getElementById("new-game").addEventListener("click", function() {
    newGame();
    
});


wrongLetters = [];


function check() {
    if (gamePlaying === true) {
        var userInput = document.getElementById("userInput").value.toString();
        userInput = userInput.toLowerCase();
        
        
        if (theWord.includes(userInput) === true) { //If the userinput matches a letter
            for (i=0; i < aTheWord.length; i++) {
                if (aTheWord[i].includes(userInput)) { //find that letter
                    aSResult.splice((i), 1, userInput);  //replace number with userinput
                    aShowedResult = aShowedResult.splice(i, 1, userInput);
                }
            }
        } else {
            //Show how many mistakes made.
            wrong = wrong+1;
            document.getElementById("wrongind").textContent = wrong;
            //Show the wrong letters.
            wrongLetters.push(userInput, " ")
            displayedWrongLetters = wrongLetters.join();
            displayedWrongLetters = displayedWrongLetters.replace(/,/g, " ");
            document.getElementById("wrong-letters").textContent = displayedWrongLetters;
            //change image
            document.getElementById("hmimg").src = "img/"+(wrong+1)+"-hangman.jpg";
            
            
        }
        
        showResultAsLines();
        document.getElementById("showed-result").textContent = showedResult//showedResult;
        
        if (wrong === maxWrong) {
            //alert("Game Over!\nReload page the play again!");
            document.getElementById("win-lose-text").textContent = "Game Over!"
            document.querySelector(".maps").style.display = "block";
            gamePlaying = false;
        };
        
        checkThis = aSResult.join("");
        
        if (checkThis === theWord) {
            //alert("Congratiulations, you won!\nReload page to play again!");
            document.getElementById("win-lose-text").textContent = "Congratiulations! You Won!"
            document.querySelector(".maps").style.display = "block";
            gamePlaying = false;
        }
        
        
        console.log("Clicked!")
        document.getElementById("userInput").text= "";
        
        
    }
    
};

//////////////////////////

//Planned

//alternative to alerts //Done

//Try other fonts

//categories

//other theme

//////////////////////////

//Enter
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    
    if (gamePlaying === true) {
        check(e);
    } else {
        newGame(e);
    }
    
}
});

function validate(e) {
    var text = e.value;
    //validation of the input...
}