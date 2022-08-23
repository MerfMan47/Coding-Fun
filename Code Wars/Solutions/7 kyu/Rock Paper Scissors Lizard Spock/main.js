function rpsls(pl1,pl2){
    pl1 = pl1.toLowerCase()
    pl2 = pl2.toLowerCase()
    console.log(pl1)
    console.log(pl2)
    
    if (pl1 == 'scissors' && (pl2 == 'paper' || pl2 == 'lizard')){
      return 'Player 1 Won!'
    }else if(pl1 == 'paper' && (pl2 == 'rock' || pl2 == 'spock')){
      return 'Player 1 Won!'
    }else if(pl1 == 'rock' && (pl2 == 'lizard' || pl2 == 'scissors')){
      return 'Player 1 Won!'
    }else if(pl1 == 'lizard' && (pl2 == 'spock' || pl2 == 'paper')){
      return 'Player 1 Won!'
    }else if(pl1 == 'spock' && (pl2 == 'scissors' || pl2 == 'rock')){
      return 'Player 1 Won!'   
    }else if(pl1 == pl2){
      return 'Draw!'
    }else {
      return 'Player 2 Won!'
    }
  }