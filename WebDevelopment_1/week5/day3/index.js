function addition(x, y) {
  return x + y;
}
function addition(x) {
  return ++x;
}

function minutes(minute){
  return minute * 60
}

function arrayOfMultiples(x,y){
  const list = [];
  for(let i = 1 ; i<y+1; i++){
    list.push(x * i)
  }
  return list
}

function toArray(obj){
  return Object.keys(obj).map(key => ([key, obj[key]]))
}
