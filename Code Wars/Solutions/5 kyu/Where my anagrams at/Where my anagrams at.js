function anagrams(key, words) {
  
    let keyArr = key.split('')
    keyArr = keyArr.sort()
    //Take the key word and turn it into an array of sorted characters
    
    let resultArr = []
  
    
    function subArr(item){
      let arr = item.split('')
      arr = arr.sort()
      if(JSON.stringify(arr) == JSON.stringify(keyArr)){
        resultArr.push(item)
      }
    }
    //This function takes each item in the words array and turns it into a new array of characters which is then sorted and compared to the sorted key array and voilà.
    
    words.forEach(subArr)
    //Simply calls the function
    
    return resultArr
    
  }
  
