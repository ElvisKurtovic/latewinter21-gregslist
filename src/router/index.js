import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import AboutPage from '../pages/AboutPage.vue'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
// @ts-ignore
import HomePage from '../pages/HomePage.vue'
// @ts-ignore
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
// @ts-ignore
import HousesPage from '../pages/HousesPage.vue'
// @ts-ignore
import JobDetailsPage from '../pages/JobDetailsPage.vue'
// @ts-ignore
import JobsPage from '../pages/JobsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
  {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  },
  {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsPage
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
