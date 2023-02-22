import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../components/Layout/Login.vue'
import Dashboard from '../components/Layout/Dashboard.vue'
import LocationsView from '../views/LocationView.vue'
import TabelView from '../views/TabelView.vue'
import AddProduct from '../components/AddProduct.vue'
import UserProfile from '../views/UserProfile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/product',
        name: 'product',
        component: AboutView

      },
      {
        path: '/tabel',
        name: 'tabel',
        component: TabelView

      },
      {
        path: '/locations',
        name: 'locations',
        component: LocationsView

      },
      {
        path: '/user',
        name: 'user',
        component: UserProfile

      },
      {
        path: '/addproduct',
        name: 'addproduct',
        component: AddProduct

      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
