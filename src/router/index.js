import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/PokemonView.vue'

const routes = [
  {
    path: '/',
    name: 'Pokemon',
    component: HomeView
  },
  {
    path: '/type/:type',
    name: 'Type',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TypeView.vue')
  },
  {
    path: '/pokemon/:name',
    name: 'singlePokemon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SinglePokemonView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
