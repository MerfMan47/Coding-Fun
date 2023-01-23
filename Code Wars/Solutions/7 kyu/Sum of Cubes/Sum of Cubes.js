function sumCubes(n){
    let sum=0
    let tSum
    function rec(m){
      if(m!=0){
        sum+=(m*m*m)
        rec(m-1)     
      }else{
        tSum=sum
      }
    }
    
    rec(n)
    return tSum
  }