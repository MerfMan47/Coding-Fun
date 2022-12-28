// Return how many turns the burglar needs to steal all the diamonds
function diamondBurglar(locker){
  let time = 0
  for(row of locker){
    while(row.indexOf('**')!=-1){
      row=row.replace('**','')
      time++
    }
    while(row.indexOf('*')!=-1){
      row=row.replace('*','')
      time++
    }
  }
  return time
}