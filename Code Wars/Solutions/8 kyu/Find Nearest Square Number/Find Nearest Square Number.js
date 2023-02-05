function nearestSq(n){
    let n1 = n
    let n2 = n
  
    while(!Number.isInteger(Math.sqrt(n1))){
      n1++
    }
    
    while(!Number.isInteger(Math.sqrt(n2))){
      n2--
    }
  
    if((n1-n)>(n-n2)){
      return n2
    }else{
      return n1
    }
  }