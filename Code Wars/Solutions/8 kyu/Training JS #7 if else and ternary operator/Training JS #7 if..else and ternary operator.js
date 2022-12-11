function saleHotdogs(n){
  
    //   This works
    //   if(n<5){
    //     return n*100
    //   }else if(n<10){
    //     return n*95
    //   }else {
    //     return n*90
    //   }
      
    //   This works better
      return n<5 ? n*100 : n<10 ? n*95 : n*90  
    }