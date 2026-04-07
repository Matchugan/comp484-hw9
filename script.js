// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
var date = new Date();

// 2. Get the current month, day, and year
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();

// 3. Adjust month if needed (JavaScript months are 0-based)
month++;

// 4. Add leading zeros to month/day if needed
if(month < 10){
    month = "0" + month;
}
else{
    //do nothing
}

if(day < 10){
    day = "0" + day;
}

// 5. Create a string in the format: "Today is MM/DD/YYYY"
var stringDate = "Today is " + month + "/" + day + "/" + year;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").innerHTML = stringDate;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

var num1 = "42";
var num2 = "43";
var decimalNum = "3.14";
var textString = "papaya";

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

newNum1= Number(num1);

if(Number.isNaN(newNum1)){
    console.log("is NaN");
}

if(Number.isInteger(newNum1)){
    console.log("is integer");
}

newNum2 = Number(num2);

if(Number.isNaN(newNum2)){
    console.log("is NaN");
}

if(Number.isInteger(newNum2)){
    console.log("is integer");
}

newDecimal = Number(decimalNum);

if(Number.isNaN(newDecimal)){
    console.log("is NaN");
}

if(Number.isInteger(newDecimal)){
    console.log("is integer");
}

newString = Number(textString);

if(Number.isNaN(newString)){
    console.log("is NaN");
}

if(Number.isInteger(newString)){
    console.log("is integer");
}

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

function valueAnalysis(given){
    var convertedValue = Number(given);
    var valueIsNaN = Number.isNaN(convertedValue);
    var valueIsInteger = Number.isInteger(convertedValue);

    if(valueIsNaN){
        console.log(given + " is NaN");
    }
    else if(valueIsInteger){
        console.log(given + " is an Integer");
    }
    else{
        console.log(given + " is a Decimal");
    }

    return "Original: '" + given + "' -> Converted: " + convertedValue + " -> isNaN: " + valueIsNaN + " -> isInteger: " + valueIsInteger;

}

var num1Sentence = valueAnalysis(num1);
var num2Sentence = valueAnalysis(num2);
var decimalSentence = valueAnalysis(decimalNum);
var textSentence = valueAnalysis(textString);


// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

var combinedString = num1Sentence + "<br>" + num2Sentence + "<br>" + decimalSentence + "<br>" + textSentence;

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

document.getElementById("numberConversionOutput").innerHTML = combinedString;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//

var nuhmba1 = 1111111;
var nuhhmba2 = 2;
var nuhhhmba3 = 3;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//

console.log(nuhhmba2 + nuhhhmba3);
console.log(nuhhhmba3 * nuhhmba2);

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//

console.log(nuhmba1.toLocaleString());



// 4. Build a string showing your results
//

var nuhmAddition = nuhhmba2 + nuhhhmba3;
var nuhmMult = nuhhhmba3 * nuhhmba2;
var nuhmToLocaleString = nuhmba1.toLocaleString();

var mathNuhmbas = "Additon: " + nuhhmba2 + " + " + nuhhhmba3 + " = " + nuhmAddition + "<br>" + 
                  "Multiplication: " + nuhhmba2 + " * " + nuhhhmba3 + " = " + nuhmMult + "<br>" + 
                  "toLocaleString: Population number " + nuhmba1 + " = " + nuhmToLocaleString + " people <br>";

// 5. Display the results inside the element with id="mathOutput"

document.getElementById("mathOutput").innerHTML = mathNuhmbas;




// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)