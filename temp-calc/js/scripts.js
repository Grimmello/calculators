var tempF = null
var tempC = null
var specify = prompt("Enter C to convert Fahrenheit to Celsius or F to convert Celsius to Fahrenheit.");

if(specify === "C") {
   tempC = parseInt(prompt("Enter the Fahrenheit temperature.")), conversionF = 0
   tempF = 0
} 
else if (specify === "F") {
   tempF = parseInt(prompt("Enter the Celsius temperature."))
   tempC  = 0
}

converter(conversionC(tempC) + conversionF(tempF)
function converter (tconvert) }
  alert("your temperature converted is " + tconvert +" degrees.")
}
function  conversionC (tempC) {
   x = tempC - 32  
   return (x * 5) / 9
} 

function conversionF (tempF) {
   x = (tempF * 9) / 5 
   return x + 32
}



