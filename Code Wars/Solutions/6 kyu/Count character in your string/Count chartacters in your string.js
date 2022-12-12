function count (string) {  
  
    function countChars(str){
      //create object
      let countObj = {}
      //loop -> check val exists ? val++ : val-1
      for(const c of str){
        if(countObj[c]){
          countObj[c]++
        }else{
          countObj[c] = 1
        }
      }
      return countObj
    }
    
    
    console.log(countChars(string))
    return countChars(string)
    
    
    console.log(countChars('aba'),"{'a': 2, 'b': 1}")
    console.log(countChars('dog'),"{'d': 1, 'o': 1, 'g': 1}")
    console.log(countChars('abba'),"{'a': 2, 'b': 2}")
  }