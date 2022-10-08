function FirstFactorial(num) { 
  
    // code goes here  
    return (num === 1 ? 1 : num * FirstFactorial(num - 1));

  
  }
     
  // keep this function call here 
FirstFactorial(4);