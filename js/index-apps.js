var theWord;
aTheWord = [];
aSResult = [];
aShowedResult = ["p", "l", "a", "c", "h", "o", "l", "d", "e", "r"];
var showedResult = "";
var i;
maxWrong = 5;
wrong = 0;
checkTheWord = "";
var foundLetters = [];
var userInput = " ";


var init = function() {
    var words = ["super", "power", "paper", "pen", "awesome", "dice", "ball", "computer", "phone", "facebook", "twitter", "instagram", "car", "bank", "orange", "blue", "green", "cool", "monkey", "zoo", "ape", "glue", "man", "woman", "boy", "girl", "baby", "adult", "kid", "child", "english", "danish", "swedish", "drums", "drum", "guitar", "code", "christmas", "friend"];
    //var words = ["wooman", "hooman", "swedesh", "idiot"];
    theWord = words[Math.floor(Math.random() * words.length)];
    for (i=0; i < theWord.length; i++) {
        aTheWord.push(theWord[i]);
        //console.log(aTheWord)
        aSResult.push(i);
    }
    console.log(aTheWord)
    
    showResultAsLines();
    
    document.getElementById("showed-result").textContent = showedResult;
}
init();
console.log(theWord)
console.log(aTheWord)
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




function check() {
    var userInput = document.getElementById("userInput").value.toString();
    userInput = userInput.toLowerCase();
    
    
    if (theWord.includes(userInput) === true) { //If the userinput matches a letter
        for (i=0; i < aTheWord.length; i++) {
            if (aTheWord[i].includes(userInput)) { //find that letter
                aSResult.splice((i), 1, userInput);  //replace number with userinput
                aShowedResult = aShowedResult.splice(i, 1, userInput);
                
            }
        }
        console.log(userInput);
    } else {
        wrong = wrong+1;
        document.getElementById("wrongind").textContent = wrong;
        
    }

    showResultAsLines();
    document.getElementById("showed-result").textContent = showedResult//showedResult;
    
    if (wrong === maxWrong) {
        alert("Game Over!\nReload page the play again!");
    };

    checkThis = aSResult.join("");
    
    if (checkThis === theWord) {
        alert("Congratiulations, you won!\nReload page to play again!");
    }
    
    
    console.log("Clicked!")
    document.getElementById("#userInput").text= " ";
};




//Enter
window.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    check(e);
}
});

function validate(e) {
    var text = e.value;
    //validation of the input...
}