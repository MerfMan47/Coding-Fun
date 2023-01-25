function snail(column, day, night) { 
    return(Math.ceil((column-night)/(day-night)))
  }