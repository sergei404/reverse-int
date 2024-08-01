module.exports = function reverse (n) {
  return n.toString().length === 4 ? +n.toString().split('').slice(1).reverse().join('') : +n.toString().split('').reverse().join('')
}
