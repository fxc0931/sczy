
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../views/Home/index.vue'
import HomeContent from '../views/Home/home.vue'
import News from '../views/News/index.vue'
import HealthNurturing from '../views/HealthNurturing/index.vue'
import Treat from '../views/Treat/index.vue'
import Stores from '../views/Stores/index.vue'
import Business from '../views/Business/index.vue'
import Medicine from '../views/Medicine/index.vue'
import Hospital from '../views/Hospital/index.vue'
import Agency from '../views/Agency/index.vue'

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
  },
    {
      path: "/",
      name: "Home",
      component: Home,
      children:[
        {
         path: "/home",
         component: HomeContent,
        },
        {
          path: "/news",
          component: News,
         },
         {
          path: "/health-nurturing",
          component: HealthNurturing,
         },
         {
          path: "/treat",
          component: Treat,
         },
         {
          path: "/stores",
          component: Stores,
         },
         {
          path: "/business",
          component: Business,
         },
         {
          path: "/medicine",
          component: Medicine,
         },
         {
          path: "/hospital",
          component: Hospital,
         },
         {
          path: "/agency",
          component: Agency,
         },
        
      ]
    }
  ]
})

export default router