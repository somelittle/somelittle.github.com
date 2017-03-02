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
    if (typeof (Worker) !== 'undefined') {
      this.showwords()
    } else {
      var tmpHtml = '<div class="e-support">' + '<div class="face"></div>' + '<div class="ebox">' + '<p>：童靴...</p>' + '<p>：都HTML5了，换个最新的浏览器吧！</p>' + '<p>：火狐、谷歌、IE11，最最新的...</p>' + '<p>：百度一下...</p>' + '</div>' + '</div>'
      $('body').append(tmpHtml)
    }
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
      let animstr = 'bounceIn,fadeIn,pulse,zoomIn,tada,swing'.split(',')
      let $thewords = $('#thewords')
      let $theidea = $('#theidea')
      let wordslen = words.length
      let num = 0
      function showidea () {
        let $webtext = $('<p>').html('Web is the better way')
        let $fontendtext = $('<p>').html('Fontend is awesome')
        $webtext.appendTo($theidea)
        $fontendtext.appendTo($theidea)
        $theidea.addClass('theidea animated zoomIn')
      }
      function animwords () {
        num++
        if (num > wordslen) {
          num = 0
        }
        let animatnum = Math.floor(Math.random() * animstr.length)
        let $theword = $('<span>').css({'position': 'absolute', 'left': xb.rand(minwidth, maxwidth) + 'px', 'top': xb.rand(minheight, maxheight) + 'px', 'opacity': 0.5}).addClass('animated ' + animstr[animatnum]).html(words[num])
        let mtimer = setTimeout(function () {
          $theword.appendTo($thewords).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            let $this = $(this)
            $this.removeClass('animated zoomIn')
            let ntimer = setTimeout(function () {
              $this.css({'left': width / 2 - 30 + 'px', 'top': height / 2 + 'px', 'opacity': 0})
              let mntimer = setTimeout(function () {
                $this.remove()
                clearTimeout(mntimer)
                ntimer = mntimer
              }, 1000)
              clearTimeout(ntimer)
              ntimer = null
            }, 0)
          })
          clearTimeout(mtimer)
          mtimer = null
        }, 400 + num * 20)
        setTimeout(animwords, 200)
      }
      showidea()
      animwords()
    }
  }
}
</script>
