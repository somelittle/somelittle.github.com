webpackJsonp([0,2],[,,,function(t,e,a){"use strict";var n=a(1),s=a.n(n),i=a(32),o=a.n(i),r=a(20),l=a.n(r),c=a(19),v=a.n(c),u=a(16),d=a.n(u),m=a(15),f=a.n(m),_=a(18),p=a.n(_),h=a(17),w=a.n(h),b=a(21),g=a.n(b),y=a(22),C=a.n(y);s.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Home",component:v.a},{path:"/lab",name:"Lab",component:l.a,children:[{path:"/lab",component:p.a},{path:"/lab/flyinginsects",component:p.a},{path:"/lab/butterfly",component:w.a}]},{path:"/blog",name:"Blog",component:d.a,children:[{path:"/blog/website",component:g.a},{path:"/blog/weekly",component:C.a}]},{path:"/about",name:"About",component:f.a}]})},function(t,e,a){var n=a(0)(a(6),a(30),null,null);t.exports=n.exports},function(t,e){t.exports={rand:function(t,e){return Math.floor(t+Math.random()*(e-t+1))}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lab",data:function(){return{msg:"about"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),s=a.n(n);e.default={name:"blog",data:function(){return{msg:"^_^ no blog!"}},mounted:function(){this.showMenu()},methods:{showMenu:function(){var t=s()("#floatnav"),e="but I follow some website , some weekly and some people ...".split(" "),a=s()("#msg");t.addClass("animated slideInUp").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.forEach(function(t,e){var n=setTimeout(function(){a.append(t+" "),clearTimeout(n),n=null},500+60*e)})})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"butterfly",data:function(){return{msg:"Home"}},mounted:function(){this.bf()},methods:{bf:function(){function t(){u=document.documentElement.clientWidth||document.body.clientWidth,d=document.documentElement.clientHeight||document.body.clientHeight,m=a.offsetHeight,f=a.offsetWidth,_?l+=c:l-=c,l<60&&(_=1,l=60),l>=d-m-60&&(_=0,l=d-m-60),p?r+=c:r-=c,r<60&&(p=1,r=60),r>=u-f-60&&(p=0,r=u-f-60),a.style.left=r+document.body.scrollLeft+"px",a.style.top=l+document.body.scrollTop+"px"}function e(){setInterval(t,v)}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var a=this.$refs.bf,n=a.getContext("2d"),s=10;n.width=100,n.height=100;var i=null;i&&(window.cancelRequestAnimationFrame(i),i=null);var o=function t(){var e=40,a=40;n.clearRect(0,0,100,100),n.beginPath(),n.moveTo(e,a),n.quadraticCurveTo(e-5,a-20,e-15,a-20),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(e,a),n.quadraticCurveTo(e-5,a-15,e-15,a-10),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(e+5,a+5),n.quadraticCurveTo(e+5,a+10,e+30,a+40),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(e+5,a+5),n.quadraticCurveTo(e+5,a+10,e+30,a+30),n.stroke(),n.closePath(),s--,s<0?(s=10,n.beginPath(),n.moveTo(e,a),n.quadraticCurveTo(e+20,a-80,e+40,a),n.fillStyle="rgba(42,218,182,0.8)",n.fill(),n.beginPath(),n.moveTo(e,a),n.bezierCurveTo(e+60,a-80,e+70,a+30,e+20,a+10),n.fillStyle="rgba(0,153,255,0.9)",n.fill()):(n.beginPath(),n.moveTo(e,a),n.quadraticCurveTo(e+20-s,a-80+s,e+40,a),n.fillStyle="rgba(42,218,182,0.8)",n.fill(),n.beginPath(),n.moveTo(e,a),n.bezierCurveTo(e+60-s,a-80+s,e+70+s,a+30+s,e+20,a+10),n.fillStyle="rgba(0,153,255,0.9)",n.fill()),n.beginPath(),n.moveTo(e,a),n.bezierCurveTo(e+40,a+10,e+40,a+50,e,a),n.fillStyle="black",n.fill(),n.beginPath(),n.moveTo(e+1,a+1),n.arc(e-1,a-1,3,0,2*Math.PI,!0),n.fillStyle="black",n.fill(),i=window.requestAnimFrame(t)};o();var r=400,l=200,c=1,v=10,u=0,d=0,m=0,f=0,_=0,p=0;a.style.top=0,e()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flyinginsects"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(5),s=a.n(n),i=a(2),o=a.n(i);e.default={name:"home",data:function(){return{msg:"Home"}},mounted:function(){if("undefined"!=typeof Worker)this.showwords();else{var t='<div class="e-support"><div class="face"></div><div class="ebox"><p>：童靴...</p><p>：都HTML5了，换个最新的浏览器吧！</p><p>：火狐、谷歌、IE11，最最新的...</p><p>：百度一下...</p></div></div>';o()("body").append(t)}},methods:{showwords:function(){function t(){var t=o()("<p>").html("Web is the better way"),e=o()("<p>").html("Fontend is awesome");t.appendTo(m),e.appendTo(m),m.addClass("theidea animated zoomIn")}function e(){_++,_>f&&(_=0);var t=Math.floor(Math.random()*u.length),m=o()("<span>").css({position:"absolute",left:s.a.rand(l,i)+"px",top:s.a.rand(c,r)+"px",opacity:.5}).addClass("animated "+u[t]).html(v[_]),p=setTimeout(function(){m.appendTo(d).on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){var t=o()(this);t.removeClass("animated zoomIn");var e=setTimeout(function(){t.css({left:a/2-30+"px",top:n/2+"px",opacity:0});var s=setTimeout(function(){t.remove(),clearTimeout(s),e=s},1e3);clearTimeout(e),e=null},0)}),clearTimeout(p),p=null},400+20*_);setTimeout(e,200)}var a=window.innerWidth,n=window.innerHeight,i=Math.round(.9*a),r=Math.round(.9*n),l=Math.round(.1*window.innerWidth),c=Math.round(.1*window.innerHeight),v="HTML5,CSS3,Javascript,ES6,nodejs,npm,Webpack,Sass,Vuejs,Reactjs,Photoshop,ResponsiveDesign,frontend,PWA".split(","),u="bounceIn,fadeIn,pulse,zoomIn,tada,swing".split(","),d=o()("#thewords"),m=o()("#theidea"),f=v.length,_=0;t(),e()}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lab"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"website",data:function(){return{msg:"website"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"weekly",data:function(){return{msg:"weekly"}}}},function(t,e,a){var n=a(0)(a(7),a(25),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(8),a(23),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(9),a(29),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(10),a(28),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(11),a(26),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(12),a(27),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(13),a(24),null,null);t.exports=n.exports},function(t,e,a){var n=a(0)(a(14),a(31),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"floatnav",attrs:{id:"floatnav"}},[a("ul",{staticClass:"menulist"},[a("li",[a("router-link",{attrs:{to:"/blog"}},[t._v("blog")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/blog/website"}},[t._v("website")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/blog/weekly"}},[t._v("weekly")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/blog"}},[t._v("people")])],1)])]),t._v(" "),a("div",{staticClass:"floatnav-wrap"},[a("p",{attrs:{id:"msg"}},[t._v(t._s(t.msg)+" ")]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nvlist"},[a("a",{attrs:{href:"https://whatwg.org/"}},[t._v("whatwg")]),t._v(" "),a("a",{attrs:{href:"http://www.webplatform.org/"}},[t._v("webplatform")]),t._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/"}},[t._v("mozilladeveloper")]),t._v(" "),a("a",{attrs:{href:"www.html5rocks.com"}},[t._v("html5rocks")]),t._v(" "),a("a",{attrs:{href:"http://blogs.adobe.com/webplatform/"}},[t._v("adobe webplatform")]),t._v(" "),a("a",{attrs:{href:"http://www.smashingmagazine.com/"}},[t._v("smashingmagazine")]),t._v(" "),a("a",{attrs:{href:"http://tutorialzine.com/"}},[t._v("tutorialzine")]),t._v(" "),a("a",{attrs:{href:"http://www.webappers.com"}},[t._v("webappers")]),t._v(" "),a("a",{attrs:{href:"http://www.sitepoint.com/"}},[t._v("sitepoint")]),t._v(" "),a("a",{attrs:{href:"http://www.awwwards.com/"}},[t._v("awwwards")]),t._v(" "),a("a",{attrs:{href:"http://www.thefwa.com/"}},[t._v("thefwa")]),t._v(" "),a("a",{attrs:{href:"http://www.iiiimg.com"}},[t._v("iiiimg")]),t._v(" "),a("a",{attrs:{href:"https://dribbble.com/"}},[t._v("dribbble")]),t._v(" "),a("a",{attrs:{href:"http://www.awwwards.com/"}},[t._v("awwwards")]),t._v(" "),a("a",{attrs:{href:"http://www.cssdesignawards.com/"}},[t._v("cssdesignawards")]),t._v(" "),a("a",{attrs:{href:"https://www.behance.net/"}},[t._v("behance")]),t._v(" "),a("a",{attrs:{href:"http://www.w3cplus.com/"}},[t._v("w3cplus")]),t._v(" "),a("a",{attrs:{href:"http://www.awesomes.cn/"}},[t._v("awesomes")]),t._v("   \n...\n\n")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"aboutarea"},[a("h3",[t._v("about")]),t._v(" "),a("p",[t._v("Hey, I’m ChenXingbing. ")]),t._v(" "),a("p",[t._v("I’m a frontend developer living in shenzhen, china.")]),t._v(" "),a("p",[t._v("I’m a fan of technology, web development.")]),t._v(" "),a("p",[t._v("I’m also interested in design, music, sports.")]),t._v(" "),a("h3",[t._v("SKILLS")]),t._v(" "),a("p",[t._v("Html5 CSS3 Javascript React.js Vue.js Sass Node.js Webpack Gulp Git Photoshop ...")]),t._v(" "),a("h3",[t._v("contact")]),t._v(" "),a("p",[t._v("Email: croow@aliyun.com")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"thewords",attrs:{id:"thewords"}}),t._v(" "),a("div",{attrs:{id:"theidea"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"subnav"},[a("router-link",{attrs:{to:"/lab/flyinginsects"}},[t._v("a flying insects")]),t._v(" "),a("router-link",{attrs:{to:"/lab/butterfly"}},[t._v("a little butterfly")])],1),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"maintitle"},[a("h2",[t._v("超越需要 "),a("a",{staticClass:"animt",attrs:{href:"#"}},[t._v("蜕")]),t._v(" "),a("span",{staticClass:"animb"},[t._v("变")]),t._v(" ，"),a("br"),t._v("尽管破茧而出的不是最美的蝴蝶！......")])]),t._v(" "),a("div",{staticClass:"insectshow",attrs:{id:"insectshow"}},[a("div",{staticClass:"insect insecthover",attrs:{id:"insect"}},[a("div",{staticClass:"insect-body"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]),t._v(" "),a("div",{staticClass:"insect-L"}),t._v(" "),a("div",{staticClass:"insect-L-0"}),t._v(" "),a("div",{staticClass:"insect-L-1"}),t._v(" "),a("div",{staticClass:"insect-L-2"}),t._v(" "),a("div",{staticClass:"insect-R"}),t._v(" "),a("div",{staticClass:"insect-R-0"}),t._v(" "),a("div",{staticClass:"insect-R-1"}),t._v(" "),a("div",{staticClass:"insect-R-2"})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("canvas",{ref:"bf",staticClass:"cav"})])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"maintitle"},[a("h2",[t._v("This is just a simple demo"),a("br"),t._v("width canvas...")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("header",{staticClass:"top fixed-top"},[t._m(0),t._v(" "),a("label",{staticClass:"menutoggle"},[a("ul",{staticClass:"navbar"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab"}},[t._v("Lab")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])]),t._v(" "),a("div",{ref:"me",staticClass:"me"},[a("span"),t._v(" "),a("i")]),t._v(" "),t._m(1)]),t._v(" "),a("section",{staticClass:"content",attrs:{id:"content"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"view"})],1)],1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"logo"}},[a("a",{attrs:{href:"/"}},[a("span",{staticClass:"c1"},[t._v("SOME")]),a("span",{staticClass:"c2"},[t._v("LITTLE")]),a("i",{staticClass:"light"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutme"},[a("div",{staticClass:"mehere",attrs:{id:"mehere"}},[a("div",{staticClass:"mepic"}),t._v(" "),a("div",{staticClass:"medetail"},[a("h3",[t._v("SOMELITLE")]),t._v(" "),a("p",[t._v("chenXingbin")]),t._v(" "),a("p",[t._v("croow@aliyun.com")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bottom"},[a("ul",{staticClass:"navtool"},[a("li",[a("span",[t._v("SmallTalk")])]),t._v(" "),a("li",[a("span",[t._v("Share")])]),t._v(" "),a("li",[a("span",[t._v("Map")])])]),t._v(" "),a("div",{staticClass:"cr"},[t._v("\n        SOMELITTLE  \n        "),a("audio",{attrs:{src:"img/sadangel.mp3",autoplay:"",loop:"",width:"160"}},[t._v("悲伤的天使")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nvlist"},[a("a",{attrs:{href:"http://html5weekly.com/"}},[t._v("html5weekly")]),t._v(" "),a("a",{attrs:{href:"http://css-weekly.com/"}},[t._v("css-weekly")]),t._v(" "),a("a",{attrs:{href:"http://javascriptweekly.com/"}},[t._v("javascriptweekly")]),t._v(" "),a("a",{attrs:{href:"http://web-design-weekly.com/"}},[t._v("web-design-weekly")]),t._v(" "),a("a",{attrs:{href:"http://responsivedesignweekly.com/"}},[t._v("responsivedesignweekly")]),t._v(" "),a("a",{attrs:{href:"http://fex.baidu.com/weekly/"}},[t._v("百度FEX")]),t._v(" "),a("a",{attrs:{href:"https://weekly.75team.com/"}},[t._v("奇舞周刊")]),t._v(" "),a("a",{attrs:{href:"http://www.feweekly.com"}},[t._v("feweekly")]),t._v("\n  ...\n\n")])}]}},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),s=a.n(n),i=a(4),o=a.n(i),r=a(3);new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})}],[34]);
//# sourceMappingURL=app.cf62a3cb67b61d9b2c2a.js.map