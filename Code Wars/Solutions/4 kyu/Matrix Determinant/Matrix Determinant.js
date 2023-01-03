function determinant(m) {

    //Function for swapping Rows
      
      function rowSwap(arr, i1, i2){
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
      }
      
    //   Tests if swapping is nessesary
      
      let swapCount = 1
      for(let i = 0; i<m.length; i++){
        if(m[i][i]==0){ 
          let swap = false
          let row = 0
          while(swap===false){    
            if(m[row][i]!==0 && m[i][row]!==0){
              rowSwap(m, i, row) 
              swap = true
              swapCount++     
            }else{
              row++
            }
          }       
        }
      }
       
    //  Gaussian Elimination to manipulate the matrix into Row Echelon Form
       
      for(let u=0; u<m.length; u++){
        for(let i=1; i<m.length; i++){  
          let coeff = -(m[i][u]/m[u][u])
          if(m[i][u]!==0 && m[u][u]!==0 && i!==u){
            for(let o=0; o<m.length; o++){
              m[i][o] = m[u][o]*coeff+m[i][o]       
            }
          }
        }
      }
      
    //  Set sign based on number of rows swapped and multiply main diagonal  
      
      if(swapCount%2==0){
        var det = -1
      }else{
        var det = 1
      }
      
      for(let p=0; p<m.length; p++){
        det = det*m[p][p]
      }
    
    // A small bit of rounding to get rid of those pesky discrepancies
      return Math.round(det)
    };