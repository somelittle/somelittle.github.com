<template>
  <div class="main">
  	<br> 
  	<br>  	
    <p>I don't write blog,but I follow these ... </p>
  	<ul class="tabnav">  		             
        <li class="hover"><router-link to="/blog/website">website</router-link></li>
        <li><router-link to="/blog/weekly">weekly</router-link></li>
  	</ul>
  	<div class="tabcontent">
  		<transition name="fade" mode="out-in">  			
	  		<router-view></router-view>	  		
	  	</transition>
	</div>
	
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

