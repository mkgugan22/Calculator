
 const display = document.getElementById('display');

 function appendButton(input) {
     display.value += input;
 }
 
 function calculate() {
     try {
         const ans = eval(display.value);
         display.value = ans;
     } catch (error) {
         display.value = "Error";
     }
 }
 
 function clearDisplay() {
     display.value = "";
 }
 