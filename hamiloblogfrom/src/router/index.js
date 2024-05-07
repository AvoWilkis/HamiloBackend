import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import VerMasView from '../views/VerMasView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import BlogView from '../views/BlogView.vue'
import AuthView from '../views/AuthView.vue'
import SobreMIView from '../views/SobreMIView.vue'
import ContactoView from '../views/ContactoView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InicioView
    },
    {
      path: '/vermas/:id',
      name: 'vermas',
      component: VerMasView
    },
    {
      path: '/blog/:param?',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView
    },
    {
        path: '/auth',
        name: 'auth',
        component: AuthView
      },
    {
        path: '/sobremi',
        name: 'sobremi',
        component: SobreMIView
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: ContactoView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
