var theWord;
var init = function() {
    //var words = ["orange", "blue", "green", "cool", "monkey", "denmark", "sweden", "norway", "zoo", "ape", "glue", "man", "woman", "boy", "girl", "baby", "adult", "english", "danish", "swedish", "drums", "drum", "guitar", "code", "christmas", "friend"];
    var words = ["Wooman", "hooman", "Swedesh", "idiot"];
    theWord = words[Math.floor(Math.random() * words.length)];
}
init();
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


for (i=0; i < theWord.length; i++) {
    aTheWord.push(theWord[i]);
    aSResult.push(i);
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
        //aSResult.splice(curLetter, 1, userInput);
        //aSResult.replace(/curLetter/g, userInput);
//Replace _ with correct letter
        

        



        checkTheWord = checkTheWord.replace(/,/g, "")
        console.log(userInput);
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