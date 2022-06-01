function comp(arr1, arr2){
  
  
 
  if(arr1 == null || arr2 == null){
    return false
  }
//tests if arrays are empty

  const arr1Squ = arr1.map(square)
  function square(num){
    return num*num
  }
  //squares the first array

  arr1Squ.sort()
  arr2.sort()
  //sorts the arrays to be in the same theoretical order

  let isEqual = arr1Squ.length === arr2.length && arr1Squ.every((value,index) => value === arr2[index])
  console.log(isEqual)
  return isEqual
//finally tests if the arrays equal eachother

}
