function removeSmallest(numbers) {
  
    const remove = (arr, index) => [...arr.slice(0, index),...arr.slice(index+1)]
    
    return (remove(numbers,numbers.indexOf(Math.min(...numbers))))
  }