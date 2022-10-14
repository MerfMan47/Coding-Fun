function getDivisorsCnt(n){
    if(n==''){
      return n
    }
  var count = 0
  for(let i=0; i<=n; i++){
    if(n%i==0){
      count += 1
    }
  }
  return count
}

//if string empty return empty
//number of divisors in string form
// modulus with for loop for each number if modulous is 0 +1