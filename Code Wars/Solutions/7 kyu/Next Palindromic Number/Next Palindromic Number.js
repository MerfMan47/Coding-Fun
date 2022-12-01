function nextPal(val) {
    val++
    while(val != val.toString().split('').reverse().join('')){
      val++
    }
    return val
  }