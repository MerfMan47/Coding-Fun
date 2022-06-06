function titleCase(titleIn, minorWords) {
  
    if (titleIn === ''){
      return titleIn
    }
    //Checks agaist empty inputs
    
    
    let title = titleIn.toLowerCase()
    //Makes the string uniform
    
    const arr = title.split(' ')
    
    for(let i = 0; i< arr.length; i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    title = arr.join(' ')
    //This loop capitalized the first letter of each word in the inputString sans the first letter
    
    //exceptions zone
    let minorArr
    
    if(minorWords != undefined){
      minorWords = minorWords.toLowerCase()
      minorArr = minorWords.split(' ')
      for(let i = 0; i< minorArr.length; i++){
            minorArr[i] = minorArr[i].charAt(0).toUpperCase() + minorArr[i].slice(1)
      }
    }
    //This prepares the exception words to be crosschecked against the fully capitalized input string by capitalizing the first letter of every word
    
    
    function check(item){  
      if(title.includes(item)){
        title = title.replace(item, item.toLowerCase())
      }
    }
    //check Function
    
    if(minorWords != undefined){
        for(let i = 0; i < minorArr.length; i++){
        minorArr.forEach(check)
      }
    }
    //This calls the check function to look for excpetions to the inputString
    
    title = title[0].toUpperCase() + title.substring(1)
    //This capitalizes the first character of the string, I should probably set up a trim or something...
    
    return(title)
    
  }
  
