function hammingDistance (a, b) {
	let dist = 0
  const aArr = a.split('')
  const bArr = b.split('')
  for(let i=0; i<aArr.length; i++){
    if(aArr[i]!=bArr[i]){
      dist++
    }
  }
  return dist
}