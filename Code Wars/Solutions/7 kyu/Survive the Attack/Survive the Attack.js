function hasSurvived(attackers, defenders){
  let attTot = attackers.reduce((partialSum, a) => partialSum + a, 0)
  let defTot = defenders.reduce((partialSum, a) => partialSum + a, 0)
  
  if(attackers.length==0 || defenders.length==0){
    return (attackers.length==0 ? true : false)
  }
  
  let att=0
  let def=0
  
  for(let i=0; i<defenders.length; i++){
    if(defenders[i]<attackers[i]){
      att++
    }else if(defenders[i]>attackers[i]){
      def++
    }
  }

  if(att>def){
    return false
  }else if(att<def){
    return true
  }else {
    if(attTot>defTot){
      return false
    }else{
      return true
    }
  }
}
