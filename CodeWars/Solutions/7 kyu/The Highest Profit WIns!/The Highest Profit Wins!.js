function minMax(arr){
  
    return [Math.min(...arr),Math.max(...arr)]
    
  }
  
  // The Math method normaly only accepts distinct variables, which does not include arrays.
  // the ... in front of the array coverts an array into distinct variables. 
  // Pretty usefull!