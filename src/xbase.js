module.exports = {
  rand: function (a, b) {
    return Math.floor(a + Math.random() * (b - a + 1))
  }
}

