const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn"); 
const output = document.getElementById("output");

const result = () => {
  const romanMap = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  if(number.value === ""){
    output.textContent = "Please enter a valid number";
    return;
  } else if(number.value <= 0){
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if(number.value >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  let container = []
  for(let char of number.value){
    container.push(char);
  }
  
  let newContainer = [];
  let i = container.length;
  for(let char of container){
    if (char !== "0") { 
    newContainer.push(Number(`${char}${"0".repeat(i - 1)}`));
  }
  i--; 
  }

  let romanContainer = []; 
  for(let char of newContainer){
    const roman = romanMap.find((item) => item.value === char);
    if(roman){
      romanContainer.push(roman.symbol);
    } else{
      const units = char / Number(char.toString().replace(/0+$/, ""));
      const num = char / units;
      if(num > 5){
        const newNum = num - 5
        const newRomanFive = romanMap.find((item) => item.value === 5 * units);
         const newRoman = romanMap.find((item) => item.value === units);
        romanContainer.push(newRomanFive.symbol)
      romanContainer.push(newRoman.symbol.repeat(newNum));
      } else{
        const newRoman = romanMap.find((item) => item.value === units);
      romanContainer.push(newRoman.symbol.repeat(num));
      }
      
    }
    
  }
  console.log(romanContainer.join(""));
  output.textContent = romanContainer.join("");



}

convertBtn.addEventListener("click", result)
