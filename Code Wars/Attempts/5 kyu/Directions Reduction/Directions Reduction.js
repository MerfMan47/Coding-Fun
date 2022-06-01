function dirReduc(arr){
  
    let containsCopy1 = true
    let containsCopy2 = true
    let dirStr = arr.toString()
    console.log(dirStr)
    
    if(arr.includes('NORTH') && arr.includes('EAST') && arr.includes('SOUTH') && arr.includes('WEST') && arr.length === 4){
      return arr
    }
    
    
    while(containsCopy1 == true){
      if(dirStr.includes('NORTH') === true && dirStr.includes('SOUTH') === true ){
        console.log('trueA')
        dirStr = dirStr.replace('SOUTH', '')
        dirStr = dirStr.replace('NORTH', '')
        console.log(dirStr)
      }else {
        containsCopy1 = false
      }  
    }
    
    while(containsCopy2 == true){
      if(dirStr.includes('EAST') === true && dirStr.includes('WEST') === true ){
        console.log('trueB')
        dirStr = dirStr.replace('WEST', '')
        dirStr = dirStr.replace('EAST', '')
        console.log(dirStr)
      }else {
        containsCopy2 = false
      }  
    }
    
    console.log(dirStr +"1")
    let solArr = Array.from(new Set(dirStr.split(',')))
    console.log(solArr +"2")
    
    let solArrCorrected = solArr.filter(element => {
      return element !== ''
    })
    console.log(solArrCorrected +"3")
    
    
    
    return solArrCorrected
  
  }
    
    
  //convert to string???
  // test for paired values
  //if paired values exist remove
  //convert back to array???