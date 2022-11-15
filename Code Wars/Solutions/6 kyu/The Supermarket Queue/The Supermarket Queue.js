function queueTime(cu, n) {
  
    if(cu==false){
      return 0
    }else if(n>=cu.length){
      return Math.max(...cu)
    }
    let time=-1
    
    while(cu.length!==0){
      cu = cu.filter(e => e !== 0) 
      for(let i=0; i<n; i++){
        if(cu[i]!==undefined){
          cu[i]--  
        }
      }  
      time++
    }
    return time
  }