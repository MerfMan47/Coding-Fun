function solution (roman) {

  let sum = 0
  
  let roArr = Array.from(roman)
  //This converts the inputstring into an array to give access to the reduce() method
  
  const numArr = roArr.map(convert)
  //This maps the array to a new one and assigns true numbers to the roman numerals
  
  function convert(roNum){
    if(roNum == 'I'){
      return 1
    }else if(roNum == 'V'){
      return 5
    }else if(roNum == 'X'){
      return 10
    }else if(roNum == 'L'){
      return 50
    }else if(roNum == 'C'){
      return 100
    }else if(roNum == 'D'){
      return 500
    }else if(roNum == 'M'){
      return 1000
    }
  }
  //Function to assign values to the roman numerals

  
  if(numArr.length == 1){
    return numArr[0]
  }
  //this checks if the array is only a single character long as they would not work with the reduce method and so it is returned
  
  function addAndNeg(prevous, current, index){
    if(current < numArr[index + 1]){
      sum = sum -current
    }else{
      sum += current
    }
  } 
  //This function checks for lower values before bigger values which would indicated that they are negative
  //The numbers are then added or subtracted based on their reletive position
  
  numArr.reduce(addAndNeg)
  //line to activate the above function
  
  if(numArr[0] >= numArr[1]){
    sum += numArr[0]
  }else{
    sum = sum -numArr[0]
  }
  //Because the reduce method does not grab the first value in the array without an inital value this supplements that
  //The if statement checks whether the first value should be added or subtracted from the sum by checking the value saize against the next value in the array
  //because the single value arrays have already been filterd out we need not worry about not having a value to check against
  
	return sum;
}

