function maxIntChain(n) {
  
    if(n<5){
      return -1
    }
    
  //   This one is quick as it is in cosntant time
    return Math.ceil(((n/2)+1)*((n/2)-1))
    
  //   This one takes a looooooong time and is in linear time
  //   let result = 0
  //   for(let i=0; i<n; i++){
        
  //     if((n-i)*i>result && n-i!=i){
  //       result = (n-i)*i  
  //     }
  //   }
  //   return result
  }