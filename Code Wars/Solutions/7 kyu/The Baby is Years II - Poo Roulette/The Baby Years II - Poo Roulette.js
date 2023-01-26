function pooRoulette(p) {

  let rowL = p[0].length
  let columbL = p.length
  
  let baby = p.flat().indexOf('B')
  let y = Math.floor(baby/p.length)
  let x = baby%columbL


  if(y>2&&p[y-1][x]=='~'&&p[y-2][x]=='~'&&p[y-3][x]=='~'){
    console.log("Get the wipes!")
    return "Get the wipes!"
    
  }else if((x>2&&p[y][x-1]=='~'&&p[y][x-2]=='~'&&p[y][x-3]=='~') || (x<rowL-3&&p[y][x+1]=='~'&&p[y][x+2]=='~'&&p[y][x+3]=='~')){
    return "You disgust me!"
    
  }else{
    return "Calm before the storm"
  }
}