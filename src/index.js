module.exports = function check(str, bracketsConfig) {
  let open_brackets = [], open_brackets_index = [], close_brackets = [], close_brackets_index = [], open_bracketsConfig = [], close_bracketsConfig = [], res, res_arr = [];
  let arr = str.split('');
  bracketsConfig.forEach(item => {
    for(let i = 0; i < item.length; i++) {
      i % 2 == 0 ? open_bracketsConfig.push(item[i]) : close_bracketsConfig.push(item[i]);
    }
  });

  for(let i = 0; i < arr.length; i++) {
    open_bracketsConfig.forEach(open => {
      if(arr[i] === open) {
        open_brackets.push(arr[i]);
      }
    })
    close_bracketsConfig.forEach(close => {
      if(arr[i] === close) {
        close_brackets.push(arr[i]);
      }
    })
  }

  let count = 1;

  for(let i = 0; i < arr.length; i++) {
    open_brackets.forEach(bracket => {
      if(arr[i] === bracket) {
        res_arr.push(bracket);
      }
      else {
        if(JSON.stringify(bracketsConfig).includes(JSON.stringify([res_arr[res_arr.length-1], arr[i]]))){
          res_arr.pop();
        }
      }
    })
  }

  for(let i = 1; i < res_arr.length; i++) {
    if(res_arr.includes(res_arr[0]) && res_arr[0] !== '(') {
      count++;
    }
  }

  return (res_arr.length == 0 || count % 2 == 0) ? true : false;
}