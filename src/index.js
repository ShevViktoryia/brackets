module.exports = function check(str, bracketsConfig) {
  let f_arr = [], s_arr = [], dublicate = [], arr = [];
  let d_count = 0, s_count = 0, s_count_f = 0;

  let open_brackets = [], close_brackets = [], f_index = [], s_index = [];

  bracketsConfig.forEach(item => {
    for(let i = 0; i < item.length; i++) {
      i % 2 == 0 ? open_brackets.push(item[i]) : close_brackets.push(item[i]);
    }
  });

  for(let i = 0; i < open_brackets.length; i++) {
    if(open_brackets[i] == close_brackets[i]) {
      dublicate.push(open_brackets[i]);
    }
  }

  for(let i = 0; i < str.length; i++) {
    if(dublicate.includes(str[i])) {
      d_count++;
    }
  }

  str = str.split('');
  for(let i = 0; i < str.length; i++) {
    if(open_brackets.includes(str[i])) {
      arr.push(str[i]);
      f_arr.push(str[i]);
    }
    if(close_brackets.includes(str[i])) {
      f_index = arr.pop();
      s_arr.push(str[i]);
      if(open_brackets.indexOf(f_index) != close_brackets.indexOf(str[i])) {
        return false;
      }
    }
  }

  for(let i = 0; i < s_arr.length; i++) {
    if(dublicate[0] == (s_arr[i])) {
      s_count_f++;
    }
    if(dublicate[1] == (s_arr[i])) {
      s_count++;
    }
  }

  if(s_count != s_count_f && s_count != 0) {
    return false;
  }
  

  return !arr.length;
}