function numberJoy(n) {
  
    //   This works
    //   let sum1 = n.toString().split('').reduce((partialSum, a) => partialSum + parseInt(a), 0);
      
    //   let sum2 = sum1.toString().split('').reverse().join('')
      
    //   let product = sum1*sum2
      
    //   return (product==n ? true : false);
      
    //   so does this
      return ((n.toString().split('').reduce((partialSum, a) => partialSum + parseInt(a), 0))*(n.toString().split('').reduce((partialSum, a) => partialSum + parseInt(a), 0).toString().split('').reverse().join(''))==n? true : false);
    }