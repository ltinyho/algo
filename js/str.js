function searchStr(str, sub) {
  if (sub.length > str.length) {
    return -1;
  }

  for (let i = 0; i <= str.length - sub.length; i++) {
    var find = true;
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        find = false;
        break;
      }
    }
    if (find === true) {
      return i;
    }
  }
  return -1;
}


module.exports ={
  searchStr
}
