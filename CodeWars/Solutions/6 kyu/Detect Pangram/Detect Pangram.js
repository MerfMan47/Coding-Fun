function isPangram(string){
    //   string = string.toLowerCase()
    //   let letters = new Set()
      
    //   for(let i = 0; i < string.length; i++){
    //     letters.add(string[i])
    //   } 
    //   return letters.has('a'&&'b'&&'c'&&'d'&&'e'&&'f'&&'g'&&'h'&&'i'&&'j'&&'k'&&'l'&&'m'&&'n'&&'o'&&'p'&&'q'&&'r'&&'s'&&'t'&&'u'&&'v'&&'w'&&'x'&&'y'&&'z')
      
    //   Other solution
      
      
      
      string = string.toLowerCase()
        
      if(string.includes('n') !== true){
        return false
      }
    //Don't know why I need this when 'n' is clearly in the .includes method^^^
    
      let ans = string.includes('a'&&'b'&&'c'&&'d'&&'e'&&'f'&&'g'&&'h'&&'i'&&'j'&&'k'&&'l'&&'m'&&'n'&&'o'&&'p'&&'q'&&'r'&&'s'&&'t'&&'u'&&'v'&&'w'&&'x'&&'y'&&'z')
    
      return ans
    }
