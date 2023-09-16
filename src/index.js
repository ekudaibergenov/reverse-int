module.exports = function reverse (n) {
  let str = String(n).split("").reverse()
  if (str[str.length - 1] === "-") str = str.splice(0, str.length - 1)
  return Number(str.join(""))
}
