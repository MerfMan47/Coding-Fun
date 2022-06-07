function domainName(url){
  
    if(url.includes('http://www.')){
      url = url.replace('http://www.','')
    }else if(url.includes('http://')){
      url = url.replace('http://','')
    }else if(url.includes('https://www.')){
      url = url.replace('https://www.','')
    }else if(url.includes('https://')){
      url = url.replace('https://','')
    }else if(url.includes('www.')){
      url = url.replace('www.','')
    }
    //This is just a giant 'check for these letters and remove them if found'
    
    let domain = url.slice(0,url.indexOf('.'))
    //This takes a new string from the beginning to the first dot which signifys the end of the domain name
  
    return domain
    
  }
  
  
