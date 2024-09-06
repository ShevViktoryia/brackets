module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  let res = [];
  bracketsConfig.forEach((item) => {
    for (let i = 0; i < item.length; i += 2) {
      if (item[i] === item[i + 1]) {
        brackets[item[i]] = item[i + 1];
      } else {
        brackets[item[i]] = item[i + 1];
      }
    }
  });

  for (let i = 0; i < str.length; i++) {
    if (str[i] in brackets) {
      if (
        (res.length !== 0 &&
          res.includes(str[i]) &&
          str[i] === "|" &&
          res[res.length - 1] === "|") ||
        (res.length !== 0 &&
          res.includes(str[i]) &&
          str[i] === "7" &&
          res[res.length - 1] === "7") ||
        (res.length !== 0 &&
          res.includes(str[i]) &&
          str[i] === "8" &&
          res[res.length - 1] === "8")
      ) {
        res.pop();
      } else {
        res.push(str[i]);
      }
    } else {
      let last = res.pop();
      if (brackets[last] !== str[i] && !Number(str[i])) {
        return false;
      }
      if (Number(str[i]) && Number(brackets[last]) != Number(str[i])) {
        return false;
      }
    }
  }
  return res.length === 0;
};
