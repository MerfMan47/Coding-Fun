function sumOfMinimums(arr) {
    let sum = 0
    for(let i=0; i<arr.length; i++){
      sum+=Math.min(...arr[i])
    }
    return sum
  }