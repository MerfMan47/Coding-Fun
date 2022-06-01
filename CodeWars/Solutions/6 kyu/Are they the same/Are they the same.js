function comp(arr1, arr2){
  
  
    //   removeNull(arr1)
    //   removeNull(arr2)
      
    //   function removeNull(array){
    //     console.log(array)
    //     return array.filter(x => x !== null && x !== '')
    //   }
      if(arr1 == null || arr2 == null){
        return false
      }
      
      
      const arr1Squ = arr1.map(square)
      function square(num){
        return num*num
      }
      
      arr1Squ.sort()
      arr2.sort()
      
      let isEqual = arr1Squ.length === arr2.length && arr1Squ.every((value,index) => value === arr2[index])
      console.log(isEqual)
      return isEqual
      
    }
