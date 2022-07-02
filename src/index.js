module.exports = function check(str, bracketsConfig) {
  let arr = [];

  let open_brackets = [], close_brackets = [], f_index, s_index;

  bracketsConfig.forEach(item => {
    for(let i = 0; i < item.length; i++) {
      i % 2 == 0 ? open_brackets.push(item[i]) : close_brackets.push(item[i]);
    }
  });
  for(let i = 0; i < str.length; i++) {
    f_index = open_brackets.indexOf(str[i]);
    if(f_index != -1) {
      arr.push(f_index);
    }
    s_index = close_brackets.indexOf(str[i]);
    if(s_index != -1) {
      f_index = arr.pop();
      if(s_index != f_index) {
        return false;
      }
    }
  }
  return !arr.length;
}