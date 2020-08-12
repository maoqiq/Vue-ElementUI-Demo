import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('@/views/Home')), 'home')
const signup = r => require.ensure([], () => r(require('@/views/SignUp')), 'signup')
const about = r => require.ensure([], () => r(require('@/views/About')), 'about')
const enter = r => require.ensure([], () => r(require('@/views/Enter')), 'enter')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home

  },
  {
    path: '/signup',
    name: 'Signup',
    component: signup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about
  },
  {
    path: '/enter',
    name: 'Enter',
    component: enter
  }
]

const router = new VueRouter({
  routes
})

export default router
