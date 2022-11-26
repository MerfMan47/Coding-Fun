function getCount(str) {
    let count = 0
    let arrStr = str.split('')
    function countV(letter){
      if(letter == 'a' || letter =='e' || letter =='i' || letter =='o' || letter =='u'){
        count++
      }
    }
    arrStr.forEach(countV)
    
    return count
  }