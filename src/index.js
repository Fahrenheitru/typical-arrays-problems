exports.min = function min(array) {
  if (array === undefined || array.length === 0) { 
    return 0;
  } else if (array.length != 0){
    let minArr = array[0];
    for (let i = 0; i < array.length; i++) {
    if (minArr >= array[i]) {
      minArr = array[i];
    }
  }
  return minArr;
  }
};

exports.max = function max(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else if (array.length != 0) {
    let maxArr = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maxArr <= array[i]) {
        maxArr = array[i];
      }
    }
    return maxArr;
  }
};

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else if (array.length != 0) {
    let avgArr;
    for (let i = 0; i < array.length; i++) {
      avgArr = array.reduce((sum,current)=>sum+current,0);
    }
    return avgArr/(array.length);
  }
};