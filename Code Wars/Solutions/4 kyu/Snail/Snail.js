snail = function(array) {

    let finalArr = []
    let IBT
    
    
    //NULL CHECK START
    if(array.length == 0){  
      return array
    }
    
    function checkForNull(insideArr){
      if(insideArr.length == 0){
        IBT = true
      }
    }
    
    array.forEach(checkForNull)
    
    if(IBT == true){
      return finalArr
    }
    //NULL CHECK END
    
    
    
    //Coil Section,(the meat and potatoes)
  
    let finalCheck = false
    
    while (finalCheck == false){
      
      //TOP; LEFT TO RIGHT
      array[0].forEach(value => finalArr.push(value))
      array.shift()
  
       if(array.length == 0){
        finalCheck = true
      }
      
      
      //DOWN; RIGHT SIDE
      if(finalCheck == false){
        for(let i = 0; i<array.length; i++){
      //     console.log(array[i].pop()) <===== This actually acts as a true pop???? swapped to slice
          finalArr.push(array[i].pop())
        }
      }
      
       if(array.length == 0){
        finalCheck = true
      }
      
      
      //BOTTOM; RIGHT TO LEFT
      if(finalCheck == false){
        array[array.length - 1].reverse()
        array[array.length - 1].forEach(value => finalArr.push(value))
        array.pop()
      }
      
      if(array.length == 0){
        finalCheck = true
      }
      
      
      //UP; LEFT SIDE
      if(finalCheck == false){
        for(let i = array.length; i>0; i-- ){
          finalArr.push(array[i-1].shift())
        }
        
      }
      
      if(array.length == 0){
        finalCheck = true
      }
      
      
    }
    
    
    console.log(finalArr+" fin")
    return finalArr
     
  }
  
