import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue')
  },
  {
    path: '/project/:projectId',
    name: 'Project',
    props:true,
    component: () => import(/* webpackChunkName: "projectpage" */ '../views/ProjectPage.vue')
  },
  {
    // will match everything
    path: '/404',
    name:"404",
    component: () => import(/* webpackChunkName: "resume" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router