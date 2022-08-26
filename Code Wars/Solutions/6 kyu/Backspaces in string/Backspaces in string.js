function cleanString(s) {
    if(s.length == 0){
      return s
    }
    // checking if the string is empty
    
    let sArr = s.split('')
    //turns string into an easly manipulatable array 
  
   for(let i=0; i<sArr.length; i++){
     if (sArr[i]=='#' && i!=0){
       sArr.splice(i-1,2)
       i=0
       //loops through the array and takes out the hashtags and the character as they are found
       //The index needs to be reset each time as the length of the array changes, thus a forEach could not have been used.
     }
     if(sArr[0]=='#'){
       sArr.shift()
       //checks for a hashtag in the first position and then removes it as the above loop will not.
     }
   }
    
    return sArr.join('')
    //returns the array as a string
  }