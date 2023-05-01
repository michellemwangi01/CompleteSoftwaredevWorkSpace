//----------------------------GENERAL-----------------------------
const masterDiv = document.createElement("div");
masterDiv.setAttribute("id", "masterDiv");
document.body.appendChild(masterDiv);

//----------------------------LOVE CALCULATOR-----------------------------
//----------------------Create elements and their attributes-----------------------------
const loveCalcDiv = document.createElement("div");
loveCalcDiv.setAttribute("id", "loveCalculatorDiv");

const loveTitle = document.createElement("h2");
const loveSubTitle = document.createElement("h4");
loveTitle.innerText = "Love Calculator";
loveSubTitle.innerText =" How compatible are you and your partner?";

const formLove = document.createElement("form");

const labelfirstName = document.createElement("label");
labelfirstName.setAttribute("for", "text");
labelfirstName.setAttribute("class", "inputLabel")
labelfirstName.innerText = "1st Person's Name";


const inputFirstName = document.createElement("input");
inputFirstName.setAttribute("type", "text");
inputFirstName.setAttribute("id", "name1");
inputFirstName.setAttribute("class", "inputLabel")
inputFirstName.setAttribute("placeHolder", "Enter a name")

const labelsecondName = document.createElement("label");
labelsecondName.setAttribute("for", "name1");
labelsecondName.setAttribute("class", "inputLabel")
labelsecondName.innerText = "2nd Person's Name";

const inputSecondName = document.createElement("input");
inputSecondName.setAttribute("type", "text");
inputSecondName.setAttribute("id", "name2");
inputSecondName.setAttribute("placeHolder", "Enter a name")
inputSecondName.setAttribute("class", "inputLabel")

const loveCalculatorButton = document.createElement("button");
loveCalculatorButton.setAttribute("id", "loveCalculator");
loveCalculatorButton.setAttribute("class", "inputLabel")
loveCalculatorButton.innerText  = "Find Compatibility";

const breakLine = document.createElement("br");
const breakLine2 = document.createElement("br");

const loveResult = document.createElement("p");

//--------------------------------Add elements to the DOM-------------------------------
masterDiv.appendChild(loveCalcDiv);
loveCalcDiv.appendChild(loveTitle);
loveCalcDiv.appendChild(loveSubTitle);
loveCalcDiv.appendChild(formLove);
formLove.appendChild(labelfirstName);
formLove.appendChild(inputFirstName);
formLove.appendChild(breakLine);
formLove.appendChild(labelsecondName);
formLove.appendChild(inputSecondName);
formLove.appendChild(breakLine2);
formLove.appendChild(loveCalculatorButton);
loveCalcDiv.appendChild(loveResult);


//------------------------set the form Validation------------------------------------- 09
 
formLove.addEventListener("submit", function(event){
    event.preventDefault()
    var loveScore = Math.floor(Math.random() * 100);
    var person1 = inputFirstName.value;
    var person2 = inputSecondName.value;
    if (loveScore < 30){
        loveResultDescription = `Your compatibility is quite low. Would not recommend:()`;
    }   
    else if (loveScore >30 && loveScore <60){
        loveResultDescription = `Your compatibility is average and could go either way, Life is for the living so have at it!`
    }
    else if(loveScore > 60){
        loveResultDescription = `Your compatiiblity is quite high. You have a high chance of success. All the best!`;
    }
    else{
        loveResultDescription = `Invalid`;
    }
    loveResult.innerText = `${person1} and ${person2}, have a ${loveScore}% chance of compatibility! ${loveResultDescription}`;
});

   
//----------------------------BMI CALCULATOR-----------------------------
//----------------------Create elements and their attributes-----------------------------
const BMICalcDiv = document.createElement("div");
BMICalcDiv.setAttribute("id", "BMICalculatorDiv");

const BMITitle = document.createElement("h2");
const BMISubTitle = document.createElement("h4");
BMITitle.innerText = "BMI Calculator";
BMISubTitle.innerText =" How healthy are you?";

const BMIform = document.createElement("form");

const labelWeight = document.createElement("label");
labelWeight.setAttribute("for", "text");
labelWeight.setAttribute("class", "inputLabel")
labelWeight.innerText = "Weight (Kgs)";


const inputweight = document.createElement("input");
inputweight.setAttribute("type", "number");
inputweight.setAttribute("id", "weight");
inputweight.setAttribute("min", "0");//"min" sets minimum allowed number, in this case, prevents entry of numbers less than 0
inputweight.setAttribute("step", "0.01")//sets number of decimal places
inputweight.setAttribute("class", "inputLabel")
inputweight.setAttribute("placeHolder", "Enter weight")

const labelHeight = document.createElement("label");
labelHeight.setAttribute("for", "height");
labelHeight.setAttribute("class", "inputLabel")
labelHeight.innerText = "Height(CMs)";

const inputHeight = document.createElement("input");
inputHeight.setAttribute("type", "number");
inputHeight.setAttribute("id", "height");
inputHeight.setAttribute("min", "0");
inputHeight.setAttribute("step", "0.01")
inputHeight.setAttribute("placeHolder", "Enter Height")
inputHeight.setAttribute("class", "inputLabel")

const BMICalculatorButton = document.createElement("button");
BMICalculatorButton.setAttribute("id", "BMICalculator");
BMICalculatorButton.setAttribute("class", "inputLabel")
BMICalculatorButton.innerText  = "Calculate BMI";

const breakLine3 = document.createElement("br");
const breakLine4 = document.createElement("br");

const BMIresult = document.createElement("p");
const BMIresultDescription =  document.createElement("p");



//--------------------------------Add elements to the DOM-------------------------------
masterDiv.appendChild(BMICalcDiv);
BMICalcDiv.appendChild(BMITitle);
BMICalcDiv.appendChild(BMISubTitle);
BMICalcDiv.appendChild(BMIform);
BMIform.appendChild(labelWeight);
BMIform.appendChild(inputweight);
BMIform.appendChild(breakLine3);
BMIform.appendChild(labelHeight);
BMIform.appendChild(inputHeight);
BMIform.appendChild(breakLine4);
BMIform.appendChild(BMICalculatorButton);
BMICalcDiv.appendChild(BMIresult);


//Calculate BMI using event listener
BMIform.addEventListener("submit", function(event){
    event.preventDefault();
    var height = Math.pow((inputHeight.value/100), 2) ;
    var weight = inputweight.value;
    var BMI = parseFloat((weight/height).toFixed(2));
    
    if (BMI < 18.5) {
        BMIresultDescription.innerText = `A BMI result of below 18.5 generally indicates an underweight state.   \n
        However, it's important to note that BMI is not a perfect measure of health and doesn't take into account factors such as muscle mass, bone density, and body composition. So just stay healthy:)`  
    }
    else if( BMI >= 18.5 && BMI <= 24.99) {
        BMIresultDescription.innerText = `Your BMI result of ${BMI} generally indicates a healthy weight state.  
       \n
        However, it's important to note that BMI is not a perfect measure of health and doesn't take into account factors such as muscle mass, bone density, and body composition. So just stay healthy:)`
    }
    else if(BMI >= 25 && BMI <= 29.9) {
        BMIresultDescription.innerText = `A BMI result between 24.9 and 29.9 is generally indicates an overweight state.   \n
        However, it's important to note that BMI is not a perfect measure of health and doesn't take into account factors such as muscle mass, bone density, and body composition. So just stay healthy:)`
    }
    else if(BMI > 30) {
        BMIresultDescription.innerText = `A BMI result greater than 30 generally indicates obesity which mey lead to health complications if not addressed as soon as possibe.`;
    }
    else{
        BMIresultDescription.innerText = `Invalid`;
    }
    BMIresult.innerText = `Your BMI is ${BMI}. ${BMIresultDescription.innerText}` ;
    return(BMI);
});

//Calculate BMI using functions
function BMICalculator(heightFunc, weightFunc){
    BMIfunc = (weightFunc/heightFunc).toFixed(2);
    return BMIfunc;
}

//----------------------------IS IT A LEAP YEAR-----------------------------
const leapYearMainDiv = document.createElement("div");
const leapYearTitle = document.createElement("h2");
const leapYearSubTitle = document.createElement("h4");
const leapYearForm = document.createElement("form");
const leapYearLabel = document.createElement("label");
const leapYearInput = document.createElement("input")
const leapYearResult = document.createElement("p");
const leapCalculatorButton = document.createElement("button");
const breakLine5 = document.createElement("br");

masterDiv.appendChild(leapYearMainDiv);
leapYearMainDiv.setAttribute("id", "LeapYearCalculatorDiv");
leapYearMainDiv.appendChild(leapYearTitle);
leapYearMainDiv.appendChild(leapYearSubTitle);
leapYearMainDiv.appendChild(leapYearForm);
leapYearMainDiv.appendChild(leapYearLabel);
leapYearMainDiv.appendChild(leapYearResult);
leapYearForm.appendChild(leapYearLabel);
leapYearForm.appendChild(leapYearInput);
leapYearForm.appendChild(breakLine5);
leapYearForm.appendChild(leapCalculatorButton);



leapYearInput.placeholder = "Enter a year"; //setting the attributes without using .setAttribute
leapYearInput.id = "leapInput";
leapYearInput.max = 9999;
leapYearInput.className = "inputLabel";
leapYearInput.type = "number";
leapCalculatorButton.setAttribute("class", "inputLabel");
leapCalculatorButton.id = "leapFinder";
leapCalculatorButton.type = "submit";


leapYearTitle.innerText = "Leap Year Calculator";
leapYearSubTitle.innerText = "Is it a leap year?";

leapYearLabel.innerText = "Enter a year(yyyy)";
leapCalculatorButton.innerText = "Check Year";



leapYearForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var yearNumber = leapYearInput.value;
    console.log(yearNumber);
    if(yearNumber > 0){
        if (yearNumber % 4 === 0 && (yearNumber % 100 !== 0 || yearNumber % 400 === 0 )){
            leapYearResult.innerText = `It is a leap year! \n A leap year is a year that has an extra day, which is February 29th. It occurs every four years to keep the calendar year aligned with the astronomical year, which is about 365.2422 days long.`;
        }
        else{
            leapYearResult.innerText = `IT is NOT a leap year! \n A leap year is a year that has an extra day, which is February 29th. It occurs every four years to keep the calendar year aligned with the astronomical year, which is about 365.2422 days long.`;
        }
    }
    else{
        leapYearResult.innerText = "Enter a valid year."
        leapYearResult.style.color = "red";
    }
   
    
    
})


//-----------------------FIZZBUZZ-----------------------------------

const fizzBuzzDiv = document.createElement("div");
const fizzBuzzTitle = document.createElement("h2");
const fizzBuzzSubTitle = document.createElement("h4");
const fizzBuzzInput1 = document.createElement("input");
const fizzBuzzInput2 = document.createElement("input");
const fizzBuzzResult = document.createElement("p");
const fizzBuzzButton = document.createElement("button");
const fizzBuzzLabel = document.createElement("label");
const breakLine6 = document.createElement("br");
const resultsDiv = document.createElement("div");


masterDiv.appendChild(fizzBuzzDiv);
fizzBuzzDiv.appendChild(resultsDiv);
resultsDiv.id = "fizzBuzzresultsDiv"

fizzBuzzDiv.setAttribute("id", "fizzBuzzDiv");
fizzBuzzDiv.appendChild(fizzBuzzTitle);
fizzBuzzDiv.appendChild(fizzBuzzSubTitle);
fizzBuzzDiv.appendChild(fizzBuzzLabel);
fizzBuzzDiv.appendChild(breakLine);
fizzBuzzDiv.appendChild(fizzBuzzInput1);
fizzBuzzDiv.appendChild(fizzBuzzInput2);
fizzBuzzDiv.appendChild(fizzBuzzResult);
fizzBuzzDiv.appendChild(fizzBuzzButton);



fizzBuzzInput1.placeholder = "Enter starting number"; //setting the attributes without using .setAttribute
fizzBuzzInput2.placeholder = "Enter final number";
fizzBuzzInput1.className = "inputLabel";
fizzBuzzInput2.className = "inputLabel";
fizzBuzzInput1.type = "number";
fizzBuzzInput2.type = "number";
fizzBuzzButton.setAttribute("class", "inputLabel");
fizzBuzzButton.id = "FizzBuzzButton";
fizzBuzzButton.type = "submit";


fizzBuzzTitle.innerText = "FIZZBUZZ";
fizzBuzzSubTitle.innerText = "Is it divisible by 3, or by 5 or by 3 and 5?";
fizzBuzzLabel.innerText = "Enter a range of numbers (MAX - 50)";
fizzBuzzButton.innerText = "Generate";

function fizzBuzzFunction(){
    var num1 = fizzBuzzInput1.value;
    var num2 = fizzBuzzInput2.value;
    var fizzBuzzOutput = [];
    range = num2 - num1;
    console.log("button is clicked");
    
if (range < 51 && range > 0){
    while(num1 <= num2){
        if (num1 % 3 === 0 && num1 % 5 === 0){
            fizzBuzzOutput.push("FizzBuzz");
        }
        else if (num1 % 5 === 0 && num1 % 3 !== 0 ){
            fizzBuzzOutput.push("Buzz")
        }
        else if (num1 % 3 === 0 && num1 % 5 !== 0){
            fizzBuzzOutput.push("Fizz");
        }
        else{
            fizzBuzzOutput.push(`${num1}`);
        }
        num1++;
    }
    fizzBuzzResult.innerText = fizzBuzzOutput.join(", ");
    

}
else{
    fizzBuzzResult.innerText = "The range between the starting and final number must not be greater than 50. Correct the entered range.";
}
    
}

fizzBuzzButton.addEventListener("click", function() {
    fizzBuzzFunction()
})


//-------------------------------FIBONACCI GENERATOR---------------------------

const fibonacciDiv = document.createElement("div");
const fibonacciTitle = document.createElement("h2");
const fibonacciSubTitle = document.createElement("h4");
const fibonacciInput = document.createElement("input");
const fibonacciResult = document.createElement("p");
const fibonacciButton = document.createElement("button");
const fibonacciLabel = document.createElement("label");
const breakLine7 = document.createElement("br");
const fibonacciResultsDiv = document.createElement("div");


masterDiv.appendChild(fibonacciDiv);

fibonacciDiv.setAttribute("id", "fibonacciDiv");
fibonacciDiv.appendChild(fibonacciTitle);
fibonacciDiv.appendChild(fibonacciSubTitle);
fibonacciDiv.appendChild(fibonacciLabel);
fibonacciDiv.appendChild(breakLine);
fibonacciDiv.appendChild(fibonacciInput);
fibonacciDiv.appendChild(fibonacciResult);
fibonacciDiv.appendChild(fibonacciButton);



fibonacciInput.placeholder = "How many?"; //setting the attributes without using .setAttribute
fibonacciInput.className = "inputLabel";
fibonacciInput.type = "number";
fibonacciInput.min = 0;
fibonacciButton.setAttribute("class", "inputLabel");
fibonacciButton.id = "fibonacciButton";
fibonacciButton.type = "submit";


fibonacciTitle.innerText = "FIBONACCI";
fibonacciSubTitle.innerText = "Generates a series of numbers in which each number is the sum of the two preceding numbers";
fibonacciLabel.innerText = "How many numbers of the sequence would you like to generate?)";
fibonacciButton.innerText = "Generate Sequence";

function fibonacci(){
    var numberToGenerate = fibonacciInput.value;
    var fibonacciNumbers = [0, 1];

    for (var i = 0; i < numberToGenerate; i++){
        newNum = fibonacciNumbers[i] + fibonacciNumbers[i+1]
        fibonacciNumbers.push(newNum);
    }

    fibonacciResult.innerText = fibonacciNumbers.join(", ");

}

fibonacciButton.addEventListener("click", function(){
    fibonacci();
})


