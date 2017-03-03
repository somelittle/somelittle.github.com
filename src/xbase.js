module.exports = {
  rand: function (a, b) {
    return Math.floor(a + Math.random() * (b - a + 1))
  },
  random: function (a) {
    return Math.floor(Math.random() * a)
  }
}
