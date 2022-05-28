
function DNAStrand(dna){
  
    //   ensures that code still works even if letters are not capitalized
      let newDNA = dna.toUpperCase()
      
    //   Loops through string the number of times equal to the length and replaces any letter it sees
      for(let i = 0; i < dna.length; i++){
        newDNA = newDNA.replace('A', 't')
        newDNA = newDNA.replace('T', 'a')
        newDNA = newDNA.replace('G', 'c')
        newDNA = newDNA.replace('C', 'g')
      }
      
    //   returns the new string
      return newDNA = newDNA.toUpperCase()
    }
    
    
    