function isIsogram(str){
  
    const list = new Set()
    str.toLowerCase().split('').forEach(addToSet)
  
    function addToSet(value){
      list.add(value)
    }
   
    if(list.size == str.length){
      return true
    }else{
      return false
    }
  }