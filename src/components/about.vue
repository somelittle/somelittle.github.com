<template>
  <div class="main">
  	<div class="aboutarea">
  	   <div class="bigwords">
        <h3>Hello</h3>
        <h3>World!</h3>
        </div>
	   </div>     
    <ul class="aboutnav" id="aboutnav">
      <li><a href="javascript:;">about</a></li>
      <li><a href="javascript:;">skills</a></li>
      <li><a href="javascript:;">work</a></li>
      <li><a href="javascript:;">contact</a></li>
    </ul> 
    <div class="aboutshow">
      <div id="aboutshow"></div>
    </div>    
  </div>
</template>

<script>
import $ from 'jquery'
import '../animateCss.js'
export default {
  name: 'about',
  data () {
    return {
      msg: 'about'
    }
  },
  mounted () {
    let about = '<h3>about</h3>' +
    '<p>Hey, I’m ChenXingbing. </p>' +
    '<p>I’m a frontend developer living in shenzhen, china.</p>' +
    '<p>I’m a fan of technology, web development.</p>' +
    '<p>I’m also interested in design, music, sports.</p>'
    let skills = '<h3>skills</h3>' + '<p>Html5,CSS3,Javascript,React.js,Vue.js,Sass,Node.js,Webpack,Gulp,Git,Photoshop,Dreamweaver,SublimeText ......</p>'
    let work = '<h3>work</h3>'
    let contact = '<h3>contact</h3>' + 'Email: croow@aliyun.com'
    let content = {about, skills, work, contact}
    let $aboutnav = $('#aboutnav')
    let $aboutshow = $('#aboutshow')
    function showabout (o) {
      $aboutshow.html(o).animateCss('slideInRight')
    }
    function showaboutnav () {
      $aboutnav.animateCss('slideInRight')
    }
    showaboutnav()
    showabout(content.about)
    $aboutnav.find('>li').on('click', function () {
      var name = $(this).find('a').html()
      showabout(content[name])
    })
  }
}
</script>

