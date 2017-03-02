import Vue from 'vue'
import Router from 'vue-router'
import Lab from 'components/lab'
import Home from 'components/home'
import Blog from 'components/blog'
import About from 'components/about'
import Flyinginsects from 'components/flyinginsects'
import Butterfly from 'components/butterfly.vue'
import Website from 'components/website.vue'
import Weekly from 'components/weekly.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lab',
      name: 'Lab',
      component: Lab,
      children: [
        { path: '/lab', component: Flyinginsects },
        { path: '/lab/flyinginsects', component: Flyinginsects },
        { path: '/lab/butterfly', component: Butterfly }
      ]
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [
        { path: '/blog/website', component: Website },
        { path: '/blog/weekly', component: Weekly }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
