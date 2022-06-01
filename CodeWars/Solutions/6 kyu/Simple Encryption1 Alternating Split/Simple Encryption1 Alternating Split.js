function encrypt(text, n) {
    let even = ""
    let odd = ""
    
    if(n <= 0){
      return text
    }else if(text == null){
      return text
    }
    
  //   DEFINATLY need do not DELETE ^^^
    
    for(let i = 0; i < n; i++){  
      odd = ""
      even = ""
      
      for (let i = 0; i < text.length; i++){
        
        if(i % 2 == 0){
          even += text.charAt(i)
        }else {
          odd += text.charAt(i)
        }
      }
      text = odd + even
    }
    return text  
  }
  
  //ABOVE IS  WORKING DO NOT TOUCH
  
  
  
  function decrypt(eText, n) {
    
    let splitStr = ""
    let splitStr2 = ""
    
    if(n == 0){
      return eText
    }
  
    for(let i = 0; i < n; i++ ){
      
      splitStr = eText.substr(0,eText.length / 2)
      splitStr2 = eText.substr(eText.length / 2)
      eText = ""
      
      for(let i = 0; i  < splitStr2.length; i++){
        eText += splitStr2.charAt(i) + splitStr.charAt(i)
      }
        
      //if this dumpster fire code works I'm going to die laghing
      // it didnt work.
      //wait...
      // (-_^) hmmmmmmmmmmmmm...
      //................
      
      //AHAHAHAHAHAHJKDFDHhaKHAHAHAHAhHAHahahahahahAHHHAHA
      
    }
    return eText
  }
  