function expand(expr) {
    console.log('(aX+b)^n')
    console.log(expr)
    
  //   const X
    const X = expr.charAt(expr.search(/[a-z]/i))
    console.log('X: '+X)
    
  //   const a
    let a = expr.substring(expr.indexOf('(')+1,expr.indexOf(X))
    if(a == ''){
      a = 1
    }else if(a == '-'){
      a = -1
    }           
    console.log('a: '+a)    
                             
  //   const b
    let b = expr.substring(expr.indexOf(X)+1,expr.indexOf(')')).replace('+','')
    if(b == '' || b == '-0'){
      b = 0
    }
    console.log('b: '+b)
    
  //   const n
    let n = expr.substring(expr.indexOf('^')+1,expr.length)
    if(n == expr){
      n = 1
    }
    console.log('n: '+n)
    
  //   Pascal's Array Generator  
    let triangle = [[1],[1,1]]
    for (let i = 0; i < n; i++){
      triangle[i+1] = [1]
      triangle[i+1][i+1] = 1
      for(let o = 0; o < i; o++){
        triangle[i+1][o+1] = triangle[i][o] + triangle[i][o+1]
      }
    }
    const key = triangle[n]
    console.log(`Pascal's Triangle level `+n+' key: '+triangle[n])
  
  //  Computation
    let answer = ''
    var I = n
    for(let i = 0; i <= n; i++){  
    I -= 1
      answer += '+'+key[i]*(Math.pow(a,I+1))*(Math.pow(b,i))+X+'^'+(I+1) 
    }
    
  //  Clean Up
    answer = answer.substring(0,answer.length-3).split('+-').join('-').split('^1+').join('+').split('^1-').join('-').split('-1'+X).join('-'+X).split('+0'+X).join('').split('+0').join('')
    if(answer.charAt(0) == '+'){
      answer = answer.substring(1,answer.length)
    }
    if(answer.charAt(0) == '1' && answer.charAt(1) == X){
      answer = answer.substring(1,answer.length)
    }
    
  //  Return
    console.log(answer)
    return answer
  }  