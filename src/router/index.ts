import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainLayout from '../layout/MainLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/MainLayout',
    name: 'MainLayout',
    component: MainLayout,
    meta: {
      title:'主布局',
      keepAlive: true,
    },
    children:[
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta:{
          title:'关于',
          keepAlive:false,
        }
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title:'首页',
      keepAlive:false,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {       //每次页面返回顶部
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title=to.meta.title;    //改变每次页面的标题
  next();
})

export default router

