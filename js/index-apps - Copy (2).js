var theWord;
aTheWord = []
aSResult = []
aShowedResult = [];

var init = function() {
    //var words = ["orange", "blue", "green", "cool", "monkey", "denmark", "sweden", "norway", "zoo", "ape", "glue", "man", "woman", "boy", "girl", "baby", "adult", "english", "danish", "swedish", "drums", "drum", "guitar", "code", "christmas", "friend"];
    var words = ["Wooman", "hooman", "Swedesh", "idiot"];
    theWord = words[Math.floor(Math.random() * words.length)];
    for (i=0; i < theWord.length; i++) {
        aTheWord.push(theWord[i]);
        aSResult.push(i);
    }
    
    //Show numbers as _ in the results
    for (i=0; i < aSResult.length; i++) {
        if (Number.isInteger(aSResult[i])) {
            aShowedResult.push("_");
        }
    }
    
    
    document.getElementById("showed-result").textContent = aShowedResult;
}
init();
console.log(theWord)

var showedResult = "";
var i;
maxWrong = 5;
wrong = 0;
checkTheWord = "";
var foundLetters = [];


//Show numbers as _ in the results
for (i=0; i < aSResult.length; i++) {
    if (Number.isInteger(aSResult[i])) {
        aShowedResult.push("_");
    }
}


console.log(showedResult);




var check = function() {
    var userInput = document.getElementById("userInput").value.toString();
    theWord.indexOf(userInput);
    
    
    if (theWord.includes(userInput) === true) {
        


        
        
        
        
        
        
        
        
        
        console.log(userInput);
    } else {
        wrong = wrong+1;
        document.getElementById("wrongind").textContent = wrong;
        
    }
    
    if (wrong === maxWrong) {
        alert("Game Over!\nReload page!");
    };
    /*
    if (checkTheWord === aTheWord) {
        alert("Congratiulations, you won!\nReload page to play again!");
    }
*/


    /*for (i=0; i < foundLetters.length; i++) {
        curLetter = foundletters[i];
        letterpos = theWord.indexOf(curLetter)
    }
    */

//Show numbers as _ in the results
for (i=0; i < aSResult.length; i++) {
    if (Number.isInteger(aSResult[i])) {
        aShowedResult.push("_");
    }
}


    document.getElementById("showed-result").textContent = aShowedResult//showedResult;
    console.log("Clicked!")
};


document.getElementById("button").addEventListener('click', check);


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