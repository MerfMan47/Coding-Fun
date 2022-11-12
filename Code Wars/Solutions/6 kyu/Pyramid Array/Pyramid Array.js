function pyramid(n) {
  
    let arr = []
   
    for(let i=n; i>0; i--){
      let arr2 = []
      for(let o=0; o<i; o++){
        arr2[o]=1
      }
      arr.unshift(arr2)
    }
    return arr
  }