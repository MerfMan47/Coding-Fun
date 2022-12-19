var hotpo = function(n){
    if(n == 0) return 0; //Optional Handler to n = 0
    console.log(n)
  
  let count = 0
    while (n!=1){
      if(n%2==0){
        n=n/2
      }else{
        n=3n+1
      }
      count++
      console.log(n)
    }
  console.log(count)
  return count
}