function rot13(message){

    let key = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let message2 = message.toLowerCase()
    const msgArr = message2.split('')
    //A key array is declared and the message is converted to lower case and made into an array
    
    
    function rot13(value){
      if(key.includes(value)){
          let shifted = key[key.indexOf(value) + 13]
        if((key.indexOf(value)+13) > 25){
          shifted = key[key.indexOf(value) - 13]
        }
        return shifted
      }else{
        return value
      }
    }
    //This function takes the given value of the array and 'shifts' 13 spaces up the index
    //If the shifted value is above 25, 13 is insead subtracted which brings the index to the correct place
    //If the value is not found on the key array, it is not a letter and therefor can be returned as is
    
    const msgArr13 = msgArr.map(rot13)
    //simply calls the function
    
    let msg13 = msgArr13.join('')
    //Turns the shifted array into a string
    
    if(message.charAt(0) != message.charAt(0).toLowerCase()){
      msg13 = msg13.charAt(0).toUpperCase() + msg13.slice(1)
    }
    //Finally if the origional message has a capital at the beginning the first character of the shifted string is taken and capitalized.
  
    return msg13
  }
  
  
