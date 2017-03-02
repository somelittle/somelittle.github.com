<template>
  <div class="main">
   <div class="thewords" id="thewords"></div>  
   <div id="theidea"></div>
  </div>
</template>

<script>
import xb from 'xb'
import $ from 'jquery'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home'
    }
  },
  mounted () {
    this.showwords()
    console.log(xb.rand(0, 10))
  },
  methods: {
    showwords () {
      let width = window.innerWidth
      let height = window.innerHeight
      let maxwidth = Math.round(width * 0.9)
      let maxheight = Math.round(height * 0.9)
      let minwidth = Math.round(window.innerWidth * 0.1)
      let minheight = Math.round(window.innerHeight * 0.1)
      let words = 'HTML5,CSS3,Javascript,ES6,nodejs,npm,Webpack,Sass,Vuejs,Reactjs,Photoshop,ResponsiveDesign,frontend,PWA'.split(',')
      let $thewords = $('#thewords')
      let $theidea = $('#theidea')
      let wordslen = words.length
      function showidea () {
        let $webtext = $('<p>').html('Web is the batter way')
        let $fontendtext = $('<p>').html('Fontend is awesome')
        $webtext.appendTo($theidea)
        $fontendtext.appendTo($theidea)
        $theidea.addClass('theidea animated zoomIn')
      }
      $.each(words, function (i, n) {
        let $theword = $('<span>').css({'position': 'absolute', 'left': xb.rand(minwidth, maxwidth) + 'px', 'top': xb.rand(minheight, maxheight) + 'px', 'opacity': 1}).addClass('animated zoomIn').html(n)
        setTimeout(function () {
          $theword.appendTo($thewords).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            let $this = $(this)
            $this.removeClass('animated zoomIn')
            setTimeout(function () {
              $this.css({'left': width / 2 - 30 + 'px', 'top': height / 2 + 'px', 'opacity': 0})
              if (i === wordslen - 1) {
                console.log(i)
                showidea()
              }
            }, 0)
          })
        }, 500 + i * 60)
      })

      function animwords () {
        console.log(5)
        setTimeout(animwords, 100)
      }

      animwords()
    }
  }
}
</script>
