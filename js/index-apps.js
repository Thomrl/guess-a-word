var words = ["orange", "blue", "monkey", "denmark", "sweden", "norway", "ape", "glue", "man", "woman", "boy", "girl", "baby", "adult", "english", "danish", "drums", "drum", "guitar", "code", "friend"];

var theWord = words[Math.floor(Math.random() * words.length)];

console.log(theWord)

var result = theWord.includes("n");
console.log(result)

var showedResult = "";

var i;
for (i= 0; i < theWord.length; i++) {
    showedResult = showedResult+" _ ";
}

aTheWord = []
aSResult = []
maxWrong = 5;
wrong = 0;
checkTheWord = "";
var nothing = "";


for (i=0; i < theWord.length; i++) {
    aTheWord.push(theWord[i]);
    aSResult.push("_");
}

console.log(showedResult);

var foundLetters = [];

document.getElementById("showed-result").textContent = showedResult;

document.getElementById("button").addEventListener('click', check);

var check = function() {
    var userInput = document.getElementById("userInput").value.toString();
    theWord.indexOf(userInput);
    //showedResult = "";
    /*
    for (i=0; i < theWord.length; i++) {
        if (i === theWord.indexOf(userInput)) {
            showedResult = showedResult+userInput;
            foundLetters = foundLetters+userInput;
        } else {
            showedResult = showedResult+" _ ";
        }
    }
    */

    if (theWord.includes(userInput) === true) {
        //foundLetters = foundLetters.push(userInput);
        curLetter = theWord.indexOf(userInput)
        aSResult.splice(curLetter, 1, userInput);
        checkTheWord = checkTheWord.replace(/,/g, "")
    } else {
        wrong = wrong+1;
        document.getElementById("wrongind").textContent = wrong;

    }

    if (wrong === maxWrong) {
        alert("Game Over!\nReload page!");
    };

    if (checkTheWord === aTheWord) {
        alert("Congratiulations, you won!\nReload page to play again!");
    }
    /*for (i=0; i < foundLetters.length; i++) {
        curLetter = foundletters[i];
        letterpos = theWord.indexOf(curLetter)
    }
*/
    document.getElementById("showed-result").textContent = aSResult//showedResult;
    console.log("Clicked!")
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