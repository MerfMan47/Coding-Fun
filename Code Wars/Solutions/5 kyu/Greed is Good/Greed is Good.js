function score( dice ) {
  
  
    //get number of each value in array
    //assign points based on thoes values
    //easy
    
    let sum = 0 
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let five = 0
    let six = 0
    
    function sort(value) {
      if(value === 1){
        one++   
      }else if(value === 2){
        two++  
      }else if(value === 3){
        three++    
      }else if(value === 4){
        four++    
      }else if(value === 5){
        five++    
      }else if(value === 6){
        six++   
      }
      
    }
    
    dice.forEach(sort)
    
    if(one >= 3){
      sum += 1000
      one -= 3
    }else if(two >= 3){
      sum += 200
      two -= 3
    }else if(three >= 3){
      sum += 300
      three -= 3
    }else if(four >= 3){
      sum += 400
      four -= 3
    }else if(five >= 3){
      sum += 500
      five -= 3
    }else if(six >= 3){
      sum += 600
      six -= 3
    }
    
    
    if(one === 1){
      sum += 100
    }else if(one === 2){
      sum += 200
    }
    
    if(five === 1 ){
      sum += 50
    }else if(five === 2){
      sum += 100
    }
    
    return sum
    
  }