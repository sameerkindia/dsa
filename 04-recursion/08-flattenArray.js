function flattenArray(arr){
  let result = []; 

  for(const item of arr){
    if(Array.isArray(item)){ // [5,6,[7,[8]]]   [7,[8]]
      result = result.concat(flattenArray(item))
    }else{
      result.push(item)
    }
  }
  return result

}

console.log(flattenArray([1,2,3,4,[5,6,[7,[8]]], 9,10,11]))