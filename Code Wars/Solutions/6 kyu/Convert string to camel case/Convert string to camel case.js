function toCamelCase(strIn){
    str = strIn.toLowerCase()
    
    if(str === ''){
      return str
      //Checks for Empty strings
      
    }else if(str.includes('-')){
      const arr = str.split('-')
      for(let i = 0; i< arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
      }
      str = arr.join('-')
      for(let i = 0; i<str.length; i++){
        str = str.replace('-','')
        }
      //This part deals with string that have '-' inbetween words
      
    }else if(str.includes('_')){
      const arr = str.split('_')
      for(let i = 0; i< arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
      }
      str = arr.join('_')
      for(let i = 0; i<str.length; i++){
        str = str.replace('_','')
        } 
      //This part deals with string that have '_' inbetween words
      
    }
    if(str[0] !== strIn[0]){
      str = str[0].toLowerCase() + str.substring(1)
    }
    //This if statement checks if the first letter of the origional string is capital or not
    
    return str
    
  }
  