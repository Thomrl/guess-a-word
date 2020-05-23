var theWord;
aTheWord = [];
aSResult = [];
aShowedResult = ["p", "l", "a", "c", "h", "o", "l", "d", "e", "r"];
var aNeededLetters = [];
var showedResult = "";
var i;
maxWrong = 5;
wrong = 0;
checkTheWord = "";
var foundLetters = [];
var userInput = " ";


var init = function() {
    var words = ["orange", "blue", "green", "cool", "monkey", "denmark", "sweden", "norway", "zoo", "ape", "glue", "man", "woman", "boy", "girl", "baby", "adult", "english", "danish", "swedish", "drums", "drum", "guitar", "code", "christmas", "friend"];
    //var words = ["wooman", "hooman", "swedesh", "idiot"];
    theWord = words[Math.floor(Math.random() * words.length)];
    for (i=0; i < theWord.length; i++) {
        aTheWord.push(theWord[i]);
        //console.log(aTheWord)
        aSResult.push(i);
    }
    console.log(aTheWord)
    aNeededLetters = aTheWord;
    //aNeededLetters = aNeededLetters.sort(); 
    
    //Show numbers as _ in the results
    //check()
    
    showResultAsLines();
    
    document.getElementById("showed-result").textContent = showedResult;
}
init();
console.log(theWord)
console.log(aTheWord)
console.log(aNeededLetters)
document.querySelector("#button").addEventListener('click', check);


function showResultAsLines() {
    //Show numbers as _ in the results
    //cul = userInput.value.toString();
    for (i=0; i < aSResult.length; i++) {
        if (Number.isInteger(aSResult[i])) {
            aSResult.splice(i, 1, "_");
        } else { 
            //aSResult.push("_");
        }/* else if(userInput == this.aShowedResult) {
            aShowedResult.splice(i, 1, cul);
        } else {
            console.log("hej")
        }*/
    }

    console.log("Show Result = " + aSResult)

    showedResult = aSResult;
    showedResult = showedResult.join(" ");
    showedResult.replace(/,/g, " ");
}


function checkIfWin() {

    if (checkTheWord === aTheWord) {
        alert("Congratiulations, you won!\nReload page to play again!");
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

//get a list of needed letters.




//make the needed letters sorted





//add correct letters into a string via an array to check if it matches the needed letters (also sort this)





console.log(showedResult);




function check() {
    var userInput = document.getElementById("userInput").value.toString();
    //theWord.indexOf(userInput);
    
    
    if (theWord.includes(userInput) === true) { //If the userinput matches a letter
        for (i=0; i < aTheWord.length; i++) {
            //console.log("Index = " + i + ".. Letter = " + aTheWord[i])
            if (aTheWord[i].includes(userInput)) { //find that letter
                aSResult.splice((i), 1, userInput);  //replace number with userinput
                //console.log(i + aSResult[i]);
                //console.log(aShowedResult)
                aShowedResult = aShowedResult.splice(i, 1, userInput);
                
            }
        }
        /*
        if (aTheWord[0].includes(userInput)) {
            aSResult.splice((0), 1, userInput);
        }
        */

        console.log(userInput);
    } else {
        wrong = wrong+1;
        document.getElementById("wrongind").textContent = wrong;
        
    }
    
    if (wrong === maxWrong) {
        alert("Game Over!\nReload page the play again!");
    };

    checkThis = aSResult.join("");
    
    if (checkThis === theWord) {
        alert("Congratiulations, you won!\nReload page to play again!");
    }
    
    
    
    /*for (i=0; i < foundLetters.length; i++) {
        curLetter = foundletters[i];
        letterpos = theWord.indexOf(curLetter)
    }
    */
    
   showResultAsLines();
    
    
    document.getElementById("showed-result").textContent = showedResult//showedResult;
    console.log("Clicked!")
    document.getElementById("user-input").text= "";
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