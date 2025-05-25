const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  toggle.textContent = isLight? "Dark" : "Light"

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light-mode");
  toggle.textContent = "Dark";
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let currentInput = "";
let operator = "";
let firstValue = "";
const operators = ["/","x","+","-"];
const symbols = ["/","x","+","-","C","c","."];

const calculation = (value) => {
  if(!isNaN(value) || value === "."){
        if(value === "." && currentInput.includes(".")){
          return;
        }
        currentInput += value;
        display.textContent = currentInput;
      }
      
      else if(operators.includes(value)){
        
        if(currentInput && operator && firstValue){
          const num1 = parseFloat(firstValue);
          const num2 = parseFloat(currentInput);
          let result;
          switch (operator) {
          case '+': result = num1 + num2; break;
          case '-': result = num1 - num2; break;
          case 'x': result = num1 * num2; break;
          case '/': result = num1 / num2; break;
          default: result = "Error";
          }
          firstValue = result;
          operator = value;
          currentInput = "";
          display.textContent = value;
        }
        
        else if(currentInput && !operator){
          operator = value;
          firstValue = currentInput;
          currentInput = "";
          display.textContent = value;
        }
        
      }
      
      else if(value === "=" || value === "Enter"){
        if (!firstValue || !operator || !currentInput) return;
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(currentInput);
        let result;
        switch (operator) {
          case '+': result = num1 + num2; break;
          case '-': result = num1 - num2; break;
          case 'x': result = num1 * num2; break;
          case '/': result = num1 / num2; break;
          default: result = "Error";
        }
        
        display.textContent = result;
        currentInput = result.toString(); // allows chaining
        firstValue = "";
        operator = "";
        
      }
      else if(value === "C" || value ==="c"){
        display.textContent = 0;
        currentInput = "";
        firstValue = "";
        operator = "";
      }
      else if(value === "X" || value === "Backspace"){
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || "0";
      }
}


buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    const value = event.target.textContent; //This gets the text inside the element that was clicked
    
    if(event.target.tagName === "BUTTON"){ //This makes sure the user actually clicked a button
      calculation(value);
    }
  });
});


document.addEventListener("keydown", (event) => {
  if(!isNaN(event.key) || event.key === "Enter"  || symbols.includes(event.key) || event.key === "Backspace"){
    calculation(event.key);
  }
  
});

