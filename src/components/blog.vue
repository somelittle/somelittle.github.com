<template>
  <div class="main">  	
    <div class="floatnav" id="floatnav">
    	<ul class="menulist">
          <li><router-link to="/blog">blog</router-link></li>  		             
          <li><router-link to="/blog/website">website</router-link></li>
          <li><router-link to="/blog/weekly">weekly</router-link></li>
          <li><router-link to="/blog">people</router-link></li>
    	</ul>
    </div>
  	<div class="floatnav-wrap">
      <p id="msg">{{msg}} </p>
  		<transition name="fade" mode="out-in">  			
	  		<router-view></router-view>	  		
	  	</transition>
	</div>	
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'blog',
  data () {
    return {
      msg: '^_^ no blog!'
    }
  },
  mounted () {
    this.showMenu()
  },
  methods: {
    showMenu () {
      let $floatnav = $('#floatnav')
      let words = 'but I follow some website , some weekly and some people ...'.split(' ')
      let $msg = $('#msg')
      $floatnav.addClass('animated slideInUp').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        words.forEach(function (element, index) {
          let timer = setTimeout(function () {
            $msg.append(element + ' ')
            clearTimeout(timer)
            timer = null
          }, 500 + index * 60)
        })
      })
    }
  }
}
</script>

