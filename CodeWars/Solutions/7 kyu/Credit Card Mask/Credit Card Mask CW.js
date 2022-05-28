// return masked string
function maskify(cc) {

    // take last 4 characters
    let l4 = cc.substring(cc.length - 4);
    
  // Replace all characters except the last four with #
    for (let i = 0; i < cc.length - 4; i++){   
      // concatenating the # to the beginning of the string
      l4 = '#' + l4
    }
    
  // Return altered string
    return l4
  }
  

//Tests
describe("maskify", function(){
    it("should work for some examples", function(){
      Test.assertEquals(maskify('4556364607935616'), '############5616');
      Test.assertEquals(maskify('1'), '1');
      Test.assertEquals(maskify('11111'), '#1111');
    });
  });
