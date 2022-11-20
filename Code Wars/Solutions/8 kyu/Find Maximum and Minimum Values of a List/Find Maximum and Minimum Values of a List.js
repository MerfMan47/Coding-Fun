var min = function(list){
    
    return list[list.indexOf(Math.min(...list))];
}

var max = function(list){
    
    return list[list.indexOf(Math.max(...list))];
}