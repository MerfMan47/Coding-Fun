function comp(arr1U, arr2U){
  
    const arr1E = arr1U.filter(value => {
      return value !== undefined
    })
    const arr2E = arr2U.filter(value => {
      return value !== undefined
    })
    
    
    const arr1P = arr1E.filter(value => {
      return value !== null
    })
    const arr2P = arr2E.filter(value => {
      return value !== null
    })
    
    const arr1 = arr1P.filter((a) => a);
    const arr2 = arr2P.filter((a) => a);
    //NULL ERDICATION ZONE
  
    
    
    let arr1Set = new Set()
    let arr2Set = new Set()
    
    arr1.forEach(mapToSet1);
    function mapToSet1(value){
      arr1Set.add(value*value)
    }
    let sum1 = 0
    arr1Set.forEach(num => {
      sum1 += num
    })
    
    
    arr2.forEach(mapToSet2)
    function mapToSet2(value){
      arr2Set.add(value)
    }
    let sum2 = 0
    arr2Set.forEach(num => {
      sum2 += num
    })
    
    
    
    
    if(sum1 == sum2){
      console.log('true')
      return true
    }else {
      console.log('false')
      return false
    }
    
    
    
  }