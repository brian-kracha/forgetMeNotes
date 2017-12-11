let findNumbersArray = (n) =>{
  var array = []
  for (var i = 0; i < n.length;i++){
    var rand = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    return array.push(rand)
  }
  return array.sort()
}
findNumbersArray(6)
module.exports{
  findNumbersArray
}
