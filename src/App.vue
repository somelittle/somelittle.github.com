<template>
  <div class="wrap">   
    <header class="top fixed-top">
      <div id="logo">
        <a href="/"><span class="c1">SOME</span><span class="c2">LITTLE</span><i class="light"></i></a>               
      </div>
      <label class="menutoggle">    
          <ul class="navbar">              
          <li><router-link to="/">Home</router-link></li>              
          <li><router-link to="/lab">Lab</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li> 
          <li><router-link to="/about">About</router-link></li>                 
          </ul>
      </label>
      <div class="me" ref="me">
          <span></span>
          <i></i>              
      </div>
      <div class="aboutme">
          <div class="mehere" id="mehere">    
              <div class="mepic"></div>
              <div class="medetail">            
                  <h3>SOMELITLE</h3>
                  <p>chenXingbin</p>
                  <p>croow@aliyun.com</p>
              </div>
          </div>    
      </div>
    </header>            
    <section id="content" class="content">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
                         
    </section> 
      <footer class="bottom">            
        <ul class="navtool">
          <li>
            <span>SmallTalk</span>
          </li>
          <li>
              <span>Share</span>
          </li>    
          <li>
              <span>Map</span>
          </li>
        </ul>
        <div class="cr">
          SOMELITTLE  
          <audio src="img/sadangel.mp3" autoplay loop width="160">悲伤的天使</audio>
        </div> 
      </footer>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

