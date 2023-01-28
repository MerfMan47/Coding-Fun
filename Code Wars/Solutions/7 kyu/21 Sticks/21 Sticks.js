function makeMove(sticks) {

  if(sticks>20){
    return sticks-20
  }else if(sticks>16){
    return sticks-16
  }else if(sticks>12){
    return sticks-12
  }else if(sticks>8){
    return sticks-8
  }else if(sticks>4){
    return sticks-4
  }else {
    return sticks
  }
}