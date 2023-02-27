const add = function(no1, no2) {
	
  return(no1 + no2);
};

const subtract = function(a, b) {
	
  return (a - b)
};

const sum = function(value1, value2) {
	  if(value1 && value2){
          return(value1 + value2)
      } else if(typeof value1 && value2 == undefined){
          return 0;
      } 
      else{
          return value1;
      }
};


const multiply = function(value1, value2) {
  return value1*value2;

};

const power = function(value1, value2) {
	return value1**value2;
};

const factorial = function(n) {
  let answer = 1
	if(n == 0 || n == 1){
    return answer;
  } else if(n > 1){
    for(let i = n; i >= 1; i--){
      answer = answer * i;
    }   return answer; 
  } else{
      return "please input a positive number";
    
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
