function dirReduc(arr){
  
    if(arr.includes('NORTH') && arr.includes('EAST') && arr.includes('SOUTH') && arr.includes('WEST') && arr.length === 4){
      return arr
    }
    // This is used to check if the imdeiate array is non-directional
    
    
    let containsCopy1 = true
    let containsCopy2 = true
    let dirStr = arr.toString()
    // Array is converted into a string to make it more malleable, and intial conditions are set
    
    
    while(containsCopy1 == true){
      if(dirStr.includes('NORTH') === true && dirStr.includes('SOUTH') === true ){
        dirStr = dirStr.replace('NORTH','')
        dirStr = dirStr.replace('SOUTH','')
      }else {
        containsCopy1 = false
      }  
    }
    
    while(containsCopy2 == true){
      if(dirStr.includes('EAST') === true && dirStr.includes('WEST') === true ){
        dirStr = dirStr.replace('EAST','')
        dirStr = dirStr.replace('WEST','')
      }else {
        containsCopy2 = false
      }  
    }
    //Both of these loops test for matching pairs of 'NORTH''SOUTH' and 'EAST''WEST' respectively then elimiates any pairs it finds
  
  
    let solArr = dirStr.split(',')
    //Finally converting the string back to an array
    
    
    let solArrCorrected = solArr.filter(element => {
      return element !== ''
    })
    //This eliminates empty values in the array
    
    console.log(solArrCorrected)
    if(solArrCorrected.length == 2){
      const smallNum = arr.indexOf(solArrCorrected[0])
      const bigNum = arr.indexOf(solArrCorrected[1])
      console.log(smallNum)
      console.log(bigNum)
      if(smallNum > bigNum){
        solArrCorrected.reverse()
      }
    }
    //I'm proud of this bit, this checks the order of the solArrCorrected values against the origional input array.
    //If the reletive size of the index values of the elements in the solArrCorrected array do not match the reletive index
    //values of the first time the elements appear in the original array, solArrCorrected is reversed.
    //This works becasue there will only ever be 2 unmatching values in the final array and they are either in order or not.
    
    
    return solArrCorrected
  }
