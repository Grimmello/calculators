var tempF = 0
var tempC = 0 
var newTemp = 0
var specify = prompt("Enter C to convert Fahrenheit to Celsius or F to convert Celsius to Fahrenheit.");

function converter (tconvert) {
  alert("your temperature converted is " + tconvert +" degrees.")
}
function  conversionC (tempC) {
   return (((tempC - 32) * 5) / 9);
} 

function conversionF (tempF) {
    return (((tempF * 9) / 5 ) + 32);
}

if(specify === "C") {
   tempC = parseInt(prompt("Enter the Fahrenheit temperature."))
   tempF = 0
   newTemp = conversionC(tempC)
} 
else if (specify === "F") {
   tempF = parseInt(prompt("Enter the Celsius temperature."))
   tempC  = 0
   newTemp = conversionF(tempF)
}

converter(newTemp)



