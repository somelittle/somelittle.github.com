<template>
  <div>
    <div class="maintitle">    
      <h2>This is just a simple demo<br>width canvas...</h2>
    </div>
    <canvas class="cav" ref="bf"></canvas>
  </div>
</template>

<script>
export default {
  name: 'butterfly',
  data () {
    return {
      msg: 'Home'
    }
  },
  mounted () {
    this.bf()
  },
  methods: {
    bf () {
      window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      })()
      let canvas = this.$refs.bf
      let ctx = canvas.getContext('2d')
      let n = 10
      ctx.width = 100
      ctx.height = 100
      let fly = null
      if (fly) {
        window.cancelRequestAnimationFrame(fly)
        fly = null
      }
      let drawButterfly = function () {
        let x = 40
        let y = 40
        ctx.clearRect(0, 0, 100, 100)
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.quadraticCurveTo(x - 5, y - 20, x - 15, y - 20)
        ctx.stroke()
        ctx.closePath()
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.quadraticCurveTo(x - 5, y - 15, x - 15, y - 10)
        ctx.stroke()
        ctx.closePath()
        ctx.beginPath()
        ctx.moveTo(x + 5, y + 5)
        ctx.quadraticCurveTo(x + 5, y + 10, x + 30, y + 40)
        ctx.stroke()
        ctx.closePath()
        ctx.beginPath()
        ctx.moveTo(x + 5, y + 5)
        ctx.quadraticCurveTo(x + 5, y + 10, x + 30, y + 30)
        ctx.stroke()
        ctx.closePath()
        n--
        if (n < 0) {
          n = 10
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.quadraticCurveTo(x + 20, y - 80, x + 40, y)
          ctx.fillStyle = 'rgba(42,218,182,0.8)'
          ctx.fill()
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.bezierCurveTo(x + 60, y - 80, x + 70, y + 30, x + 20, y + 10)
          ctx.fillStyle = 'rgba(0,153,255,0.9)'
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.quadraticCurveTo(x + 20 - n, y - 80 + n, x + 40, y)
          ctx.fillStyle = 'rgba(42,218,182,0.8)'
          ctx.fill()
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.bezierCurveTo(x + 60 - n, y - 80 + n, x + 70 + n, y + 30 + n, x + 20, y + 10)
          ctx.fillStyle = 'rgba(0,153,255,0.9)'
          ctx.fill()
        }
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.bezierCurveTo(x + 40, y + 10, x + 40, y + 50, x, y)
        ctx.fillStyle = 'black'
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(x + 1, y + 1)
        ctx.arc(x - 1, y - 1, 3, 0, Math.PI * 2, true)
        ctx.fillStyle = 'black'
        ctx.fill()
        fly = window.requestAnimFrame(drawButterfly)
      }
      drawButterfly()
      let xPos = 400
      let yPos = 200
      let step = 1
      let delay = 10
      let width = 0
      let height = 0
      let Hoffset = 0
      let Woffset = 0
      let yon = 0
      let xon = 0
      canvas.style.top = 0
      function changePos () {
        width = document.documentElement.clientWidth || document.body.clientWidth
        height = document.documentElement.clientHeight || document.body.clientHeight
        Hoffset = canvas.offsetHeight
        Woffset = canvas.offsetWidth
        if (yon) {
          yPos = yPos + step
        } else {
          yPos = yPos - step
        }
        if (yPos < 60) {
          yon = 1
          yPos = 60
        }
        if (yPos >= (height - Hoffset - 60)) {
          yon = 0
          yPos = (height - Hoffset - 60)
        }
        if (xon) {
          xPos = xPos + step
        } else {
          xPos = xPos - step
        }
        if (xPos < 60) {
          xon = 1
          xPos = 60
        }
        if (xPos >= (width - Woffset - 60)) {
          xon = 0
          xPos = (width - Woffset - 60)
        }
        canvas.style.left = xPos + document.body.scrollLeft + 'px'
        canvas.style.top = yPos + document.body.scrollTop + 'px'
      }
      function start () {
        setInterval(changePos, delay)
      }
      start()
    }
  }
}
</script>

