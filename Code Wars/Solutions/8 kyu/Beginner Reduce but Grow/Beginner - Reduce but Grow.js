function grow(x){
  console.log(x)
  let product = 1
  for(num of x){
    product = product * num
  }
  console.log(product)
  return product
}