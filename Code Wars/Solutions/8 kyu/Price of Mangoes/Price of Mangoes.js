function mango(quantity, price){
    let freeM=0
    let mango = quantity
    while(mango>=3){
      mango-=3
      freeM++
    }
    return (quantity-freeM)*price 
  }