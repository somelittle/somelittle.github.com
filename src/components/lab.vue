<template>
  <div class="main">  
	  <div class="subnav">
	  	<router-link to="/lab/flyinginsects">a flying insects</router-link>
	  	<router-link to="/lab/butterfly">a little butterfly</router-link>      
	  </div>
	  <transition name="fade" mode="out-in">
	  	<router-view></router-view>
	  </transition>
  </div>
</template>
 
<script>
export default {
  name: 'lab'
}
</script>

